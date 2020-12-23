# 关于 cross-env

## 什么是 process.env

在 node 中，有全局变量`process`表示的是当前的 node 进程。`process.env`包含着关于系统环境的信息。

比如当我们配置`webpack`的时候经常与遇到`process.env.NODE_ENV`，但是`process.env`中并不存在`NODE_ENV`这个东西。`NODE_ENV`是用户一个自定义的变量，在 `webpack` 中它的用途是判断生产环境或开发环境的依据的。

## 理解 cross-env

`cross-env` 是运行跨平台设置和使用环境变量的脚本。

当我们使用 `NODE_ENV = production` 来设置环境变量的时候，大多数`windows`命令会提示将会阻塞或者异常，或者，`windows`不支持`NODE_ENV=development`的这样的设置方式，会报错。因此 `cross-env` 出现了。我们就可以使用 `cross-env`命令，这样我们就不必担心平台设置或使用环境变量了。也就是说 `cross-env` 能够提供一个设置环境变量的`scripts`，这样我们就能够以`unix`方式设置环境变量，然而在`windows`上也能够兼容的。

要使用该命令的话，我们首先需要在我们的项目中进行安装该命令，安装方式如下：

```
  npm install --save-dev cross-env
```

在 `package.json` 里使用它

```
  {
    "scripts": {
        "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
    }
  }
```

传递 JSON 字符串（例如，使用`ts-loader`时）

```
  {
    "scripts": {
        "test": "cross-env TS_NODE_COMPILER_OPTIONS={\\\"module\\\":\\\"commonjs\\\"} node some_file.test.ts"
    }
  }

```

要特别注意三倍反斜线(\\\)之前的 双引号(")和缺少的单引号(')。为了同时在 `Windows` 和 `UNIX`上运行，必须同时满足这两个条件。
