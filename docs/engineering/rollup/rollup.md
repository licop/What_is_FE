# rollup

与功能繁杂大而全的 webpack 相比，rollup 是一个小而美 ESM 的打包器。rollup 并不是为了与 webpack 全面竞争，而是提供一个充分利用 ESM 各项特性的高效打包器。

相比于 webpack 的打包结果有大量的引导代码和模块函数，rollup 的打包结果十分简洁，依然完全可读，同时 rollup 会自动开启 tree shaking 对为引用的部分不会打包，tree shaking 最早也是在 rollup 中提出的。

## 配置

插件是 rollup 唯一的扩展途径

```js
// rollup.config.js文件
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife' // 指定输出格式
  },
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Allow json resolution
    json()
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    // Resolve source maps to the original source
    sourceMaps()
  ]
}

```

## rollup 选用原则

### 优点

- 配置简单，输出结果更加扁平
- 自动使用 tree shaking 移除未引用代码
- 打包结果依然完全可读

### 缺点

- 加载非 ESM 的第三方模块比较复杂
- 模块最终都被打包到一个函数中，无法实现 HMR
- 在浏览器环境中，代码拆分功能依赖 AMD 库

### 选用原则

如果我们在开发一个**应用程序**面临引入大量第三方模块的需求推荐使用 webpack

如果我们正在开发 javascript 的框架或类库推荐使用 rollup，如 react 和 vue 目前都在使用 rollup

## 更多参考

- [rollup.js](https://rollupjs.org/guide/en/)
- [rollup demo](https://github.com/licop/What_is_FE/tree/master/examples/rollup-demo)
