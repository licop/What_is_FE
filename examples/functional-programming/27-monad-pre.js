// IO 函子的问题
const fs = require('fs')
const fp = require('lodash/fp')

class IO {
  static of (value) {
    return new IO(value)
  }

  constructor (fn) {
    this._value = fn
  }

  map (fn) {
    return IO.of(fp.flowRight(fn, this._value))
  }
}

let readFile = function (filename) {
  return IO.of(function () {
    return fs.readFileSync(filename, 'utf-8')
  })
}

let print = function (x) {
  return IO.of(function () {
    console.log(x)
    return x
  })
}

let cat = fp.flowRight(print, readFile)
// IO(IO(x))
let r = cat('package.json')._value()._value()
console.log(r)