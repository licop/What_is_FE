# webpack 实例应用

## 打包 library

webpack 除了可以打包一个业务项目应用程序，还可以打包一些类库`library`。

### 暴露 library

当我们打包`library`时，我们希望使用者有多种方式可以引用它，例如`ES2015 module import`, `Commonjs Module require`, `AMD Module require`, `script标签`等引用方法，，需要在 output 中添加 `library`和`libraryTarget` 属性。

```
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'libary.js',
        library: 'root',
        libraryTarget: 'umd' // this/window/global
    }
```

当`libraryTarget`配置成'umd'时，将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。

[更多关于 libraryTarget 和 library 参考](https://webpack.docschina.org/configuration/output/)

### 将公用库 externals

有时如果执行 `webpack`，你会发现创建了一个体积相当大的文件。如果你查看这个文件，会看到公用库如 `lodash` 也被打包到代码中。在这种场景中，我们更倾向于把 `lodash` 当作 `peerDependency`。也就是说，用户应该已经安装过 `lodash`。这是可以使用`externals`来配置。

具有外部依赖(external dependency)的 bundle 可以在各种模块上下文(module context)中使用，例如 CommonJS, AMD, 全局变量和 ES2015 模块。外部 library 可能是以下任何一种形式：

```
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
```

- **root**：可以通过一个全局变量访问 `library`（例如，通过 script 标签）。
- **commonjs**：可以将 `library` 作为一个 `CommonJS` 模块访问。
- **commonjs2**：和上面的类似，但导出的是 `module.exports.default`。
- **amd**：类似于 `commonjs`，但使用 AMD 模块系统

[更多关于 externals 的参考](https://webpack.docschina.org/configuration/externals/)
[更多关于 library 库打包参考](https://webpack.docschina.org/guides/author-libraries/)

## 打包 Typescript

`TypeScript` 是 `JavaScript` 的超集，为其增加了类型系统，可以编译为普通 `JavaScript` 代码。

使用 `ts-loader` 对 tsx 文件进行打包

```
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
```

[更多 typescript 参考](https://webpack.docschina.org/guides/typescript/)

## 打包 PWA

渐进式网络应用程序(`progressive web application - PWA`)，是一种可以提供类似于 native app(原生应用程序) 体验的 web app(网络应用程序)。PWA 可以用来做很多事。其中最重要的是，在离线(`offline`)时应用程序能够继续运行功能。这是通过使用名为 `Service Workers` 的 web 技术来实现的。

使用 `workbox-webpack-plugin`可以实现 PWA 功能。

```
    // plugins 配置
    new WorkboxPlugin.GenerateSW({
       // 这些选项帮助快速启用 ServiceWorkers
       // 不允许遗留任何“旧的” ServiceWorkers
       clientsClaim: true,
       skipWaiting: true,
     })
```

这是打包会发现生成一个`service-worker.js`文件，接下来我们注册 Service Worker

```
  if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }

```

接下来我们停止 `server` 并刷新页面，我们会发现依然可以访问到页面。

[更多关于 pwa 打包](https://webpack.docschina.org/guides/progressive-web-application/)参考

## 打包单页面应用

当使用`react-router-dom` 的 `BrowserRouter`的路由使用单页面应用时，开发时需要将`devServer`的`historyApiFallback`设置为 `true`，否则将路由将无法跳转，生产环境下需要后端做 `nignx` 配置
