const log = console.log;
const _ = '_';
class Cons {
  constructor(car, cdr) {
    this.car = car;
    this.cdr = cdr;
  }
}

const cons = (a, b) => new Cons(b, a);

const xs = [1, 2, 3, 4].reverse().reduce(cons, null);

function relMax(xs) {
  (() => {
    if (xs && xs.constructor.name === 'Cons' && 2 === Object.values(xs).length && true && Object.values(xs)[1] && Object.values(xs)[1].constructor.name === 'Cons' && 2 === Object.values(Object.values(xs)[1]).length && true && Object.values(Object.values(xs)[1])[1] && Object.values(Object.values(xs)[1])[1].constructor.name === 'Cons' && 2 === Object.values(Object.values(Object.values(xs)[1])[1]).length && true && true) {
      let x = Object.values(xs)[0];
      let y = Object.values(Object.values(xs)[1])[0];
      let z = Object.values(Object.values(Object.values(xs)[1])[1])[0];
      let xs = Object.values(Object.values(Object.values(xs)[1])[1])[1];
      return y > x && y > z ? true : false;
    }

    if (xs && xs.constructor.name === 'Cons' && 2 === Object.values(xs).length && true && Object.values(xs)[1] && Object.values(xs)[1].constructor.name === 'Cons' && 2 === Object.values(Object.values(xs)[1]).length && true && Object.values(Object.values(xs)[1])[1] === null) {
      let x = Object.values(xs)[0];
      let y = Object.values(Object.values(xs)[1])[0];
      return false;
    }
  })();
}

function test(xs) {
  log('testttt', (() => {
    if (xs && xs.constructor.name === 'Cons' && 2 === Object.values(xs).length && Object.values(xs)[0] === 1 && Object.values(xs)[1] && Object.values(xs)[1].constructor.name === 'Cons' && 2 === Object.values(Object.values(xs)[1]).length && Object.values(Object.values(xs)[1])[0] === 2 && Object.values(Object.values(xs)[1])[1] === null) {
      return a;
    }

    if (xs && xs.constructor.name === 'Cons' && 2 === Object.values(xs).length && Object.values(xs)[0] === 3 && true) {
      return 4;
    }
  })());
}

function t(x) {
  const isTwo = x => x == 2;
  let z = (() => {
    if (1 === Object.values(x).length && (y => isTwo(y))(Object.values(x)[0])) {
      let y = Object.values(x)[0];
      return 5;
    }

    if (3 === Object.values(x).length && true && true && Object.values(x)[0] === Object.values(x)[2]) {
      let a = Object.values(x)[0];
      let b = Object.values(x)[1];
      return a;
    }

    if (4 === Object.values(x).length && Object.values(x)[0] === 1 && Object.values(x)[1] === 2 && Object.values(x)[2] === 3 && true) {
      return 7;
    }
  })();
  log('z', z);
  return "IT WORKED";
}

log(t([2, 4, 2]));