## 关于 package.json


在一个Node.js项目中，package.json几乎是一个必须的文件，它的主要作用就是管理项目中所使用到的外部依赖包，同时它也是npm命令的入口文件。

### dependencies

应用依赖，或者叫做业务依赖，这是我们最常用的依赖包管理对象！它用于指定应用依赖的外部包，这些依赖是应用发布后正常执行时所需要的，但不包含测试时或者本地打包时所使用的包。可使用下面的命令来安装：

```
   npm install packageName --save
```


### devDependencies

开发环境依赖，仅次于**dependencies**的使用频率！它的对象定义和**dependencies**一样，只不过它里面的包只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等，例如gulp, grunt, webpack, moca, node-sass, typescript等，可使用以下命令来安装：

```
  npm install packageName --save-dev
```

### peerDependencies

同等依赖，或者叫同伴依赖，用于指定当前包（也就是你写的包）兼容的宿主版本。多用于编写插件和组件库，被其他项目和宿主引用，例如编写`gulp`插件和`react`的组件，需要用`peerDependencies `的方式`gulp`、`react`和`react-dom`。避免依赖被重复引用, 从而造成版本冲突而报错。

例如以下，项目会使用宿主已经安装好 `react `和`react-dom`库，如果版本小于`16.8.0`则会warning提醒版本过低
```
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
```


