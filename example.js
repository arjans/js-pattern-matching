const log = console.log
const _ = '_'
class Cons {
  constructor(car, cdr) {
    this.car = car;
    this.cdr = cdr;
  }
}

const cons = (a, b) => new Cons(b, a);

const xs = [1,2,3,4].reverse().reduce(cons, null)

function relMax(xs) {
  match(xs, [Cons(x, Cons(y, Cons(z, xs))), y > x && y > z ? true : false ],
            [Cons(x, Cons(y, null)), false])
}

function test(xs) {
  log('testttt',match(xs, [Cons(1, Cons(2, null)), a], [Cons(3, _), 4]))
}

function t(x) {
  let z = match(x, [[], 5], [[1,2,3], 6], [[1,2,3,_], 7])
  log('z', z)
  return "IT WORKED"
}

log(t([]))
