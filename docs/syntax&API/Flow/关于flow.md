# 关于 Flow

**Flow**一个 JavaScript 静态类型检测器。是由 Facebook 推出的工具，在 react 和 vuejs 中都可以看到 Flow 的使用。

## 快速上手

项目中安装 Flow

```
npm install flow-bin --save-dev
```

安装之后可以在`node_modules`的`bin`目录找的`flow`,可以使用`npx flow`命令进行检验，找出错误。

执行`npx flow init`命令，项目出会出现`.flowconfig`文件，里面有一些初始的配置选项。

## Flow 编译移除注解

### 使用 flow-remove-types

- 执行 `npx flow-remove-types src -d dist`就可以编译自动移除代码中的类型注解

### 使用`babel`

- 安装 `@babel/core` `@babel/cli` `@babel/preset-flow`
- 新建`.babelrc`文件

```
{
    "presets": ["@babel/preset-flow"]
}
```

- 执行`npx flow-remove-types src -d dist`

## Flow 开发工具插件

vscode 安装`Flow Language Support`插件在在写代码的时候就提示报错

## Flow 语法

[参考 demo](https://github.com/licop/What_is_FE/tree/master/examples/Flow)

## 更多参考

- [类型文档](https://www.saltycrane.com/cheat-sheets/flow-type/latest/)
- [官方类型文档](https://flow.org/en/docs/types/)
- [中文文档](https://zhenyong.github.io/flowtype/)
