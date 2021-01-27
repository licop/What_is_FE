# Vue 源码解析--数据响应式原理

> 完整 Vue 代码注释解析参考 [Vue 注释解析](https://github.com/licop/vue)

## 响应式处理整体流程

整个响应式处理的过程是比较复杂的，大体上可分为**初始化**和**更新**两个步骤。

**初始化视图**

在 Dom 挂载视图首次渲染之前，实例初始化的时候`initState()`方法将 data 选项中的数据绑定到 vue 实例上，然后通过`Observer`转化成响应式数据。然后执行`vm.$mount()`；新建一个渲染`Watcher`，执行依次执行`updateComponent` --> `_update` --> `__patch__`方法渲染视图；在此过程中访问属性触发属性的`getter`方法，调用`dep.addSub`收集`Watcher`依赖。

**更新视图**

选项 data 中的属性发生变化，触发属性的`setter`方法，发送通知`dep.notify()`，该属性所有依赖`Watcher`实例`update`执行，渲染`watcher`直接执行`queueWatcher`,把当前`watcher`放进一个队列; 调用`nextTick`刷新队列，异步更新视图，然后依次执行`updateComponent` --> `_update` --> `__patch__`,视图**更新**

![](/framework/Vue数据响应式原理.png)

下面我们将根据 Vue 的源码详细的讲解这个过程。

## 响应式处理的入口

下面我们先从`src\core\instance\init.js`开始，`initState(vm)`方法初始化了 `_data`、`_props`、`methods` 等

下面是`initState(vm)`方法的关键代码

```js
// src\core\instance\state.js

// 将选项中的data绑定到vue实例
export function proxy(target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

// 初始化data,把data中的成员注册到vue实例中，并把data对象转换成响应式
if (opts.data) {
  initData(vm);
} else {
  // 如果没有传入data，传入一个空对象变成响应式的
  observe((vm._data = {}), true /* asRootData */);
}

function initData(vm: Component) {
  let data = vm.$options.data;
  // 初始化_data,组件中data是函数，调用函数返回结果
  // 否则直接返回data
  data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== "production" &&
      warn(
        "data functions should return an object:\n" +
          "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
        vm
      );
  }
  // proxy data on instance
  const keys = Object.keys(data);
  const props = vm.$options.props;
  const methods = vm.$options.methods;
  let i = keys.length;
  // 判断data上的成员是否和props和methods重名
  while (i--) {
    const key = keys[i];
    if (process.env.NODE_ENV !== "production") {
      if (methods && hasOwn(methods, key)) {
        warn(
          `Method "${key}" has already been defined as a data property.`,
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          `The data property "${key}" is already declared as a prop. ` +
            `Use prop default value instead.`,
          vm
        );
    } else if (!isReserved(key)) {
      // 把当前的key注册到vue实例当中
      proxy(vm, `_data`, key);
    }
  }
  // observe data
  // 将data变成响应式数据， 响应式处理入口， 第二个参数是否为根数据
  observe(data, true /* asRootData */);
}
```

上面代码中`observe(value, asRootData)`函数，负责为每一个 Object 类型的 value 创建一个 `observer` 实例,我们可以把这里看作响应式的入口。

```js
// src\core\observer\index.js
// 数据响应式入口
export function observe(value: any, asRootData: ?boolean): Observer | void {
  // 如果value不是对象和数组，或者是VNode的实例不需要做响应式处理
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  let ob: Observer | void;
  // 如果 value有__ob__（Observer对象）属性
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    // 创建Observer对象
    ob = new Observer(value);
  }
  // 如果是跟数据
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}
```

## Observer 类

`Observer`对**对象**和**数组**做响应化处理

```js
// src\core\observer\index.js
export class Observer {
  // 观测对象
  value: any;
  // 依赖对象
  dep: Dep;
  // 实例计数器
  vmCount: number; // number of vms that have this object as root $data

  constructor(value: any) {
    this.value = value;
    this.dep = new Dep();
    // 初始化实例的vmCount为0
    this.vmCount = 0;
    // 对defineProperty的封装，将Observer实例挂载到观察对象的__ob__属性
    def(value, "__ob__", this);
    // 数组的响应式处理
    if (Array.isArray(value)) {
      // 判断浏览器是否支持__proto__对象原型
      if (hasProto) {
        // 把数组value的__proto__原型对象指向自定义的数组原型arrayMethods
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      // 为数组中的每个对象创建一个observer实例
      this.observeArray(value);
    } else {
      // 如果是对象，遍历对象中的每一个属性，转换成setter/getter
      this.walk(value);
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk(obj: Object) {
    // 获取观察对象的每一个属性
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      // 遍历每一个属性，设置为响应式数据
      defineReactive(obj, keys[i]);
    }
  }

  /**
   * Observe a list of Array items.
   */
  // 遍历数组 对数组中的成员进行响应式处理
  observeArray(items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
```

`walk(obj)`遍历 obj 的所有属性，为每一个属性调用 `defineReactive()` 方法，设置 `getter/setter`

### defineReactive()

`defineReactive(obj, key, val, customSetter, shallow)` 为一个对象定义一个响应式的属性，每一个属性对应一个 `dep` 对象; 如果该属性的值是对象，继续调用 `observe`; 如果给属性赋新值，继续调用 `observe`; 如果数据更新发送通知。

```js
//  src\core\observer\index.js
export function defineReactive(
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  // 创建依赖对象实例，为当前对象属性创建依赖
  const dep = new Dep();
  // 获取obj属性描述符对象
  const property = Object.getOwnPropertyDescriptor(obj, key);
  // 如果属性不可配置，返回
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  // 提供预定义的存储器函数
  const getter = property && property.get;
  const setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }
  // 判断是否递归观察子对象，并将子对象的属性都转换为getter/setter,返回子观察对象
  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      // 如果预定义的getter存在则value等于getter调用的返回值
      // 否则直接赋予属性值
      const value = getter ? getter.call(obj) : val;

      // 如果存在当前依赖目标，即Watcher对象，则建立依赖
      if (Dep.target) {
        // 为属性依赖收集
        dep.depend();
        // 如果val是对象和数组的话，childOb存在，收集依赖
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            // 为数组的每个元素添加依赖
            dependArray(value);
          }
        }
      }
      // 返回属性值
      return value;
    },
    set: function reactiveSetter(newVal) {
      // 如果预定义的getter存在则value等于getter调用的返回值
      // 否则直接赋予属性值
      const value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      // 如果新值等于旧值或者或者新值和旧值都是NaN则不执行， NaN 不等于 NaN
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      /* eslint-enable no-self-compare */
      // 定义setter
      if (process.env.NODE_ENV !== "production" && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      // 如果有getter 没有setter直接返回
      if (getter && !setter) return;
      // 如果预定义setter存在则调用，否则直接更新值
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      // 如果新值是对象，观察子对象并返回
      childOb = !shallow && observe(newVal);
      // 派发更新（发布更改通知）
      dep.notify();
    },
  });
}
```

### 数组的响应式处理

`Observer` 的构造函数中, 如果观察对象是一个数组，由于 js 语法的限制，我们无法监控到数组属性和数量的变化。我们可以通过改变数组原型对象的方式来修改数组的方法，使得这些方法在调用的时候可以**触发发送通知依赖**。

```js
// 数组的响应式处理
if (Array.isArray(value)) {
  // 判断浏览器是否支持__proto__对象原型
  if (hasProto) {
    // 把数组value的__proto__原型对象指向自定义的数组原型arrayMethods
    protoAugment(value, arrayMethods);
  } else {
    copyAugment(value, arrayMethods, arrayKeys);
  }
  // 为数组中的每个对象创建一个observer实例
  this.observeArray(value);
}
function protoAugment(target, src: Object) {
  /* eslint-disable no-proto */ target.__proto__ = src;
  /* eslint-enable no-proto */
}
/* istanbul ignore next */
function copyAugment(target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    def(target, key, src[key]);
  }
}
```

处理数组修改数据的方法

```js
// 使用数组的原型创建一个新的对象
const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

// 修改数组的方法，使得数组数量的变化可以被监控到
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function(method) {
  // cache original method
  // 保存数组的原方法
  const original = arrayProto[method];
  // def是对defineProperty的包装，重新定义修改数组的方法
  def(arrayMethods, method, function mutator(...args) {
    // 调用数组中原有的方法，返回值
    const result = original.apply(this, args);
    // 获取数组对象的__ob__
    const ob = this.__ob__;
    // 数组中新增的元素
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    // 对插入的新元素，重新遍历数组元素为响应式数据
    if (inserted) ob.observeArray(inserted);
    // notify change
    // 调用了修改数组的方法，调用数组的ob对象发送通知
    ob.dep.notify();
    return result;
  });
});
```

好了，下面来看三个问题：

1. vm.arr[0] = 4 ，给数组元素赋值，视图是否会更新?
2. vm.arr.length = 0 ，修改数组的 length，视图是否会更新？
3. vm.arr.push(4) ，视图是否会更新？

答案：1.**否** 2.**否** 3.**是** 答案出乎意料吗？

原因很简单，Vue 并没有对数组的属性进行监控，只对修改数组的方法进行了处理，所以只有 push 方法触发了视图更新。当我们想更改数组的某个值得时候可以使用 splice 方法传递第三个参数替换，例如`arr.splice(0, 1, 4)`,同样可以使用\$set 方法，内部也是通过 splice 实现的。

## Dep 类

每个属性对应一个 Dep 实例,用来收集`Watcher`依赖

```js
// src\core\observer\dep.js
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor() {
    this.id = uid++;
    this.subs = [];
  }
  // 添加依赖
  addSub(sub: Watcher) {
    this.subs.push(sub);
  }
  // 移除依赖
  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }

  depend() {
    if (Dep.target) {
      // 如果Dep.target存在，则把dep对象添加到watcher的依赖中
      // 同事addDep调用dep.addSub将Wachter实例添加到subs
      Dep.target.addDep(this);
    }
  }
  // 发布通知
  notify() {
    // stabilize the subscriber list first
    // 对数组进行克隆
    const subs = this.subs.slice();
    if (process.env.NODE_ENV !== "production" && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      // 按照watcher的创建顺序排序
      subs.sort((a, b) => a.id - b.id);
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      // 调用每个订阅这的update方法实现更新
      subs[i].update();
    }
  }
}
```

- 在 `defineReactive()` 的 `getter` 中创建 `dep` 对象，并判断 `Dep.target` 是否有值调用 `dep.depend()`
- `dep.depend()` 内部调用 `Dep.target.addDep(this)`，也就是 `watcher` 的 `addDep()` 方法，它内部最
  调用 `dep.addSub(this)`，把 `watcher` 对象，添加到 `dep.subs.push(watcher)` 中，也 就是把订阅者
  添加到 `dep` 的 `subs` 数组中，当数据变化的时候调用 `watcher` 对象的 `update()` 方法
- 什么时候设置的 `Dep.target`? 通过简单的案例调试观察。调用 `mountComponent()` 方法的时候，创建了
  渲染 `watcher` 对象，执行 `watcher` 中的 `get(`) 方法
- `get()` 方法内部调用 `pushTarget(this)`，把当前 `Dep.target = watcher`，同时把当前 `watcher` 入栈，
  因为有父子组件嵌套的时候先把父组件对应的`watcher` 入栈，再去处理子组件的 `watcher`，子组件的处理完毕
  后，再把父组件对应的 `watcher` 出栈，继续操作
- `Dep.target` 用来存放目前正在使用的 `watcher`。全局唯一，并且一次也只能有一个 `watcher` 被使用

## Watcher 类

Watcher 分为三种，Computed Watcher、用户 Watcher (侦听器)、渲染 Watcher。目前我们所用到的都是**渲染 Watcher**。下面介绍\$watch 的时候会介绍这三种 Watcher 的差异。

渲染 Watcher 的创建时机

```js
// /src/core/instance/lifecycle.js
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  ......
  callHook(vm, 'beforeMount')
  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark){}

  // 创建渲染 Watcher，expOrFn 为 updateComponent
  new Watcher(vm, updateComponent, noop, {
    before () {
    if (vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'beforeUpdate')
    } }
  }, true /* isRenderWatcher */)
  hydrating = false

  if (vm.$vnode == null) {
    vm._isMounted = true callHook(vm, 'mounted')
  }
  return vm
}
```

当数据更新的时候，`notify()` 中调用 wacher 的 `update()` 方法

```js
// src\core\observer\watcher.js
update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync) {
    this.run()
  } else {
    // 渲染watcher直接执行queueWatcher
    // 把当前watcher放进一个队列
    queueWatcher(this)
  }
}
```

`queueWatcher`将 wachter 存入队列，如果同一个 watcher 被多次触发，只会被推入到队列中一次。调用`nextTick`在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作, **异步更新视图**。

```js
// src\core\observer\scheduler.js
// wachter存入watcher队列
export function queueWatcher(watcher: Watcher) {
  const id = watcher.id;
  // has为一个对象，用来标记当前watcher是否被处理过
  // 如果同一个 watcher 被多次触发，只会被推入到队列中一次。
  if (has[id] == null) {
    has[id] = true;
    // flushing 为true说明当前queue正在被处理
    // flushing 为false把当前watcher放到queue末尾
    // 这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      //
      let i = queue.length - 1;
      // index正在处理当前队列的第几个元素， i>index说明还没被处理完
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      // 把watcher放在当前队列里
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    // 当前队列是否被执行
    if (!waiting) {
      waiting = true;
      // 开发环境通过配置async 可以直接调用flushSchedulerQueue()，同步更新视图
      if (process.env.NODE_ENV !== "production" && !config.async) {
        // 遍历所有watcher执行run方法
        flushSchedulerQueue();
        return;
      }
      // 在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作, 异步更新视图
      nextTick(flushSchedulerQueue);
    }
  }
}
```

- 渲染 `wacher` 创建的位置 `lifecycle.js` 的 `mountComponent` 函数中
- `Wacher` 的构造函数初始化，处理 `expOrFn` (渲染 `watcher` 和侦听器处理不同)
- 调用 `this.get()` ，它里面调用 `pushTarget()` 然后 `this.getter.call(vm, vm)` (对于渲染 wacher 调用 `updateComponent`)，如果是用户 wacher 会获取属性的值(触发 get 操作) 当数据更新的时候，dep 中调用 `notify()` 方法，`notify()` 中调用 wacher 的 `update()` 方法
- `update()` 中调用 `queueWatcher()`
- `queueWatcher()` 是一个核心方法，去除重复操作，和`nextTick`方法合作将同一个事件调用多个同样 watcher 更新合并，产生有防抖的效果，在消息循环结束之前时候调用 `flushSchedulerQueue()` 刷新队列并执行 watcher
- `flushSchedulerQueue()` 中对 wacher 排序，遍历所有 wacher ，如果有 before，触发生命周期 的钩子函数 `beforeUpdate`，执行 `wacher.run()`，它内部调用 `this.get()`，然后调用 `this.cb()` (渲染 wacher 的 cb 是 noop)
- 整个流程结束

## 关于响应式的实例方法

### `vm.$set`

**功能**

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于 向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')

> 注意:对象不能是 Vue 实例，或者 Vue 实例的根数据对象。

**示例**

```js
// object
vm.$set(obj, "foo", "test");
// 数组
vm.$set(arr, 0, "test");
```

**源码**

```js
export function set(target: Array<any> | Object, key: any, val: any): any {
  // 不能给undefined和原始值增加属性
  if (
    process.env.NODE_ENV !== "production" &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(
      `Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`
    );
  }
  // 判断target是否是数组，key是否是合法的索引
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    // 通过splice对key位置的元素进行替换
    // splice在array.js进行了响应化的处理，可直接触发dep.notify()更新视图
    target.splice(key, 1, val);
    return val;
  }
  // 如果key在对象中已经存在直接赋值
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  // 获取target中的observe对象
  const ob = (target: any).__ob__;
  // 如果target是vue实例或者$data直接返回
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== "production" &&
      warn(
        "Avoid adding reactive properties to a Vue instance or its root $data " +
          "at runtime - declare it upfront in the data option."
      );
    return val;
  }
  // 如果ob对象不存在，target不是响应式对象直接赋值
  if (!ob) {
    target[key] = val;
    return val;
  }
  // 把key设置为响应式属性
  defineReactive(ob.value, key, val);
  // 发送通知
  ob.dep.notify();
  return val;
}
```

> 回顾 `defineReactive` 中的 childOb，给每一个响应式对象设置一个 ob 调用 \$set 的时候，会获取 ob 对象，并通过 `ob.dep.notify()` 发送通知

### `vm.$delete`

**功能**

删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。

> 注意:目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。

**示例**

```js
vm.$delete(vm.obj, "msg");
```

**源码**

```js
// src\core\observer\index.js
export function del(target: Array<any> | Object, key: any) {
  // target不能是undefined和原始值
  if (
    process.env.NODE_ENV !== "production" &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(
      `Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`
    );
  }
  // 判断target是否是数组，key是否是合法的索引
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 删除元素
    // splice在array.js进行了响应化的处理，可直接触发dep.notify()更新视图
    target.splice(key, 1);
    return;
  }
  // 获取target中的observe对象
  const ob = (target: any).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== "production" &&
      warn(
        "Avoid deleting properties on a Vue instance or its root $data " +
          "- just set it to null."
      );
    return;
  }
  // 如果target没有key，直接返回
  if (!hasOwn(target, key)) {
    return;
  }
  // 删除属性
  delete target[key];
  // 如果不是响应式，直接返回
  if (!ob) {
    return;
  }
  // 发送通知
  ob.dep.notify();
}
```

### 异步更新队列-nextTick()

`nextTick()`的功能是将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。

具体用法，当我们更新数据想要立即获取具体 Dom 的值时候，比如当页面元素更新时，我们要获取某个 Dom 的高度或者内容。

```js
const vm = new Vue({
  el: "#app",
  data: {
    msg: "Hello nextTick",
    name: "Vue.js",
    title: "Title",
  },
  mounted() {
    this.msg = "Hello World";
    this.name = "Hello snabbdom";
    this.title = "Vue.js";

    Vue.nextTick(() => {
      console.log(this.$refs.p1.textContent);
    });
  },
});
```

由上边对 Watcher 的介绍可知，Watcher 的`queueWatcher`也是调用`nextTick()`异步更新更新 DOM。为什么 Vue.js 要异步更新视图？

来看一下代码

```js
<template>
  <div>
    <div>{{number}}</div>
    <div @click="handleClick">click</div>
  </div>
</template>
export default {
  data () {
    return {
      number: 0
    };
  },
  methods: {
    handleClick () {
      for(let i = 0; i < 10000; i++) {
        this.number++;
      }
    }
  }
}

```

在点击 click 事件之后，number 会被遍历增加 10000 次。在 Vue.js 响应式系统中，我们知道 Vue.js 会经历“setter->Dep->Watcher->patch->视图”这几个流程。

根据以往的理解，每次 number 被+1 的时候，都会触发 number 的 setter 按照上边的流程最后来修改真实的 DOM,然后 DOM 被更新了 10000 次！看一下官网的描述：**Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要显然。**

所以 Vue 异步更新视图的原因是防止一个事件触发同一个 Watcher 多次更新，使用`queueWatcher`队列和`nextTick()`**批量异步更新 Dom**，起到了防抖的效果。

**源码**

```js
/**
 *  延迟一个任务使其异步执行，在下一个tick时执行，一个立即执行函数，返回一个function
 *  这个函数的作用是在task或者microtask中推入一个timerFunc，在当前调用栈执行完以后以此执行直到执行到timerFunc
 *  目的是延迟到当前调用栈执行完以后执行
 */

import { noop } from "shared/util";
import { handleError } from "./error";
import { isIE, isIOS, isNative } from "./env";

export let isUsingMicroTask = false;
// 存放异步执行的回调
const callbacks = [];
// 一个标记位，如果已经有timerFunc被推送到任务队列中去则不需要重复推送
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// 一个函数指针，指向函数将被推送到任务队列中，等到主线程任务执行完时，任务队列中的timerFunc被调用
let timerFunc;

/**
  一共有Promise、MutationObserver以及setTimeout三种尝试得到timerFunc的方法
  优先使用Promise，在Promise不存在的情况下使用MutationObserver，这两个方法都会在microtask中执行，会比setTimeout更早执行，所以优先使用。
  如果上述两种方法都不支持的环境则会使用setImmediate和setTimeout，setImmediate会比setTimeout更快一点，在task尾部推入这个函数，等待调用执行。
*/
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== "undefined" && isNative(Promise)) {
  const p = Promise.resolve();
  //
  timerFunc = () => {
    p.then(flushCallbacks);
    if (isIOS) setTimeout(noop);
  };
  isUsingMicroTask = true;
} else if (
  !isIE &&
  typeof MutationObserver !== "undefined" &&
  (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  // 把cb加上异常处理存入callbacks数组
  callbacks.push(() => {
    if (cb) {
      try {
        // 调用cb()
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    // 调用异步方法
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

### `vm.$watch` 和三种 watcher

`vm.$watch( expOrFn, callback, [options] )`

**功能**

观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。

**参数**

- **expOrFn**: 要监视的 `$data` 中的属性，可以是表达式或函数
- **callback**: 数据变化后执行的函数
  - 函数: 回调函数
  - 对象: 具有 handler 属性(字符串或者函数)，如果该属性为字符串则 methods 中相应 的定义
- **options**: 可选的选项
  - deep: 布尔类型，深度监听
  - immediate: 布尔类型，是否立即执行一次回调函数

**实例**

```js
const vm = new Vue({
  el: "#app",
  data: {
    a: "1",
    b: "2",
    msg: "Hello Vue",
    user: {
      firstName: "诸葛",
      lastName: "亮",
    },
  },
});
// expOrFn 是表达式
vm.$watch("msg", function(newVal, oldVal) {
  console.log(newVal, oldVal);
});
vm.$watch("user.firstName", function(newVal, oldVal) {
  console.log(newVal);
});
// expOrFn 是函数
vm.$watch(
  function() {
    return this.a + this.b;
  },
  function(newVal, oldVal) {
    console.log(newVal);
  }
);
// deep 是 true，消耗性能
vm.$watch(
  "user",
  function(newVal, oldVal) {
    // 此时的 newVal 是 user 对象
    console.log(newVal === vm.user);
  },
  {
    deep: true,
  }
);
// immediate 是 true
vm.$watch(
  "msg",
  function(newVal, oldVal) {
    console.log(newVal);
  },
  {
    immediate: true,
  }
);
```

**源码**

```js
Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
  ): Function {
    // 获取Vue实例this
    const vm: Component = this
    if (isPlainObject(cb)) {
      // 判断如果 cb 是对象执行 createWatcher
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    // 标记为用户 watcher
    options.user = true
    // 创建用户watcher对象
    const watcher = new Watcher(vm, expOrFn, cb, options)
    // 判断 immediate 如果为 true
    if (options.immediate) {
      // 立即执行一次 cb 回调，并且把当前值传入
      try {
        cb.call(vm, watcher.value)
      } catch (error) {
        handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
      }
    }
    // 返回取消监听的方法
    return function unwatchFn () {
      watcher.teardown()
    }
  }
}

```

**三种 Watcher**

- Watcher 分三种: 计算属性 Watcher(computed)、用户 Watcher (侦听器)、渲染 Watcher
- 创建和执行的顺序都是 计算属性 Watcher(computed)、用户 Watcher (侦听器)、渲染 Watcher
- 计算属性`computed`也是一种 Watcher，不过`lazy`是 true, 没有直接调用 Watcher 的 get 方法更新 Dom。从而实现了计算属性基于它们的**响应式依赖**进行缓存；只在相关响应式依赖发生改变时它们才会重新求值。
- vue 实例的`_watchers`是包含着三种 watcher 的数组，当`user`为 true 是用户 Watcher (侦听器); `lazy`为 true 时是计算属性 Watcher(computed)；一个实例可以有多个计算属性 Watcher(computed)和用户 Watcher (侦听器)，但是只有一个渲染 Watcher

## 更多参考

- [Vue 文档 异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)
- [Vue.js 异步更新及 nextTick](https://juejin.cn/post/6844903666420318216#heading-5)
- [你真的理解\$nextTick 么](https://juejin.cn/post/6844903843197616136)
- [Vue 声明周期和钩子函数](https://ustbhuangyi.github.io/vue-analysis/v2/components/lifecycle.html#beforecreate-created)
