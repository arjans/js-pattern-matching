// missing: lambdas, repetition of variable to show equality (e.g., [a,b,a])
// avoid repeatedly calling Object.values on same variable?
module.exports = function(babel) {
  const t = babel.types;

  const isIdent = n => t.isIdentifier(n),
        isWC = n => isIdent(n) && n.name === '_',
        isCaps = s => s.toUpperCase() === s,
        isVar = n => isIdent(n) && !isCaps(n.name[0]),
        isConstructor = n => t.isCallExpression(n) && isCaps(n.callee.name[0]),
        getConstructor = n => t.memberExpression(t.memberExpression(n, t.identifier('constructor')), t.identifier('name')),
        objVals = n => t.callExpression(t.memberExpression(t.identifier('Object'), t.identifier('values')), [n]),
        index = (n, i) => t.memberExpression(n, t.numericLiteral(i), true),
        makeLet = p => t.variableDeclaration("let", [t.variableDeclarator(p[0], p[1])]),
        makeAnd = (a, b) => t.logicalExpression('&&', a, b),
        makeEq = (a, b) => t.binaryExpression('===', a, b),
        pLength = p => t.isArrayExpression(p) ? p.elements.length : p.arguments.length,
        thunk = x => t.arrowFunctionExpression([], Array.isArray(x) ? t.blockStatement(x) : x),
        call = (f, arr) => t.callExpression(f, arr);

  function makeCondition(a, p, l) {
    // if function or lambda, apply to 'a'
    // maybe also assign a to a variable
    if (isWC(p))
      return t.booleanLiteral(true);
    if (isVar(p)) {
      l.push([p, a])
      return t.booleanLiteral(true);
    }
    if (isConstructor(p)) {
      let conditions = [];
      conditions.push(a);
      conditions.push(makeEq(getConstructor(a), t.stringLiteral(p.callee.name)));
      conditions.push(makeEq(t.numericLiteral(pLength(p)),
        t.memberExpression(objVals(a), t.identifier('length'))));
      conditions = conditions.concat(p.arguments.map((e, i) => makeCondition(index(objVals(a), i), e, l)));
      return conditions.reduce(makeAnd);
    }
    if (t.isArrayExpression(p)) {
      let conditions = [];
      conditions.push(makeEq(t.numericLiteral(pLength(p)),
        t.memberExpression(objVals(a), t.identifier('length'))));
      conditions = conditions.concat(p.elements.map((e, i) => makeCondition(index(objVals(a), i), e, l)));
      return conditions.reduce(makeAnd);
    }
    return makeEq(a, p);
  }


  function convertPairToConditional(arg) {
    // return a function of one argument so it can be used to map over patExprPairs
    return (pair) => {
      // array to collect local variables bound in the pattern
      let locals = [];
      // convert pattern to if statement
      let condition = makeCondition(arg, pair.elements[0], locals);
      // turn locals array into a let statement
      // the expression part of the pattern-expression pair in 'match' remains exactly the same
      let consequent = t.blockStatement(locals.map(makeLet)
                                              .concat(t.returnStatement(pair.elements[1])));

      return t.ifStatement(condition, consequent);
    };
  }

  return {
    name: "ast-transform",
    visitor: {
      CallExpression(path) {
        // check if the function being called is 'match'
        if (path.node.callee.name === 'match') {

          // break up the arguments to 'match'
          let argToMatch = path.node.arguments[0];
          let patExprPairs = path.node.arguments.slice(1);

          // replace the 'match' function with a series of conditionals
          // the conditionals are wrapped in a thunk that's immediately called
          // this allows 'match' to be used as an expression (you can use its return value)
          path.replaceWith(call(thunk(patExprPairs.map(convertPairToConditional(argToMatch))), []));
        }
      }
    }
  };
}
