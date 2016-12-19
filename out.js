const log = console.log;
class Cons {
  constructor(car, cdr) {
    this.car = car;
    this.cdr = cdr;
  }
}

const cons = (a, b) => new Cons(b, a);

const xs = [1, 2, 3, 4].reduce(cons);

function relMax(xs) {
  if (xs && xs.constructor.name === "Cons" && true && Object.values(xs)[1] && Object.values(xs)[1].constructor.name === "Cons" && true && Object.values(Object.values(xs)[1])[1] && Object.values(Object.values(xs)[1])[1].constructor.name === "Cons" && true && true) {
    let x = Object.values(xs)[0];
    let y = Object.values(Object.values(xs)[1])[0];
    let z = Object.values(Object.values(Object.values(xs)[1])[1])[0];
    let xs = Object.values(Object.values(Object.values(xs)[1])[1])[1];
    return y > x && y > z ? true : false;
  }

  if (xs && xs.constructor.name === "Cons" && true && Object.values(xs)[1] && Object.values(xs)[1].constructor.name === "Cons" && true && Object.values(Object.values(xs)[1])[1] === null) {
    let x = Object.values(xs)[0];
    let y = Object.values(Object.values(xs)[1])[0];
    return false;
  }
}

log(relMax(xs));