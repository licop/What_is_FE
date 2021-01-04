// Proxy 对象

const person = {
  name: 'zce',
  age: 20
}

const personProxy = new Proxy(person, {
  // 监视属性读取
  get (target, property) {
    // 给不存在的属性添加默认值
    return property in target ? target[property] : 'default'
  },
  // 监视属性设置
  set (target, property, value) {
    // target参数表示所要拦截的目标对象
    // property为监视的属性，当属性有设置操作会被监视
    // value的值
    console.log(target, property, value)
    // 监视age属性当不是ini数字类型是报错
    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError(`${value} is not an int`)
      }
    }

    target[property] = value
  }
})

personProxy.age = 100
personProxy.gender = true

console.log(personProxy.age)  // 100
console.log(personProxy.xxx)  // defaul
console.log(person)  // { name: 'zce', age: 100, gender: true }

// Proxy 对比 Object.defineProperty() ===============



// 优势1：Proxy 可以监视读写以外的操作 --------------------------

// const person = {
//   name: 'zce',
//   age: 20
// }

// const personProxy = new Proxy(person, {
//   deleteProperty (target, property) {
//     console.log('delete', property)
//     delete target[property]
//   }
// })

// delete personProxy.age
// console.log(person)

// 优势2：Proxy 可以很方便的监视数组操作 --------------------------

const list = []

const listProxy = new Proxy(list, {
  set (target, property, value) {
    console.log('set', property, value)
    target[property] = value
    return true // 表示设置成功
  }
})

listProxy.push(100)
listProxy.push(100)

// 优势3：Proxy 不需要侵入对象 --------------------------

const person = {}

Object.defineProperty(person, 'name', {
  get () {
    console.log('name 被访问')
    return person._name
  },
  set (value) {
    console.log('name 被设置')
    person._name = value
  }
})
Object.defineProperty(person, 'age', {
  get () {
    console.log('age 被访问')
    return person._age
  },
  set (value) {
    console.log('age 被设置')
    person._age = value
  }
})

person.name = 'jack'

console.log(person.name)

// Proxy 方式更为合理
const person2 = {
  name: 'zce',
  age: 20
}

const personProxy = new Proxy(person2, {
  get (target, property) {
    console.log('get', property)
    return target[property]
  },
  set (target, property, value) {
    console.log('set', property, value)
    target[property] = value
  }
})

personProxy.name = 'jack'
console.log(person.name)