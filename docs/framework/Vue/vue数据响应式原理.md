# vue 数据响应式原理

## 什么是数据响应式

Vue.js 一个核心思想是**数据驱动**。所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。

为实现数据驱动，需要将数据变成**响应式**的，数据模型仅仅是普通的 javascript 对象，而当我们修改数据时，视图会进行更新，避免 DOM 操作，提高开发效率。

与 React 的**单项数据流不同**，Vue 实现了**双向绑定**即数据改变，视图改变；视图改变，数据也随之改变。可以使用 `v-modal` 在表单元素上创建双向数据绑定。

## 响应式核心原理

根据官方文档[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)的解释，在 Vue2.x 中，当你把一个普通的 JavaScript 对象传入 Vue 实例作为 `data` 选项，Vue 将遍历此对象所有的 property，并使用 `Object.defineProperty` 把这些 property 全部转为 `getter/setter`。

代码模拟

```js
// 模拟 Vue 中的 data 选项
let data = {
  msg: "hello",
  count: 10,
};

// 模拟 Vue 的实例
let vm = {};

proxyData(data);

function proxyData(data) {
  // 遍历 data 对象的所有属性
  Object.keys(data).forEach((key) => {
    // 数据劫持：当访问或者设置 vm 中的成员的时候，做一些干预操作
    // 把 data 中的属性，转换成 vm 的 setter/setter
    Object.defineProperty(vm, key, {
      // 可枚举（可遍历）
      enumerable: true,
      // 可配置（可以使用 delete 删除，可以通过 defineProperty 重新定义）
      configurable: true,
      // 当获取值的时候执行
      get() {
        console.log("get: ", key, data[key]);
        return data[key];
      },
      // 当设置值的时候执行
      set(newValue) {
        console.log("set: ", key, newValue);
        if (newValue === data[key]) {
          return;
        }
        data[key] = newValue;
        // 数据更改，更新 DOM 的值
        document.querySelector("#app").textContent = data[key];
      },
    });
  });
}

// 测试
vm.msg = "Hello World";
vm.count = "9";
console.log(vm.msg); // 'Hello World'
console.log(data.msg); // 'Hello World'
```

在 vue3.0 中则使用`proxy`代替`Object.defineProperty`进行数据劫持，直接监听对象，而非属性，所以不用遍历对象。`proxy`是 ES 6 中新增的特性，性能由浏览器优化，所以比`Object.defineProperty`更快一点。更多关于`proxy`的介绍参考[Proxy](https://what-is-fe.licop.cn/syntax&API/ES%E8%AF%AD%E6%B3%95/ECMAScript%202015%20%E8%AF%AD%E6%B3%95.html#proxy)

代码模拟

```js
// 模拟 Vue 中的 data 选项
let data = {
  msg: "hello",
  count: 0,
};

// 模拟 Vue 实例
let vm = new Proxy(data, {
  // 执行代理行为的函数
  // 当访问 vm 的成员会执行
  get(target, key) {
    console.log("get, key: ", key, target[key]);
    return target[key];
  },
  // 当设置 vm 的成员会执行
  set(target, key, newValue) {
    console.log("set, key: ", key, newValue);
    if (target[key] === newValue) {
      return;
    }
    target[key] = newValue;
    document.querySelector("#app").textContent = target[key];
  },
});

// 测试
vm.msg = "Hello World";
console.log(vm.msg);
```

## 发布订阅模式和观察者模式

**什么是发布订阅模式？**

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"(publish)一个信号，其他任务可以向信号中心"订阅"(subscribe)这个信号，从而知道什么时候自己可以开始执行。这就叫做 **"发布/订阅模式"(publish-subscribe pattern)**

vue 中的兄弟组件通信过程就是发布订阅模式, B 组件向消息中心**订阅**了`add-todo`信号，并注册了执行函数`this.addTodo`,然后在 A 组件中**发布**`add-todo`信号，并传递了参数，B 组件通过事件中心`eventHub`接收到信号，然后开始执行`this.addTodo`接受 A 组件传递过来的参数，完成组件件的通信。

```js
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

```js
// 事件触发器
class EventEmitter {
  constructor() {
    // { eventType: [ handler1, handler2 ] }
    this.subs = Object.create(null);
  }
  // 注册事件
  $on(eventTpye, handler) {
    this.subs[eventTpye] = this.subs[eventTpye] || [];
    this.subs[eventTpye].push(handler);
  }
  // 触发事件
  $emit() {
    // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出
    let eventTpye = [].shift.call(arguments);
    if (this.subs[eventTpye]) {
      this.subs[eventTpye].forEach((handler) => {
        handler.apply(this, arguments);
      });
    }
  }
}

const em = new EventEmitter();

em.$on("click", () => {
  console.log("click 1");
});
em.$on("click", (content) => {
  console.log("click 2", content);
});
em.$emit("click", "emit");
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

```js
// 发布者-目标
class Dep {
  constructor() {
    // 记录所有的订阅者
    this.subs = [];
  }
  // 添加订阅者
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  // 发布通知
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
// 订阅者-观察者
class Watcher1 {
  update() {
    console.log("Watcher1");
  }
}
class Watcher2 {
  update() {
    console.log("Watcher2");
  }
}

// 测试
let dep = new Dep();
let watcher1 = new Watcher1();
let watcher2 = new Watcher2();
dep.addSub(watcher1);
dep.addSub(watcher2);

dep.notify();
```

**发布订阅和观察者模式之间的区别**

- **观察者模式**是由具体目标调度，比如当事件触发，Dep 就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的。
- **发布/订阅模式**由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在。

![](/framework/sub_pub.png)

## 响应式实现模拟

### 功能需求

下面来模拟 Vue 响应式,实现一个 小型的 Vue 来模拟下面的功能：

- Vue 支持`el`，`data`，`methods`选项
- `data`数据变成响应式, 改变数据，视图也随之改变
- 模板编译**插值表达式**
- 实现`v-text`,`v-modal`,`v-on`和`v-html`指令
- `v-modal`实现双向绑定语法糖，改变视图，数据也会随之改变
- `methods`中的方法绑定`this`指向 Vue 实例

```html
<div id="app">
  <h1>插值表达式</h1>
  <h3>{{ msg }}</h3>
  <h3>{{ count }}</h3>
  <h1>v-text</h1>
  <div v-text="msg"></div>
  <h1>v-model</h1>
  <input type="text" v-model="msg" />
  <input type="text" v-model="count" />
  <p v-html="html"></p>
  <button v-on:click="changeColor()">点击改变color</button>
  <button v-on:click="print(count, 10, 'licop')">点击打印count</button>
</div>
<script>
  let vm = new Vue({
    el: "#app",
    data: {
      msg: "Hello Vue",
      count: 20,
      person: {
        name: "licop",
      },
      html: '<span style="color: red">red</span>',
      items: ["a", "b", "c"],
    },
    methods: {
      print(count, num, str) {
        console.log(count, num, str);
        console.log(this.msg);
      },
      changeColor: function() {
        this.html = '<span style="color: blue">blue</span>';
      },
    },
  });

  // vm.msg = {
  //   test: 'try'
  // }
</script>
```

### 整体结构

Vue 响应式是通过**数据拦截**和**观察者模式**实现的，外加**编译模板**功能，综合上边对响应式核心原理和观察者模式的介绍，所以实现一个简易的 Vue 需要 5 个模块

- **Vue**: 把 data 中的成员注入到 Vue 实例，并且把 data 中的成员转成 getter/setter,调用`Observer`和`Compiler`
- **Observer**: 能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知 Dep
- **Compiler**: 解析每个元素中的指令/插值表达式，并替换成相应的数据
- **Dep**: 添加观察者(watcher)，当数据变化通知所有观察者
- **Watcher**: 数据变化更新视图

**整体结构**
![](/framework/Vue响应式.png)

下面分别介绍每个模块：

### Vue

`new Vue()`初始化`Vue`实例，代码入口

**功能**

- 负责接收初始化的参数(选项)
- 负责把 `data` 中的属性注入到 Vue 实例，转换成 getter/setter
- 负责把 `methods`里方法的 this 绑定到 Vue 实例
- 负责调用 `observer` 监听 data 中所有属性的变化
- 负责调用 `compiler` 解析指令/插值表达式

**代码**

```js
class Vue {
  constructor(options) {
    // 通过属性保存选项中的数据
    this.$options = options || {};
    this.$data = options.data || {};
    this.$methods = options.methods || {};
    this.$el =
      typeof options.el === "string"
        ? document.querySelector(options.el)
        : options.el;

    // 把data中的成员转换成getter和setter，注入到vue实例中
    this._proxyData(this.$data);
    // 将methods里的方法this绑定到Vue实例，使其能够获取Vue的属性和方法
    this._bindMethods(options.methods);
    // 调用observer对象，使用getter和setter监听数据读取和变更
    new Observer(this.$data);
    // 调用compiler对象，解析指令和插值表达式
    new Compiler(this);
  }

  _proxyData(data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) {
            return;
          }
          data[key] = newValue;
        },
      });
    });
  }

  _bindMethods(methods) {
    Object.keys(methods).forEach((key) => {
      this.$methods[key] = methods[key].bind(this);
    });
  }
}
```

### Observer

`Observer`类负责**数据劫持**

**功能**

- 负责把 data 选项中的属性转换成**响应式**数据
- data 中的某个属性也是对象，利用递归把该属性转换成**响应式**数据
- 如果给属性赋值为新对象，把新对象的成员设置为 `getter/setter`转换成**响应式**数据
- `setter`方法监听属性访问，调用`dep.addSub()`给 `Dep` 实例添加 `Watcher` 依赖
- `getter`方法监听属性变更，调用 `dep.notify()`给`Dep` 实例发送通知

`new Vue`初始化的时候完成`data`里属性转换成**响应式**数据，所以后期想给实例添加属性，或者使用`methods`方法给`data`里的对象属性添加新的属性则不会变成响应式的。如果想把属性变成响应式参考[文档](https://cn.vuejs.org/v2/guide/reactivity.html)

当需要在对象上添加新属性时，你应该:

- 使用 `Vue.set(obj, 'newProp', 123)`, 或者
- 以新对象替换老对象。例如，利用**对象展开运算符** (opens new window)我们可以这样写：

```js
state.obj = { ...state.obj, newProp: 123 };
```

如果给属性重新赋值成一个对象则会变成**响应式**的，因为属性在`data`定义过，当重新赋值的时候会触发`setter`方法，然后遍历对象的属性变成**响应式**的。

**代码**

```js
class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data) {
    // 判断data是否是对象
    if (!data || typeof data !== "object") {
      return;
    }
    // 遍历data对象所有属性
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(obj, key, val) {
    let that = this;
    // dep负责收集依赖，并发送通知
    let dep = new Dep();
    // 如果val是对象，把val内部的属性转化为响应式数据
    this.walk(val);

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      // 如果返回obj[key]会造成死递归，因为每次访问obj[key]都会调用get方法，造成堆栈溢出
      get() {
        // 收集依赖，Dep.target为Watcher实例
        Dep.target && dep.addSub(Dep.target);
        return val;
      },
      set(newValue) {
        if (newValue === val) {
          return;
        }
        val = newValue;
        // 如果属性被赋予新的值是对象，newValue内部属性转化为响应式
        that.walk(newValue);
        // 向Watcher实例发送通知，更新update()
        dep.notify();
      },
    });
  }
}
```

### Compiler

- 负责编译模板，解析指令/插值表达式
- 负责页面的首次渲染
- 在数据变化，视图需要改变的地方，添加 `Wathcher` 实例，当数据变化后执行回调函数，重新渲染视图

```js
class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  }
  // 编译模板，处理本文节点和元素节点
  compile(el) {
    let childNodes = el.childNodes;
    // 伪数组变成数组
    Array.from(childNodes).forEach((node) => {
      if (this.isTextNode(node)) {
        this.compileText(node);
      } else if (this.isElementNode(node)) {
        this.compileElement(node);
      }
      // 判断node是否有子节点，如果有递归调用compiler
      if (node.childNodes && node.childNodes.length !== 0) {
        this.compile(node);
      }
    });
  }
  // 编译元素节点，处理指令
  compileElement(node) {
    // 遍历所有的属性节点，判断是否是指令
    Array.from(node.attributes).forEach((attr) => {
      // 判断是否是指令
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2);
        let key = attr.value;
        this.update(node, key, attrName);
      }
    });
  }

  update(node, key, attrName) {
    let updateFn = this[attrName.split(":")[0] + "Updater"];
    updateFn && updateFn(node, key, attrName);
  }

  // 处理v-text指令
  textUpdater = (node, key) => {
    node.textContent = this.vm[key];
    new Watcher(this.vm, key, () => {
      node.textContent = this.vm[key];
    });
  };

  // 处理v-model指令
  modelUpdater = (node, key) => {
    node.value = this.vm[key];
    new Watcher(this.vm, key, () => {
      node.value = this.vm[key];
    });

    // 双向绑定, 语法糖
    node.addEventListener("input", () => {
      this.vm[key] = node.value;
    });
  };

  // 处理v-html指令
  htmlUpdater = (node, key) => {
    node.innerHTML = this.vm[key];

    new Watcher(this.vm, key, () => {
      node.innerHTML = this.vm[key];
    });
  };

  // 处理v-on指令
  onUpdater = (node, key, attrName) => {
    const event = attrName.split(":")[1];
    // 匹配函数名和参数
    const reg = /(.+?)\((.+?|\s?)\)/;
    if (reg.test(key)) {
      let fnKey = RegExp.$1.trim();
      let args = RegExp.$2.trim();
      if (args) {
        args = args.split(",").map((arg) => {
          let _arg = arg.replace(/\s+/, "");
          // todo 这里只实现了参数是数字，字符串和data里属性的情形
          if (_arg.startsWith('"') || _arg.startsWith("'")) {
            return _arg.slice(1, _arg.length - 1);
          } else if (Number(_arg)) {
            return Number(_arg);
          }
          return this.vm.$data[_arg];
        });
      } else {
        args = [];
      }
      node.addEventListener(event, () => {
        this.vm.$methods && this.vm.$methods[fnKey](...args);
      });
    }
  };

  // 编译文本节点，处理插值表达式 {{ msg }}
  compileText(node) {
    let reg = /\{\{(.+?)\}\}/;
    let value = node.textContent;
    if (reg.test(value)) {
      // 将花括号里的值提取出来,正则表达式里使用小括号包裹
      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg, this.vm[key]);

      // 创建watcher对象，当数据改变更新视图
      new Watcher(this.vm, key, (newValue) => {
        console.log(key, newValue);
        node.textContent = newValue;
      });
    }
  }
  // 判断元素属性是否是执行
  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
  // 判断节点是否是本文节点
  isTextNode(node) {
    return node.nodeType === 3;
  }
  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}
```

### Dep

**功能**

- 每个属性对应一个 Dep 实例
- `addSub()`负责收集依赖
- `notify()`想依赖发起通知，调用依赖中的`update()`方法

**代码**

```js
class Dep {
  constructor() {
    // 存储所有的观察者
    this.subs = [];
  }
  // 添加观察者
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  // 发送通知
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
```

### Watcher

**功能**

- 页面中所有依赖数据的地方都需要创建一个 `Watcher`实例
- `Watcher`自身实例化的时候往 dep 对象中添加自己
- 当数据变化触发依赖， `dep`通知所有的 `Watcher` 实例更新视图
- `Watcher`必须拥有一个`update`方法，当值发生变化的时候触发回调函数

```js
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    // data中的属性名称
    this.key = key;
    // 回调函数负责更新视图
    this.cb = cb;

    // 把watcher对象记录到Dep类的静态属性target中 ?为何添加到Dep中，添加到Watcher也可工作
    Dep.target = this;
    // 触发get方法，在get方法中调用addSub
    this.oldValue = vm[key];

    Dep.target = null;
  }

  // 当数据发生变化的时候更新视图
  update() {
    let newValue = this.vm[this.key];
    if (this.oldValue === newValue) {
      return;
    }
    // 更新视图
    this.cb(newValue);
  }
}
```

[完整代码参考](https://github.com/licop/vue-reactivity)

## 更多参考

- [官方文档 深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
- [剖析 Vue 实现原理 - 如何实现双向绑定 mvvm](https://github.com/DMQ/mvvm)
- [观察者模式 vs 发布-订阅模式](https://juejin.cn/post/6844903513009422343)
- [正则表达式文档](https://tool.oschina.net/uploads/apidocs/jquery/regexp.html)
