# vue 数据响应式原理

## 什么是数据响应式

Vue.js 一个核心思想是**数据驱动**。所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。

为实现数据驱动，需要将数据变成**响应式**的，数据模型仅仅是普通的 javascript 对象，而当我们修改数据时，视图会进行更新，避免 DOM 操作，提高开发效率。

与 React 的**单项数据流不同**，Vue 实现了**双向绑定**即数据改变，视图改变；视图改变，数据也随之改变。可以使用 `v-modal` 在表单元素上创建双向数据绑定。

## 响应式核心原理

根据官方文档[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)的解释，在 Vue2.x 中，当你把一个普通的 JavaScript 对象传入 Vue 实例作为 `data` 选项，Vue 将遍历此对象所有的 property，并使用 `Object.defineProperty` 把这些 property 全部转为 `getter/setter`。

代码模拟

```
// 模拟 Vue 中的 data 选项
let data = {
  msg: 'hello',
  count: 10
}

// 模拟 Vue 的实例
let vm = {}

proxyData(data)

function proxyData(data) {
  // 遍历 data 对象的所有属性
  Object.keys(data).forEach(key => {
    // 数据劫持：当访问或者设置 vm 中的成员的时候，做一些干预操作
    // 把 data 中的属性，转换成 vm 的 setter/setter
    Object.defineProperty(vm, key, {
      // 可枚举（可遍历）
      enumerable: true,
      // 可配置（可以使用 delete 删除，可以通过 defineProperty 重新定义）
      configurable: true,
      // 当获取值的时候执行
      get () {
        console.log('get: ', key, data[key])
        return data[key]
      },
      // 当设置值的时候执行
      set (newValue) {
        console.log('set: ', key, newValue)
        if (newValue === data[key]) {
          return
        }
        data[key] = newValue
        // 数据更改，更新 DOM 的值
        document.querySelector('#app').textContent = data[key]
      }
    })
  })
}

// 测试
vm.msg = 'Hello World'
vm.count = '9'
console.log(vm.msg)  // 'Hello World'
console.log(data.msg) // 'Hello World'
```

在 vue3.0 中则使用`proxy`代替`Object.defineProperty`进行数据劫持，直接监听对象，而非属性，所以不用遍历对象。`proxy`是 ES 6 中新增的特性，性能由浏览器优化，所以比`Object.defineProperty`更快一点。更多关于`proxy`的介绍参考[Proxy](https://what-is-fe.licop.cn/syntax&API/ES%E8%AF%AD%E6%B3%95/ECMAScript%202015%20%E8%AF%AD%E6%B3%95.html#proxy)

代码模拟

```
// 模拟 Vue 中的 data 选项
let data = {
  msg: 'hello',
  count: 0
}

// 模拟 Vue 实例
let vm = new Proxy(data, {
  // 执行代理行为的函数
  // 当访问 vm 的成员会执行
  get (target, key) {
    console.log('get, key: ', key, target[key])
    return target[key]
  },
  // 当设置 vm 的成员会执行
  set (target, key, newValue) {
    console.log('set, key: ', key, newValue)
    if (target[key] === newValue) {
      return
    }
    target[key] = newValue
    document.querySelector('#app').textContent = target[key]
  }
})

// 测试
vm.msg = 'Hello World'
console.log(vm.msg)
```

## 发布订阅模式和观察者模式

**什么是发布订阅模式？**

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"(publish)一个信号，其他任务可以向信号中心"订阅"(subscribe)这个信号，从而知道什么时候自己可以开始执行。这就叫做 **"发布/订阅模式"(publish-subscribe pattern)**

vue 中的兄弟组件通信过程就是发布订阅模式, B 组件向消息中心**订阅**了`add-todo`信号，并注册了执行函数`this.addTodo`,然后在 A 组件中**发布**`add-todo`信号，并传递了参数，B 组件通过事件中心`eventHub`接收到信号，然后开始执行`this.addTodo`接受 A 组件传递过来的参数，完成组件件的通信。

```
// eventBus.js
// 事件中心
let eventHub = new Vue()

// ComponentA.vue
// 发布者
addTodo: function () {
  // 发布消息(事件)
  eventHub.$emit('add-todo', { text: this.newTodoText })
  this.newTodoText = ''
}

// ComponentB.vue
// 订阅者
created: function () {
  // 订阅消息(事件)
  eventHub.$on('add-todo', this.addTodo)
}
```

代码实现事件中心，实现发布订阅机制

```
// 事件触发器
class EventEmitter {
  constructor() {
    // { eventType: [ handler1, handler2 ] }
    this.subs = Object.create(null)
  }
  // 注册事件
  $on(eventTpye, handler) {
    this.subs[eventTpye] = this.subs[eventTpye] || [];
    this.subs[eventTpye].push(handler)
  }
  // 触发事件
  $emit() {
    // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出
    let eventTpye = [].shift.call(arguments);
    if(this.subs[eventTpye]) {
      this.subs[eventTpye].forEach(handler => {
        handler.apply(this, arguments)
      })
    }
  }
}

const em = new EventEmitter()

em.$on('click', () => {
  console.log('click 1')
})
em.$on('click', (content) => {
  console.log('click 2', content)
})
em.$emit('click', 'emit')
```

**什么是观察者模式？**

我们假设你正在找一份软件工程师的工作，对“香蕉公司”很感兴趣。所以你联系了他们的 HR，给了他你的联系电话。他保证如果有任何职位空缺都会通知你。这里还有几个候选人也你一样很感兴趣。所以职位空缺大家都会知道，如果你回应了他们的通知，他们就会联系你面试。
所以，以上和“观察者模式”有什么关系呢？这里的“香蕉公司”就是**发布者(Dependency）**，用来维护**观察者(Watcher)**（和你一样的候选人），为某些 event（比如职位空缺）来 **通知（notify)** 观察者。

所以观察者模式没有发布订阅模式下的事件中心，观察者模式的订阅者与发布者之间是存在依赖的。

代码模拟观察者模式

- 观察者(订阅者) -- Watcher
  - update():当事件发生时，具体要做的事情
- 目标(发布者) -- Dep
  - subs 数组:存储所有的观察者
  - addSub():添加观察者
  - notify():当事件发生，调用所有观察者的 update() 方法

```
 // 发布者-目标
class Dep {
  constructor () {
    // 记录所有的订阅者
    this.subs = []
  }
  // 添加订阅者
  addSub (sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }
  // 发布通知
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
// 订阅者-观察者
class Watcher1 {
  update () {
    console.log('Watcher1')
  }
}
class Watcher2 {
  update () {
    console.log('Watcher2')
  }
}

// 测试
let dep = new Dep()
let watcher1 = new Watcher1()
let watcher2 = new Watcher2()
dep.addSub(watcher1)
dep.addSub(watcher2)

dep.notify()
```

**发布订阅和观察者模式之间的区别**

- **观察者模式**是由具体目标调度，比如当事件触发，Dep 就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的。
- **发布/订阅模式**由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在。

![](/framework/sub_pub.png)

## 响应式实现模拟

## 更多参考

- [官方文档 深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
- [剖析 Vue 实现原理 - 如何实现双向绑定 mvvm](https://github.com/DMQ/mvvm)
- [观察者模式 vs 发布-订阅模式](https://juejin.cn/post/6844903513009422343)
- [正则表达式文档](https://tool.oschina.net/uploads/apidocs/jquery/regexp.html)
