// Symbol 补充

// console.log(
//   // Symbol() === Symbol()
//   Symbol('foo') === Symbol('foo')
// )

// Symbol 全局注册表 ----------------------------------------------------
const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2) // true

console.log(
  Symbol.for(true) === Symbol.for('true') // true
)

// 内置 Symbol 常量 ---------------------------------------------------
console.log(Symbol.iterator)
console.log(Symbol.hasInstance)
// toStringTag为内置Symbol 常量
const obj1 = {
  [Symbol.toStringTag]: 'XObject'
}
console.log(obj1.toString()) // [object XObject]

// Symbol 属性名获取 ---------------------------------------------------

const obj = {
  [Symbol()]: 'symbol value',
  [Symbol()]: 'symbol value1',
  foo: 'normal value'
}
for (var key in obj) {
  console.log(key)
}
console.log(Object.keys(obj))
console.log(JSON.stringify(obj))
console.log(Object.getOwnPropertySymbols(obj))

