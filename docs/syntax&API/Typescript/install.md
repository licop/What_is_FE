# 安装

## 安装 typescript

```
  npm install -g typescript
```

- `tsc -V` 查看 typescript 版本
- `tsc demo.ts` 编译出 demo.js
- `tsc init` 生成 tscofig.json 编译配置文件

## 安装 ts-node

```
   npm install -g ts-node
```

- `tsc-node demo.ts` 直接执行.ts 文件

## 初始化项目

通常我们初始化一个项目，需要配置一大堆东西，比如 `package.json`、`.editorconfig`、`.gitignore` 等；还包括一些构建工具如 `rollup`、`webpack` 以及它们的配置。

当我们使用 `TypeScript` 去写一个项目的时候，还需要配置 `TypeScript` 的编译配置文件 `tsconfig.json` 以及 `tslint.json` 文件。

我们可以使用脚手架工具帮我们生成好这些初始化文件。

### TypeScript library starter

它是一个开源的 TypeScript 开发基础库的脚手架工具，可以帮助我们快速初始化一个 TypeScript 项目，我们可以去它的[官网地址](https://github.com/alexjoverm/typescript-library-starter)学习和使用它。

### 使用方式

```bash
git clone https://github.com/alexjoverm/typescript-library-starter.git ts-demo
cd ts-demo

npm install
```

安装好依赖后，我们先来预览一下这个项目的目录结构。

#### 目录文件介绍

`TypeScript library starter` 生成的目录结构如下：

```
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── code-of-conduct.md
├── node_modules
├── package-lock.json
├── package.json
├── rollup.config.ts // rollup 配置文件
├── src // 源码目录
├── test // 测试目录
├── tools // 发布到 GitHup pages 以及 发布到 npm 的一些配置脚本工具
├── tsconfig.json // TypeScript 编译配置文件
└── tslint.json // TypeScript lint 文件
```

#### 优秀工具集成

使用 `TypeScript library starter` 创建的项目集成了很多优秀的开源工具：

- 使用 [RollupJS](https://rollupjs.org/) 帮助我们打包。
- 使用 [Prettier](https://github.com/prettier/prettier) 和 [TSLint](https://palantir.github.io/tslint/) 帮助我们格式化代码以及保证代码风格一致性。
- 使用 [TypeDoc](https://typedoc.org/) 帮助我们自动生成文档并部署到 GitHub pages。
- 使用 [Jest](https://jestjs.io/)帮助我们做单元测试。
- 使用 [Commitizen](https://github.com/commitizen/cz-cli)帮助我们生成规范化的提交注释。
- 使用 [Semantic release](https://github.com/semantic-release/semantic-release)帮助我们管理版本和发布。
- 使用 [husky](https://github.com/typicode/husky)帮助我们更简单地使用 git hooks。
- 使用 [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog)帮助我们通过代码提交信息自动生成 change log。

这里我们列举了很多工具，感兴趣的同学们可以点开他们的链接对这些工具做进一步学习。

#### Npm Scripts

`TypeScript library starter` 同样在 `package.json` 中帮我们配置了一些 `npm scripts`，接下来我们先列举一下我们开发中常用的 `npm scripts`，剩余的我们在之后学习中遇到的时候再来介绍。

- `npm run lint`: 使用 TSLint 工具检查 `src` 和 `test` 目录下 TypeScript 代码的可读性、可维护性和功能性错误。
- `npm start`: 观察者模式运行 `rollup` 工具打包代码。
- `npm test`: 运行 `jest` 工具跑单元测试。
- `npm run commit`: 运行 `commitizen` 工具提交格式化的 `git commit` 注释。
- `npm run build`: 运行 `rollup` 编译打包 TypeScript 代码，并运行 `typedoc` 工具生成文档。

### Create React App

`create-react-app`是 React 官方推出的脚手架工具。想了解更多可以去[Github 地址了解](https://github.com/facebook/create-react-app)

目前`create-react-app`以支持`typescript`项目的初始化。

#### 使用方式

```
 npx create-react-app demo --template typescript
```
