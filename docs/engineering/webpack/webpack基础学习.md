# webpack 基础学习

## 什么是 webpack

**核心定义:** webpack 是一个静态模块打包工具(module bundler),可以解决前端整体的模块化，并不单指 JavaScript 模块化。

**模块 module:** 在模块化编程中，开发者将程序分解为功能离散的 chunk，并称之*模块*。

### webpack 天生支持的模块

- ES Module import 语句
- commonJS `require()` 语句
- AMD `define`和`require` 语句
- 样式代码 stylesheet url(）
- HTML <img src=''> 文件中的图片链接
- WebAssembly 模块

### 通过 _loader_ 支持的模块

- CoffeeScript
- TypeScript
- ESNext (Babel)
- Sass
- Less
- Stylus
- Elm

> 当使用 webpack 打包 ES6 模块时，webpack 可以识别`import`和`export`语法，但是注意，如果使用其他的 ES6+ 特性，仍然需要引入 babel。

**核心工作原理**

在我们的项目中会散落着各种各样的代码和资源文件，webpack 会根据配置找到文件作为打包入口，一般情况下都会是一个 javascript 文件，然后会找到代码中 import 和 require 之类的语句，解析推断出文件所依赖的资源模块，然后解析每个资源模块对应的依赖，最后形成整个项目所有用到文件之间的依赖树，webpack 会递归这个依赖树，然后找到每个节点所对应的资源文件，根据配置文件中的 rules 属性找到模块所对应的加载器，交给对应的加载器加载这个模块，最后会把加载到的结果放到 bundle.js 中，完成这个**打包**过程

![](/engineering/webpack_bundle.png)

## webpack 安装

- npm install webpack webpack-cli -g

## webpack 配置

### mode

- 提供 `mode` 配置选项，告知 webpack 使用相应模式的内置优化。

string = 'production': 'none' | 'development' | 'production'

- 使用`production`会对代码进行压缩，使用`development`不会

### loader

`loader`是 webpack 的核心特性,`loader`负责资源文件从输入到输出的转换, 对于同一资源可以依次使用多个 `loader`。借助于 `loader` 就可以加载任何类型的资源 `webpack` 不能识别非 js 格式文件， 只能使用 `loader` 用于对模块的源代码进行转换。webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 `loader`。

webpack 支持使用 `loader` 对文件进行预处理。你可以构建包括 JavaScript 在内的任何静态资源。并且可以使用 Node.js 轻松编写自己的 `loader`。

如果一个静态文件不是 js 格式，则需要判断文件的结尾后缀，使用对应的文件格式的`loader`

**常用配置方式**： `module.rules` 允许你在 webpack 配置中指定多个 loader。

#### 打包图片

```js
module: {
  rules: [
    {
      test: /\.(jpe?g|png|gif)$/i,
      use: {
        loader: "url-loader", // 'file-loader'
        options: {
          // 占位符
          name: "image/[contenthash].[ext]",
          limit: 10240,
        },
      },
    },
  ];
}
```

> `url-loader` 与 `file-loader` 类似, 用于打包文件，不过`url-loader`会将文件小于`limit`的值的的图片打包成 base64 格式的文件

### 打包样式文件

- **style-loader 作用:** 把 CSS 插入到 DOM 中。
- **css-loader 作用** 对 `@import` 和 `url()` 进行处理，就像 js 解析 `import/require()` 一样， 把多个 css 文件合并成一个
- **sass-loader 作用** 把 sass 文件翻译成 css
- **postcss-loader** 用来自动添加 css 浏览器商家前缀，可在`post.config.js`中进行配置

```js
module: {
  rules: [
    {
      test: /\.scss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            // 处理scss文件里引入其他scss文件，引入的scss文件也要走两个loader
            importLoaders: 2,
            // 是否开启css module打包
            modules: true,
          },
        },
        "sass-loader",
        "postcss-loader",
      ],
    },
  ];
}
```

在[css-loader](https://webpack.docschina.org/loaders/css-loader/)的`options`将`module`设置成`true`,可以使用`CSS Modules`组织样式，避免 css 全局污染, `CSS Modules`使用方式如下：

```js
import style from "./style/index.scss";
```

> 注：use 数组里编译的顺序是从上到下，从右到左，如果不注意先后顺序打包时可能会报错

### 打包 iconfont 文件

```js
module: {
  rules: [
    {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: "file-loader",
      },
    },
  ];
}
```

![](/engineering/webpack_static.png)

更多文件格式的参考 [loader](https://webpack.docschina.org/loaders/)

## plugins

`plugin`可以在 webpack 运行到某个节点，帮我们实现前端打多工程化工作，`plugin`目的在于解决 loader 无法实现的其他事。

### HtmlWebpackPlugin

`HtmlWebpackPlugin` 会在打包结束后自动生成一个 html 文件，并把打包生成 js 自动引入到这个 html 文件中, 在文件被打包之后执行

```js
module.exports = {
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
};
```

### CleanWebpackPlugin

`CleanWebpackPlugin` 在打包之前，帮你清理删除某个文件夹

```js
plugins: [new CleanWebpackPlugin(["dist"])];
```

更多插件参考 [plugin](https://webpack.docschina.org/plugins/)

### MiniCssExtractPlugin

`MiniCssExtractPlugin`可以将 css 提取为一个单独的文件，一般当 css 文件超过 150kb 需要考虑是否将 css 提取。

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["MiniCssExtractPlugin.loader", "css-loader"],
    },
  ];
}
plugins: [new MiniCssExtractPlugin()];
```

## entry & output

打包的入口起点和输出， 即使可以存在多个 `entry` 起点，但只能指定一个 `output` 配置

```js
module.exports = {
  entry: {
    app: "./src/app.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist", // 需要是绝对路径
    publicPath: "http://cdn.com.cn",
  },
};

// 写入到硬盘：./dist/app.js, ./dist/search.js
```

`publicPath` 用于指定外部资源（如图片、文件等）的路径，支持文件路径使用 cdn 地址

## Devtool

`sourceMap`可以将打包后的代码与原代码做具体到行和列的映射(mapping),从而便于开发者查询问题和 debug, `Devtool`属性可以选择生成`sourceMap`的方式

`sourceMap`有多种生成模式，各种模式可以自由组合，来满足各种环境下的需求 模式是`[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`

- `inline-` source map 转换为 DataUrl 后添加到 bundle 中
- `clean-` 没有列映射(column mapping)的 source map，可以提升构建速度
- `eval-` 每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中
- `module-` 源自 loader 的 `source map` 会得到更好的处理结果

### 最佳实践

- 开发环境下 `development`使用 `cheap-module-eval-source-map`，可以兼顾打包效率和精确度
- 生产环境下 `production` 使用 `cheap-module-source-map`，提升精确度

[不同 source 打包对比 demo](https://github.com/licop/What_is_FE/tree/master/examples/webpack-demo/22-devtool-diff)
[更多关于 devtool 内容参考](https://webpack.docschina.org/configuration/devtool/)

## devServer

在每次编译代码时，手动运行 `npm run build` 会显得很麻烦。

`webpack-dev-server`会开启一个服务器，打开一个端口，可以帮助你在代码发生变化后**自动编译代码**和**自动刷新浏览器**。

webpack 没有提供自带的工具，我们需要自己安装

```
  npm install --save-dev webpack-dev-server
```

以下配置告知 `webpack-dev-server`，将 dist 目录下的文件 serve 到 localhost:9000 下。

```js
   devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		open: true
	}
```

### devServer 静态资源访问

`contentBase`可以额外为开发服务器指定查找资源目录

### 转发代理

当拥有单独的 API 后端开发服务器并且希望在同一域上发送 API 请求时，我们可以使用`webpack-dev-server`对请求转发进行代理。

使用后端在 `localhost:3000` 上，可以使用它来启用代理

现在，对 `/api/users` 的请求会将请求代理到 `http://localhost:3000/api/users`。

```js
module.exports = {
  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
```

将请求`/api/users`代理到 https://api.github.com/users

```js
devServer: {
    contentBase: './public',
    proxy: {
      '/api': {
        // http://localhost:8080/api/users -> https://api.github.com/api/users
        target: 'https://api.github.com',
        // http://localhost:8080/api/users -> https://api.github.com/users
        pathRewrite: {
          '^/api': ''
        },
        // 不能使用 localhost:8080 作为请求 GitHub 的主机名
        changeOrigin: true
      }
    }
  },
```

### 实现一个简易的 webpackserver

同样我们可以使用`webpack-dev-middleware`和`express`来自己编写一个，简单的`webpack-dev-server`。

新建一个 `server.js`文件，然后执行`node server.js`

```js
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// 将文件 serve 到 port 3000。
app.listen(3000, function() {
  console.log("Example app listening on port 3000!\n");
});
```

更多 [webpack-dev-server 配置](https://webpack.docschina.org/configuration/dev-server/) 参考

## 解析 resolve

这些选项能设置模块如何被解析。webpack 提供合理的默认值，但是还是可能会修改一些解析的细节。

`resolve.alias`为 reslove 常用属性。创建 import 或 require 的别名，来确保模块引入变得更简单

例如，一些位于 src/ 文件夹下的常用模块：

```js
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, "src/utilities/"),
      Templates: path.resolve(__dirname, "src/templates/"),
    },
  },
};
```

可以这样使用别名

```js
import Utility from "Utilities/utility";
```

[更多 resolve 参考](https://webpack.docschina.org/configuration/resolve/)

## 热模块替换 hmr

**模块热替换(HMR - hot module replacement)**功能会在应用程序运行过程中，替换、添加或删除 模块，而无需重新加载整个页面。

### hrm 作用

- 保留在完全重新加载页面期间丢失的应用程序状态。
- 只更新变更内容，以节省宝贵的开发时间。
- 在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。

### hrm 使用

hrm 继承在在 webpack-dev-server 中

```js
    devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000,
		open: true,

		hot: true,
		hotOnly: true
	}
```

当更新 js 文件时，Webpack 中的 hmr 需要手动处理模块热替换逻辑，可以在 js 文件中添加如下方法，实现某个模块的热替换

```js
// 使用HMR API
if (module.hot) {
  module.hot.accept("./print.js", function() {
    printMe();
  });
}
```

当更新 css 文件时，`style-loader`帮我们自动完成了热替换；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。

通用脚手架创建的项目内部都继承了 HMR 方案。

- [模块热替换(hot module replacement)](https://webpack.docschina.org/concepts/hot-module-replacement/)
- [Hot Module Replacement API](https://webpack.docschina.org/api/hot-module-replacement/)

## babel

使用`babel`对 js 文件进行转化，是的 ES6 语法变成各个浏览器能够识别的语法

webpack 引入`babel-loader`, 并且新建`.babelrc`文件对 babel 进行配置

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    },
  ];
}
```

如果对 react 项目进行打包，需用使用`@babel/preset-react`对文件进行处理，是的`jsx`格式语法能够被翻译

更多参考[babel 文档](https://babeljs.io/setup#installation)
