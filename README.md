# js-pattern-matching
### Run

1. Clone repo
2. `npm install` (Installs babel.)
3. `node run.js examples/redblack-tree.js` (Converts redblack-tree.js into valid javascript and writes it to `out.js`.)
4. `node out.js` (Run the converted code.)

### Explanation

What is pattern matching? It's a great language feature that lets you match and destructure arguments based on their constructors.
An example in Haskell:
```
map _ []     = []
map f (x:xs) = f x : map f xs
```
The above function `map` has two function bodies, depending on which arguments are given to it. The first line matches anything that's passed as the first argument, only an empty list as the second, then returns the empty list. The second line matches anything as the first argument, binds it to `f`, then matches the second argument against the  `:` (cons) constructor, and executes the function body using those variable bindings. Depending on which pattern the two arguments to map match against, it'll return either an empty list or the result of evaluating `f x : map f xs`.

It's a powerful language feature that you can think of as combining argument destructuring and conditionals.

This repo was my attempt at implementing pattern matching in Javascript without looking at any existing implementations in other languages. It's implemented as a Babel plugin. It works by converting every pattern in a series of patterns into equivalent conditional tests, and creating a corresponding `let` statement for the variable bindings.

As proof that it works, I wrote a red-black tree implementation in javascript using this pattern mattern matching plugin (found in the "examples" folder).

### Further Reading
After attempting my own implementation, I looked around and found a couple great resources on implementing production-ready pattern matching:
[Efficient Compilation of Pattern Matching](http://research.microsoft.com/en-us/um/people/simonpj/papers/slpj-book-1987/PAGES/078.HTM), a chapter in *The Implementation of Functional Programming Languages* by Simon Peyton Jones and
[Compiling Pattern Matching to good Decision Trees](http://www.cs.tufts.edu/%7Enr/cs257/archive/luc-maranget/jun08.pdf) (pdf).
