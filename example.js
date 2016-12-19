const log = console.log
class Cons {
  constructor(car, cdr) {
    this.car = car;
    this.cdr = cdr;
  }
}

const cons = (a, b) => new Cons(b, a);

const xs = [1,2,3,4].reduce(cons)

function relMax(xs) {
  match(xs, [Cons(x, Cons(y, Cons(z, xs))), y > x && y > z ? true : false ],
            [Cons(x, Cons(y, null)), false])
}


log(relMax(xs))
