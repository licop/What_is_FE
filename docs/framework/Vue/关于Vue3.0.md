# 关于 Vue3.0

## 源码组织方式

为了提高代码的可维护性，Vue3.0 的源码全部采用 `TypeScript` 编写，使用`Monorepo`方式管理项目结构,**使用一个项目管理多个包**，把不同功能的代码放到不同的 packages 中管理，每个功能模块都可以单独测试单独发布。

![](./framework/vue3_package.png)

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

### reactive

- 接受一个参数，判断这参数是否是对象，如果不是，直接返回
- 创建拦截器对象 handler，设置 get/set/deleteProxy
- 返回 Proxy 对象

### reactive vs ref

- ref 可以把基本数据类型数据，转成响应式对象
- ref 返回的对象，重新赋值成对象也是响应式的
- reactive 返回的对象，重新赋值丢失响应式
- reactive 返回的对象不可以解构

```js
// reactive
const product = reactive({
  name: "licop",
  price: 5000,
  count: 3,
});
// ref
const price = ref(5000);
const count = ref(3);
```

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

![](./framework/vue3_package.png)
