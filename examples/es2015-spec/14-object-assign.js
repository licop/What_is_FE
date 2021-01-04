// Object.assign 方法

const source1 = {
  a: 123,
  b: 123
}

const source2 = {
  b: 789,
  d: 789
}

const target = {
  a: 456,
  c: 456
}

const result = Object.assign(target, source1, source2)

console.log(target)
console.log(result === target)

// 应用场景， 将参数赋值给一个新的对象上面进行修改
function func (obj) {
  // obj.name = 'func obj'
  // console.log(obj)

  const funcObj = Object.assign({}, obj)
  funcObj.name = 'func obj'
  console.log(funcObj)
}

const obj = { name: 'global obj', age: '25' }

func(obj)
console.log(obj)
