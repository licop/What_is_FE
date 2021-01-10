# rollup

与功能繁杂大而全的 webpack 相比，rollup 是一个小而美 ESM 的打包器。rollup 并不是为了与 webpack 全面竞争，而是提供一个充分利用 ESM 各项特性的高效打包器。

相比于 webpack 的打包结果有大量的引导代码和模块函数，rollup 的打包结果十分简洁，同时 rollup 会自动开启 tree shaking 对为引用的部分不会打包，tree shaking 最早也是在 rollup 中提出的。

## 配置

插件是 rollup 唯一的扩展途径

```
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
