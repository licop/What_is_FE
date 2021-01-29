# Vue 源码解析--Vue 初始化和首次渲染

> 完整 Vue 代码注释解析参考 [Vue 注释解析](https://github.com/licop/vue)

## 准备工作

### Vue 源码的获取

- Fork 一份到自己仓库，克隆到本地，可以自己写注释提交到 github
- 本系列分析的 Vue 版本为 V2.6.12

### Flow

Vue 2.x 使用`Flow`作为 JavaScript 的静态类型检查器，了解更多关于`Flow`的内容参考**语法与 Api 部分**[关于 Flow](http://localhost:8099/syntax&API/Flow/%E5%85%B3%E4%BA%8EFlow.html)

### 打包

Vue 使用的模块打包工具是 `Rollup`,关于`Rollup`的具体使用方法以及和`webpack`对比的优缺点可以参考**前端工程化**部分的[rollup](http://localhost:8099/engineering/rollup/rollup.html)

### 调试设置

**设置 sourcemap**

package.json 文件中的 dev 脚本中添加参数 --sourcemap

```json
  "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
```

`npm run dev` 执行打包，用的是 rollup，-w 参数是监听文件的变化，文件变化自动重新打包, dist 目录生成 vue.js 文件

**调试**

- examples 的示例中引入的 vue.min.js
- 使用`serve`打开 examples 页面我们就可以在开发者工具里调试 Vue 源码了

### Vue 的不同版本

`npm run build` 重新打包所有文件,dist 目录下生成不同构建模式下的版本, 官方文档 - [对不同构建版本的解释](https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A)

| 表头                          | **UMD**            | **CommonJS**          | **ES Module**      |
| ----------------------------- | ------------------ | --------------------- | ------------------ |
| **Full**                      | vue.js             | vue.common.js         | vue.esm.js         |
| **Runtime-only**              | vue.runtime.js     | vue.runtime.common.js | vue.runtime.esm.js |
| **Full (production)**         | vue.min.js         | -                     | -                  |
| **Runtime-only (production)** | vue.runtime.min.js | -                     | -                  |

- **完整版：** 同时包含编译器和运行时版本
- **编译器：** 用来将模板字符串编译成为 JavaScript 渲染函数的代码，体积大、效率低。
- **运行时：** 用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码，体积小、效率高。基本上就是除 去编译器的代码。
- **UMD**: UMD 版本通用的模块版本，支持多种模块方式。 默认文件就是运行时 + 编译器的 UMD 版本
- **CommonJS(cjs)**: CommonJS 版本用来配合老的打包工具比如 Browserify 或 webpack 1。
- **ES Module**: 从 2.6 开始 Vue 会提供两个 ES Modules (ESM) 构建文件，为现代打包工具提供的版本。
  - ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并 将用不到的代码排除出最终的包。
  - ES6 模块与 CommonJS 模块的差异

**Runtime + Compiler vs. Runtime-only**

```js
// Compiler
// 需要编译器，把 template 转换成 render 函数
// const vm = new Vue({
//   el: '#app',
//   template: '<h1>{{ msg }}</h1>',
//   data: {
//   }
// })
// Runtime
// 不需要编译器
const vm = new Vue({
  el: "#app",
  render(h) {
    return h("h1", this.msg);
  },
  data: {
    msg: "Hello Vue",
  },
});
```

推荐使用**运行时**版本，因为运行时版本相比完整版体积要小大约 30%, 基于 Vue-CLI 创建的项目默认使用的是 `vue.runtime.esm.js`
通过查看 webpack 的配置文件

```
vue inspect > output.js
```

> 注意:\*.vue 文件中的模板是在构建时预编译的，单文件组件在运行时和最终打包后的结果不需要编译器，只需要**运行时**版本即可

## 源码目录结构

```
 src
  ├─compiler   编译相关
  ├─core       Vue 核心库
  │   ├── components  内置组件
  │   ├── global-api  Vue静态方法
  │   ├── instance    Vue实例相关
  │   ├── observer    响应式相关
  │   ├── util        通用方法
  │   ├── vdom        虚拟dom相关
  │   ├── config.js   全局配置
  │   └── index.js    入口文件
  ├─platforms  平台相关代码
  ├─server     SSR，服务端渲染
  ├─sfc        .vue 文件编译为 js 对象
  └─shared     公共的代码
```

## 从入口开始

`src/platform` 文件夹下是 Vue 可以构建成不同平台下使用的库，目前有 weex 和 web，还有服务器端渲染的库，`npm run build`把 `src/platforms/web/entry-runtime-with-compiler.js` 构建成 dist/vue.js，如果设置 --sourcemap 会生成 `vue.js.map`, 所以我们解析 Vue 源码的旅程从这里开始。

这个文件是**完整版**Vue 的打包入口，包含编译器

```js
// 完整版入口: 同时包含编译器和运行时的版本。
import Vue from "./runtime/index";

// 保留Vue实例中的公共 $mount 方法, 在文件runtime/index.js中定义
const mount = Vue.prototype.$mount;

// 重写$mount功能，将template编译成render函数
Vue.prototype.$mount = function(
  el?: string | Element,
  // 非ssr情况下为false，ssr时候为true
  hydrating?: boolean
): Component {
  // 获取el Dom对象，如果没有找到对应的element,创建一个空的div
  el = el && query(el);

  /* istanbul ignore if */
  // el 不能是body或者html
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== "production" &&
      warn(
        `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
      );
    return this;
  }

  const options = this.$options;

  // resolve template/el and convert to render function
  // 把template/el转换成render函数
  // 这里可以看出: 如果template和render函数同时存在，先渲染render函数
  // 当render不存在的时候才会编译template
  if (!options.render) {
    let template = options.template;
    // 调用编译器将template转换成render函数
    if (template) {
      ...
    } else if (el) {
      // 如果没有 template，获取el的 outerHTML 作为模板
      template = getOuterHTML(el)
    }
  }
  // 调用mount方法渲染dom
  return mount.call(this, el, hydrating);
};

// 增加compile方法，支持手动把模板变成渲染函数
Vue.compile = compileToFunctions;
```

从以上代码可以看出:

- el 选项 不能是 body 或者 html 标签
- 如果没有 `render`，把 `template` 转换成 `render` 函数; 如果有 `render` 方法，直接调用 `mount` 挂载 DOM
- `Vue.compile`在完整版时可以手动调用将`template`转化成`render`渲染函数
- 如果没有 template，获取 el 的 outerHTML 作为模板

从 `src/platforms/web/entry-runtime-with-compiler.js`可以看到 Vue 从`src/platform/web/runtime/index`引入

```js
// ./runtime/index核心代码
import Vue from "core/index";

// install platform specific utils
// 判断是否是关键属性(表单元素的 input/checked/selected/muted)
// 如果是这些属性，设置el.props属性(属性不设置到标签上)
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
// 注册 transition组件 v-model、v-show指令
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// 安装__patch__方法
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// mount方法
Vue.prototype.$mount = function(
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};
```

`src/platform/web/runtime/index.js` 中引用了 `core/index`,

```js
// core/index核心代码
import Vue from "./instance/index";

// 给Vue增加静态方法
initGlobalAPI(Vue);
```

`src/core/index.js` 中引用了 `./instance/index`

```js
import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";
// 此处不用 class 的原因是因为方便后续给 Vue 实例混入实例成员
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  // 调用 _init() 方法
  this._init(options);
}
// 注册 vm 的 _init() 方法，初始化 vm
initMixin(Vue);
// 注册 vm 的 $data/$props/$set/$delete/$watch
stateMixin(Vue);
// 初始化事件相关方法
// $on/$once/$off/$emit
eventsMixin(Vue);
// 初始化生命周期相关的混入方法
// _update/$forceUpdate/$destroy
lifecycleMixin(Vue);
// 混入 render
// $nextTick/_render
renderMixin(Vue);

export default Vue;
```

由上可知通过文件逐一向上查找，会找到四个导出 Vue 的模块

- src/platforms/web/entry-runtime-with-compiler.js

  - web 平台相关的入口
  - 重写了平台相关的 `$mount()` 方法
  - 注册了 `Vue.compile()` 方法，传递一个 HTML 字符串返回 `render` 函数

- src/platforms/web/runtime/index.js web 平台相关

  - 注册和平台相关的全局指令:`v-model`、`v-show` 注册和平台相关的全局组件: `v-transition`、`v-transition-group`
  - 全局方法
    - `patch`: 把虚拟 DOM 转换成真实 DOM
    - `$mount`: 挂载方法

- src/core/index.js

  - 与平台无关
  - 设置了 Vue 的静态方法，initGlobalAPI(Vue)

- src/core/instance/index.js
  - 与平台无关
  - 定义了构造函数，调用了 `this._init(options)` 方法 给 Vue 中混入了常用的实例成员

## Vue 初始化

### 初始化 Vue 的静态方法

`src/core/global-api/index.js`定义全局 Api 方法

- Vue.use()
- Vue.mixin()
- Vue.extend()
- Vue.directive()
- Vue.component()
- Vue.filter()
- Vue.set()
- Vue.delete()
- Vue.nextTick()

具体使用参考 [全局 API](https://cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80-API)

```js
// src/core/global-api/index.js
export function initGlobalAPI(Vue: GlobalAPI) {
  // config
  const configDef = {};
  configDef.get = () => config;
  if (process.env.NODE_ENV !== "production") {
    configDef.set = () => {
      warn(
        "Do not replace the Vue.config object, set individual fields instead."
      );
    };
  }
  // 初始化 Vue.config 对象
  Object.defineProperty(Vue, "config", configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  // 这些工具方法不视作全局API的一部分，除非你已经意识到某些风险，否则不要去依赖他们
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive,
  };
  // 静态方法 set/delete/nextTick
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  // 让一个对象可响应
  Vue.observable = <T>(obj: T): T => {
    observe(obj);
    return obj;
  };
  // 初始化 Vue.options 对象，并给其扩展
  // components/directives/filters
  Vue.options = Object.create(null);
  ASSET_TYPES.forEach((type) => {
    Vue.options[type + "s"] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  // 设置 keep-alive 组件
  extend(Vue.options.components, builtInComponents);

  // 注册 Vue.use() 用来注册插件
  initUse(Vue);
  // 注册 Vue.mixin() 实现混入
  initMixin(Vue);
  // 注册 Vue.extend() 基于传入的options返回一个组件的构造函数
  initExtend(Vue);
  // 注册 Vue.directive()、 Vue.component()、Vue.filter()
  initAssetRegisters(Vue);
}
```

### 初始化 Vue 的实例成员

`src/core/instance/index.js` 了定义 Vue 的构造函数，`initMixin(Vue)`使 Vue 注册了初始化 `_init()` 方法,用来初始化实例方法和属性，执行挂载 Dom，从此开始**首次渲染视图**

```js
// src/core/instance/init.js
export function initMixin(Vue: Class<Component>) {
  // 给 Vue 实例增加 _init() 方法
  // 合并 options / 初始化操作
  Vue.prototype._init = function(options?: Object) {
    const vm: Component = this;
    // a uid
    vm._uid = uid++;

    let startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production" && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`;
      endTag = `vue-perf-end:${vm._uid}`;
      mark(startTag);
    }

    // a flag to avoid this being observed
    // 如果是 Vue 实例不需要被 observe
    vm._isVue = true;
    // merge options
    // 合并 options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    // vm 的生命周期相关变量初始化
    // $children/$parent/$root/$refs
    initLifecycle(vm);
    // vm 的事件监听初始化, 父组件绑定在当前组件上的事件
    initEvents(vm);
    // vm 的编译render初始化
    // $slots/$scopedSlots/_c/$createElement/$attrs/$listeners
    initRender(vm);
    // beforeCreate 生命钩子的回调
    callHook(vm, "beforeCreate");
    // 把 inject 的成员注入到 vm 上
    initInjections(vm); // resolve injections before data/props
    // 初始化 vm 的 _props/methods/_data/computed/watch
    initState(vm);
    // 初始化 provide
    initProvide(vm); // resolve provide after data/props
    // created 生命钩子的回调
    callHook(vm, "created");

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production" && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(`vue ${vm._name} init`, startTag, endTag);
    }
    // 调用 $mount() 挂载
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
```

## 首次渲染过程

在`_init()`方法执行挂载 Dom 执行，知道执行挂载 Dom 的方法`mountComponent`

- 运行时不带编辑器的版本使用 `temlpate` 发出警告
- 调用`beforeMount`, `beforeUpdate`和`mounted`钩子函数
- 定义`updateComponent`, `vm._render()`为渲染虚拟 dom，`vm._update` 把虚拟 dom 转化为真实 dom 更新到页面上
- 创建`Watcher`实例, 传递`updateComponent`

```js
// src/core/instance/lifecycle.js
export function mountComponent(
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== "production") {
      /* istanbul ignore if */
      // 运行时不带编辑器的版本使用temlpate发出警告
      if (
        (vm.$options.template && vm.$options.template.charAt(0) !== "#") ||
        vm.$options.el ||
        el
      ) {
        warn(
          "You are using the runtime-only build of Vue where the template " +
            "compiler is not available. Either pre-compile the templates into " +
            "render functions, or use the compiler-included build.",
          vm
        );
      } else {
        warn(
          "Failed to mount component: template or render function not defined.",
          vm
        );
      }
    }
  }
  // beforeMount钩子函数
  callHook(vm, "beforeMount");

  let updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== "production" && config.performance && mark) {
    updateComponent = () => {
      const name = vm._name;
      const id = vm._uid;
      const startTag = `vue-perf-start:${id}`;
      const endTag = `vue-perf-end:${id}`;

      mark(startTag);
      const vnode = vm._render();
      mark(endTag);
      measure(`vue ${name} render`, startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(`vue ${name} patch`, startTag, endTag);
    };
  } else {
    // vm._render()为渲染函数，vm._update把虚拟dom转化为真实dom更新到页面上
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  // Watcher用于渲染视图，每个组件对应一个Watcher
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted && !vm._isDestroyed) {
          // beforeUpdate钩子函数
          callHook(vm, "beforeUpdate");
        }
      },
    },
    true /* isRenderWatcher */
  );
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    // mounted钩子函数
    callHook(vm, "mounted");
  }
  return vm;
}
```

找到定义`Watcher`文件

- 每个组件对应一个 `Watcher`, 创建完 `Watcher` 会调用 get 方法
- get 方法中调用`updateComponent`方法
- `vm._update`中调用`vm.__patch__`挂载真实 dom,完成首次渲染

```js
// src/core/observer/watcher.js
get () {
  pushTarget(this)
  let value
  const vm = this.vm
  try {
    // 此处用于渲染视图，调用updateComponent方法
    value = this.getter.call(vm, vm)
  } catch (e) {
    if (this.user) {
      handleError(e, vm, `getter for watcher "${this.expression}"`)
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value)
    }
    popTarget()
    this.cleanupDeps()
  }
  return value
}
```

**Vue 初始化与首次渲染**逻辑图
![](/framework/Vue初始化与首次渲染.png)
