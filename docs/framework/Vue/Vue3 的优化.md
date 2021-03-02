# Vue3 的优化

## 源码组织方式

为了提高代码的可维护性，Vue3.0 的源码全部采用 `TypeScript` 编写，使用`Monorepo`方式管理项目结构,**使用一个项目管理多个包**，把不同功能的代码放到不同的 packages 中管理，每个功能模块都可以单独测试单独发布。

![](/framework/vue3_package.png)

## Composition API

## 性能提升

Vue3.0 相比 Vue2.x 在性能上有了较大的提升

### 响应式系统升级

Vue.js 2.x 中响应式系统的核心是 defineProperty，Vue3.0 中使用 Proxy 对象重写了响应式系统

- 多层属性嵌套，在访问属性过程中处理下一级属性
- 可以监听动态新增属性
- 可以监听删除属性
- 可以监听数组索引和 length 属性

### 编译优化

- Vue.js 2.x 中通过标记**静态根节点**，优化 diff 的过程
- Vue.js 3.0 中标记和提升所有的**静态节点**，diff 的时候只需要对比动态节点内容，提升 diff 性能
  - Fragments(升级 vetur 插件)
  - 静态提升
  - Patch flag 标记动态节点可能变化的地方
  - 缓存事件处理函数

### 优化打包编译

- Vue.js 3.0 中移除了一些不常用的 Api，例如`inline-template`, `filter`
- 更好的 Tree-shaking，Tree-shaking 依赖 ESModule，Vue3.0 的一些 api 支持 Tree-shaking，如果没有使用不会打包

## 响应系统原理

从 Vue 3 开始，响应性现在可以在独立的包中使用，我们可以从 vue 中获取`reactive`、`ref`、`toRefs`等方法，来使数据变成响应式

### reactive

要为 JavaScript 对象创建响应式状态，可以使用 `reactive` 方法：

```js
import { reactive } from "vue";

// 响应式状态
const state = reactive({
  count: 0,
});
```

`reactive` 相当于 Vue 2.x 中的 `Vue.observable()` API。该 API 返回一个响应式的对象状态。该响应式转换是“深度转换”——它会影响嵌套对象传递的所有 property。

这就是 Vue 响应性系统的本质。当从组件中的 data() 返回一个对象时，它在内部交由 `reactive()` 使其成为响应式对象

### ref

当我们想把一个独立的原始值(例如，一个字符串)变成响应式时，可以使用 `ref()` 方法

`ref` 会返回一个可变的响应式对象，该对象作为它的内部值——一个响应式的引用，这就是名称的来源。此对象只包含一个名为 value 的 property ：

```js
import { ref } from "vue";

const count = ref(0);
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```

当 `ref` 作为渲染上下文 (从 `setup()` 中返回的对象) 上的 property 返回并可以在模板中被访问时，它将自动展开为内部值。不需要在模板中追加 `.value`：

```vue
<template>
  <div>
    <span>{{ count }}</span>
    <button @click="count++">Increment count</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
```

### toRefs

当我们想使用大型响应式对象的一些 property 时，可能很想使用 ES6 解构来获取我们想要的 property：

```js
import { reactive } from "vue";

const book = reactive({
  author: "Vue Team",
  year: "2020",
  title: "Vue 3 Guide",
  description: "You are reading this book right now ;)",
  price: "free",
});

let { author, title } = book;
```

遗憾的是，使用解构的两个 property 的响应性都会丢失。对于这种情况，我们可以使用`toRefs`将我们的响应式对象转换为一组 ref。这些 ref 将保留与源对象的响应式关联：

```js
import { reactive, toRefs } from "vue";

const book = reactive({
  author: "Vue Team",
  year: "2020",
  title: "Vue 3 Guide",
  description: "You are reading this book right now ;)",
  price: "free",
});

let { author, title } = toRefs(book);

title.value = "Vue 3 Detailed Guide"; // 我们需要使用 .value 作为标题，现在是 ref
console.log(book.title); // 'Vue 3 Detailed Guide'
```

### reactive vs ref

**ref**

- ref 可以把基本数据类型数据，转成响应式对象
- ref 返回的对象，重新赋值成对象也是响应式的

**reactive**

- reactive 判断这参数是否是对象，如果不是，直接返回
- reactive 重新赋值丢失响应式
- reactive 返回的对象不可以解构

```js
// 如果数据较多使用reactive，如果数据较少的话使用ref会更简洁一些
// reactive
const product = reactive({
  name: "licop",
  price: 5000,
  count: 3,
});
// ref
const count = ref(3);
```

### 响应式实现原理

Vue3.0 响应式原理步骤如下：

1. 使用 Proxy 允许我们拦截对象, 检测某个值发生变化
2. **跟踪更改它的函数**：我们在 Proxy 中的 getter 中执行此操作，称为 `effect`
3. **触发函数以便它可以更新最终值**：我们在 Proxy 中的 setter 中进行该操作，名为 `trigger`

下面实现一个简易的 Vue3.0 响应系统：

#### relative

- 接受一个参数，判断这参数是否是对象，如果不是，直接返回
- 创建拦截器对象 handler，设置 get/set/deleteProxy
- get 方法中收集属性的依赖，set/deleteProxy 中触发更新
- 返回 Proxy 对象

```js
// reactive 方法
export function reactive(target) {
  if (!isObject(target)) return target;

  const handler = {
    get(target, key, receiver) {
      // 收集依赖
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      return convert(result);
    },
    set(target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver);
      let result = true;
      if (oldValue !== value) {
        result = Reflect.set(target, key, value, receiver);
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const hasKey = hasOwn(target, key);
      const result = Reflect.deleteProperty(target, key);
      if (hasKey && result) {
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
  };

  return new Proxy(target, handler);
}
```

vue3.0 中使用 `Reflect` 统一 API。 Proxy 中的 receiver 是 Proxy 或者继承 Proxy 的对象； `Reflect` 添加 receiver 参数， 如果 target 对象中设置了 getter, getter 中的 this 指向 receiver

#### effect

`effect`方法中从传入一个 callback 函数作为参数，当 callback 调用时监听函数内属性调用的 getter 方法收集依赖

在依赖收集的过程中，会创建三个集合分别是`targetMap`，`depsMap`和`dep`; `targetMap`用来记录目标对象和和 `depsMap` 的映射，使用弱引用，当目标失去引用可以销毁; `depsMap` 记录目标对象的属性名称和 `dep` 的映射;dep 是一个 `set` 集合，记录该属性的多个 effect

![](/framework/vue3.0_dep.png)

```js
let activeEffect = null;
export function effect(callback) {
  activeEffect = callback;
  callback(); // 访问响应式对象属性，收集依赖
  activeEffect = null;
}

let targetMap = new WeakMap();

// 用于收集依赖
export function track(target, key) {
  if (!activeEffect) return;
  // targetMap用来记录目标对象和depsMap，使用弱引用，当目标失去引用可以销毁
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  // depsMap记录目标对象的属性名称和dep
  // dep是一个set集合，记录该属性的多个effect
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(activeEffect);
}
```

#### trigger

当属性改变时，触发`trigger`方法，遍历属性的依赖然后执行

```js
// 触发更新
export function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}
```

完整 Vue3.0 响应式代码，并实现`ref()`, `toRefs()`和`computed()`方法

```js
const isObject = (val) => val !== null && typeof val === "object";
const convert = (target) => (isObject(target) ? reactive(target) : target);
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (target, key) => hasOwnProperty.call(target, key);

// reactive 方法
export function reactive(target) {
  if (!isObject(target)) return target;

  const handler = {
    get(target, key, receiver) {
      // 收集依赖
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      return convert(result);
    },
    set(target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver);
      let result = true;
      if (oldValue !== value) {
        result = Reflect.set(target, key, value, receiver);
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const hasKey = hasOwn(target, key);
      const result = Reflect.deleteProperty(target, key);
      if (hasKey && result) {
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
  };
  return new Proxy(target, handler);
}

let activeEffect = null;
export function effect(callback) {
  activeEffect = callback;
  callback(); // 访问响应式对象属性，收集依赖
  activeEffect = null;
}

let targetMap = new WeakMap();

// 用于收集依赖
export function track(target, key) {
  if (!activeEffect) return;
  // targetMap用来记录目标对象和depsMap，使用弱引用，当目标失去引用可以销毁
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  // depsMap记录目标对象的属性名称和dep
  // dep是一个set集合，记录该属性的多个effect
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(activeEffect);
}

// 触发更新
export function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}

// ref 方法
export function ref(raw) {
  // 判断raw是否是ref创建的对象，如果是的话直接返回
  if (isObject(raw) && raw.__v_isRef) return;
  let value = convert(raw);
  const r = {
    __v_isRef: true,
    get value() {
      track(r, "value");
      return value;
    },
    set value(newValue) {
      if (newValue !== value) {
        raw = newValue;
        value = convert(raw);
        trigger(r, "value");
      }
    },
  };
  return r;
}
// toRefs把proxy的所有属性都转化为一个响应式对象，使得解构的数据依然是响应式的
export function toRefs(proxy) {
  const ret = proxy instanceof Array ? new Array(proxy.length) : {};

  for (const key in proxy) {
    ret[key] = toProxyRef(proxy, key);
  }

  return ret;
}

function toProxyRef(proxy, key) {
  const r = {
    __v_isRef: true,
    get value() {
      return proxy[key];
    },
    set value(newValue) {
      proxy[key] = newValue;
    },
  };

  return r;
}

// 计算属性
export function computed(getter) {
  const result = ref();

  effect(() => (result.value = getter()));

  return result;
}
```

更多关于 Vue3.0 响应式参考 [Vue 3.0 中文文档 响应性](https://vue3js.cn/docs/zh/guide/reactivity.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%93%8D%E5%BA%94%E6%80%A7)

## Vite

Vite 是一个面向现代浏览器的一个更轻、更快的 web 应用开发工具，它基于 ECMAScript 标准原生模块系统(ES Modules)实现，可以解决 webpack-dev-server 启动应用时间过长和 webpack hmr 热更新反应速度慢的问题,可以提升开发者在开发过程中的体验

- Vite 在开发模式下不需要打包可以直接运行
- Vue-cli 开发模式下必须对项目打包才可以运行

- Vite 在生产环境下使用 Rollup 打包，基于 ES Module 的方式打包
- Vue-cli 使用 webpack 打包

- Vite HMR 立即编译当前所修改的文件
- Webpack HMR 会自动以这个文件为入口重现 build 一次，所有的涉及到的依赖也会被加载一遍

快速冷启动、按需编译、模块热更新、开箱即用

### 核心功能

- 静态 web 服务器
- 编译单文件组件
  - 拦截浏览器不识别的模块，并处理
- 通过 websocket 实现 HMR

### 打包 or 不打包

使用 webpack 打包的原因:

1. 浏览器环境并不支持模块化
2. 零散的模块化会产生大量的 http 请求

随着现代浏览器对 ES 标准支持的逐渐完善，第一个问题已经慢慢不存在了，现在绝大多数浏览器都是支持 ES Module 特性的，第二个问题 http2 可以通过**多路复用**帮我们解决
