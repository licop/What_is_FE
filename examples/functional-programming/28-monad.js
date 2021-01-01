// IO Monad
const fs = require('fs')
const fp = require('lodash/fp')

function showPackage(filename) {
  let package = fs.readFileSync(filename, 'utf-8');
  package = fp.toUpper(package);

  console.log(package)
}
showPackage('package.json');

// class IO {
//   static of (value) {
//     return new IO(value)
//   }

//   constructor (fn) {
//     this._value = fn
//   }

//   map (fn) {
//     return new IO(fp.flowRight(fn, this._value))
//   }

//   join () {
//     return this._value()
//   }

//   flatMap (fn) {
//     return this.map(fn).join()
//   }
// }

// let readFile = function (filename) {
//   return IO.of(function () {
//     return fs.readFileSync(filename, 'utf-8')
//   })
// }

// let print = function (x) {
//   return IO.of(function () {
//     console.log(x)
//     return x
//   })
// }

// let r = readFile('package.json')
//           // .map(x => x.toUpperCase())
//           .map(fp.toUpper)
//           .flatMap(print)
//           .join()

// console.log(r)