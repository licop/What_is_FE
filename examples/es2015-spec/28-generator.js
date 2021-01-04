// Generator 函数

function * foo1 () {
  console.log('zce')
  return 100
}

const result = foo1()
console.log(result.next()) // { value: 100, done: true }

function * foo2 () {
  console.log('1111')
  yield 100
  console.log('2222')
  yield 200
  console.log('3333')
  yield 300
}

const generator = foo2()

console.log(generator.next()) // 第一次调用，函数体开始执行，遇到第一个 yield 暂停  { value: 100, done: false }
console.log(generator.next()) // 第二次调用，从暂停位置继续，直到遇到下一个 yield 再次暂停 { value: 200, done: false }
console.log(generator.next()) // 。。。 { value: 300, done: false }
console.log(generator.next()) // 第四次调用，已经没有需要执行的内容了，所以直接得到 undefined { value: undefined, done: true }
