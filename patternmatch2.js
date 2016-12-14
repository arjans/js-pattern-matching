const wc = '_';
const log = console.log;

class Cons {
  constructor(a,b) {
  	this.car = a;
  	this.cdr = b;
  }
}

const cons = (a,b) => new Cons(a,b);

const list = cons(1, cons(2, null));

// Match integers
function factorial(n) {
	return evalPatterns([n],
               [[ 0 ], () => 1],
               [['_'], () => n * factorial(n - 1)]);
}

// Match multiple values
function addIfOne (a, b) {
  return evalPatterns([a, b], 
                [[1, '_'], () => a + b],
                [['_', '_'], () => 0])
}

// Match custom constructor
function numOnes(list) {
	return evalPatterns([list],
               [[null], () => 0],
               [[[Cons, 1, '_']], (lst) => 1 + numOnes(lst.cdr)],
               [[[Cons, '_', '_']], (lst) => numOnes(lst.cdr)]);
}

// Match multiple values of mixed constructors
function take(n, list) {
  return evalPatterns([n, list],
                [[0, '_'], () => null],
                [['_', null], () => null],
                [['_', [Cons, '_', '_']], (n, lst) => cons(lst.car, take(n - 1, lst.cdr))]);
}

// Match nested constructors
function everyOther(list) {
  return evalPatterns([list],
                [[null], () => null],
                [[[Cons, '_', null]], () => null],
                [[[Cons, '_', [Cons, '_', '_']]], (lst) => cons(lst.cdr.car, everyOther(lst.cdr.cdr))]);
}

function evalPatterns(args, ...ps) {
  let l = ps.length, i = 0, matched = false, vals = [];
  while (i < l) {
    if (match(transformArgs(args), ps[i][0])) {
      return ps[i][1](...args);
    }
    i++;
  }
  return false;
}

function match(vals, pats) {
  return pats.every((p,i) =>{
    let v = vals[i];
    if (p === wc) return true;
    if (Array.isArray(p) && Array.isArray(v)) return match(v,p);
    return p === v;
  })
}

function transformArgs(args) {
  if (Array.isArray(args)) return args.map(transformArgs);
  if (isPrim(args)) return args;
  return [args.constructor, ...Object.values(args).map(transformArgs)];
}

function isPrim(x) {
  if (null === x) return true;
  const type = typeof x,
    ts = ['number', 'string', 'boolean'];
  return ts.some(t => t === type);
}

Number.prototype.match = function (pattern) {
  if (pattern === wc) return true;
  return this.valueOf() === pattern;
}

log(numOnes(null));
log(numOnes(list));
log(take(2, cons(5,cons(6, cons(7, cons(8, null))))));
log(everyOther(cons(5,cons(6, cons(7, cons(8, null))))));
