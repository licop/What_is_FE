# 关于 npx

`npx` 是 npm 的软件包运行器， 安装 npm 5.2.0 以上版本的时候会自动安装了 npx。

npx 的**执行顺序**机制是首先会自动检查当前项目中的可执行依赖文件（即./node_modules/.bin 下面的可用依赖），如果不存在就会去环境变量 path 中寻找，如果还没有就会自动安装，其安装的依赖位于 node 安装目录中的 node_cache/\_npx 之中，所以安装的依赖只是临时的。

举几个常见的场景：

## 1. 全局命令，免安装

好处就是避免安装全局命令，以及对于命令开发者来说，可以减少碎片化问题。

```
npx @vue/cli -V

 等价于

npm install @vue/cli -g
vue -V
```

npx http-server 可以一句话帮你开启一个静态服务器

```
npx http-server

npx: 23 安装成功，用时 48.633 秒
Starting up http-server, serving ./
Available on:
 http://127.0.0.1:8080
 http://192.168.5.14:8080
Hit CTRL-C to stop the server
```

使用 create-react-app 新建 react 项目

```
npx create-react-app react-demo
```

## 2. 本地 bin 寻址

如果一个包配置了`bin`后，当它被安装时，在项目的`node_module/.bin`下就会有响应的指令，方便执行

如常见的执行单元测试，可以看到 mocha 有配置了一个`bin` 。

如果我们`npm install mocha --save-dev` 后，可以

```
  //  使用node命令执行
  node node_module/.bin/mocha **/*.js

  // 把 mocha 指令写入到 npm scripts 后，会自动寻址 node_modules/.bin
  // { scripts: { "test": "mocha **/*.test.js" }}
  npm test

  //  使用npx寻找执行指令
  npx mocha **/*.test.js
```

```

```

## 3.执行 GitHub 上面的模块源码

```
 # 从 github 仓库中调用命令
npx github:piuccio/cowsay hello
```
