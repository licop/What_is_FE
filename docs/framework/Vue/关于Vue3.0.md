# 关于 Vue3.0

## 源码组织方式

为了提高代码的可维护性，Vue3.0 的源码全部采用 `TypeScript` 编写，使用`Monorepo`方式管理项目结构,**使用一个项目管理多个包**，把不同功能的代码放到不同的 packages 中管理，每个功能模块都可以单独测试单独发布。

![](./framework/vue3_package.png)

## Composition API

## 性能提升

Vue3.0 相比 Vue2.x 在性能上有了较大的提升

### 响应式系统升级

Vue.js 2.x 中响应式系统的核心是 defineProperty，Vue3.0 中使用 Proxy 对象重写了响应式系统

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

## Vite

- Vite 在开发模式下不需要打包可以直接运行
- Vue-cli 开发模式下必须对项目打包才可以运行

- Vite 在生产环境下使用 Rollup 打包，基于 ES Module 的方式打包
- Vue-cli 使用 webpack 打包

快速冷启动、按需编译、模块热更新
