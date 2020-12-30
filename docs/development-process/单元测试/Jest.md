# Jest

`Jest` 是 Facebook 出品的一个测试框架，相对其他测试框架，其一大特点就是就是内置了常用的测试工具，比如自带断言、测试覆盖率工具，实现了开箱即用。

而作为一个面向前端的测试框架， `Jest` 可以利用其特有的快照测试功能，通过比对 UI 代码生成的快照文件，实现对 `React` 等常见框架的自动测试。`Jest`是 React 官方推荐的测试框架，同时被集成在官方脚手架`create-react-app`中作为默认的测试框架。

本文只是简单介绍`Jest`和整理个人使用中出现的一些问题的解决方法，想要了解更多参考[Jest 官方文档](https://jestjs.io/docs/en/getting-started)

## 安装

使用 yarn 安装 Jest︰

```
yarn add --dev jest
```

或 npm：

```
npm install --save-dev jest
```

将下面的配置部分添加到你的 `package.json` 里面：

```
{
  "scripts": {
    "test": "jest"
  }
}
```

## 配置

以下是`Jest`一些常用的配置，可以定义在`package.json`中，也可以新建文件`jest.config.js`or `jest.config.ts`配置文件

```
"jest": {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testEnvironment": "jsdom",
  "testRegex": "/test/.*\\.(test|spec)\\.(ts)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
  "collectCoverageFrom": [
    "src/*.{js,ts}",
    "src/**/*.{js,ts}"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/test/boot.ts"
  ]
},
```

接下来，我们就分别来看这几个配置的含义。

- [transform](https://jestjs.io/docs/en/configuration#transform-object-string-string)

简单地说就是一种转换器配置，比如我们这里的

```json
"transform": {
  ".(ts|tsx)": "ts-jest"
},
```

表示的就是使用 `ts-jest` 工具把 `.ts` 和 `.tsx` 文件内容转换成 JavaScript，因为我们也是使用 TypeScript 编写测试代码，而 Node.js 是不能直接支持 TypeScript 的，所以需要配置转换器。

- [testEnvironment](https://jestjs.io/docs/en/configuration#testenvironment-string)

测试环境。

```json
"testEnvironment": "jsdom"
```

表示它是一个类浏览器的测试环境，我们可以使用浏览器环境中的一些 API。当然也可以设置为`node`, 来使用 `node` 的一些 API

- [testRegex](https://jestjs.io/docs/en/configuration#testregex-string-array-string)

要测试文件的正则表达式。

```json
"testRegex": "/test/.*\\.(test|spec)\\.(ts)$"
```

表示 `test` 目录下所有以 `.test.ts` 和 `.spec.ts` 的文件都需要跑测试。

- [moduleFileExtensions](https://jestjs.io/docs/en/configuration#modulefileextensions-array-string)

模块文件扩展名，当你去引入一个模块并没有指定扩展名的时候，它会依次尝试去添加这些扩展名去找你引入的模块文件。

```json
"moduleFileExtensions": [
  "ts",
  "tsx",
  "js"
]
```

表示优先找 `.ts` 的模块、然后是 `.tsx`，最后是 `.js`。

- [coverageThreshold](https://jestjs.io/docs/en/configuration#coveragethreshold-object)

测试覆盖率的阈值设定，当我们的测试覆盖率达不到阈值的时候，测试会失败。

```json
"coverageThreshold": {
  "global": {
    "branches": 90,
    "functions": 95,
    "lines": 95,
    "statements": 95
  }
}
```

表示全局的代码分支覆盖率要达到 `90%`，方法覆盖率要达到 `95%`，代码行数覆盖率达到 `95%`，声明覆盖率达到 `95%`。

- [collectCoverageFrom](https://jestjs.io/docs/en/configuration#collectcoveragefrom-array)

收集指定文件的测试覆盖率(即使你没为这些文件编写测试)，它的值为 [glob patterns](https://github.com/jonschlinkert/micromatch) 类型。

```json
"collectCoverageFrom": [
  "src/*.{js,ts}",
  "src/**/*.{js,ts}"
]
```

表示收集 `src` 目录以及它的所有子目录中的 `js` 和 `ts` 文件的测试覆盖率。

- [setupFilesAfterEnv](https://jestjs.io/docs/en/configuration#setupfilesafterenv-array)

测试框架安装后立即执行的代码文件列表。

```json
"setupFilesAfterEnv": [
  "<rootDir>/test/boot.ts"
]
```

表示每次跑具体测试代码之前会先运行 `<rootDir>/test/boot.ts` 中的代码，`<rootDir>` 表示当前项目的根目录。

其他关于 Jest 的配置参考[官网](https://jestjs.io/docs/en/configuration)做扩展学习。

## 在 jest 中使用 Jasmine 插件

[Jasmine](https://jasmine.github.io/pages/getting_started.html) 是一个 BDD(行为驱动开发)的测试框架，它有很多成熟的插件，比如 [`jasmine-ajax`](https://github.com/jasmine/jasmine-ajax)，它会为我们发出的 Ajax 请求根据规范定义一组假的响应，并跟踪我们发出的 Ajax 请求，可以让我们方便的为结果做断言。

其实 Jest 也可以去写插件，但并没有现成的 Ajax 相关的 Jest 插件，但是 Jest 测试中我们仍然可以使用 Jasmine 相关的插件，只需要做一些小小的配置即可。

`jasmine-ajax` 依赖 `jasmine-core`，因此首先我们要安装几个依赖包，`jasmine-ajax`、`jasmine-core` 和 `@types/jasmine-ajax`。

这个时候我们需要去修改`setupFilesAfterEnv`属性引用的文件，因为每次跑具体测试代码之前会先运行该文件，我们可以在这里去初始化 `jasmine-ajax`。

```typescript
const JasmineCore = require("jasmine-core");
// @ts-ignore
global.getJasmineRequireObj = function() {
  return JasmineCore;
};
require("jasmine-ajax");
```

这里为了让 `jasmine-ajax` 插件运行成功，我们需要手动添加全局的 `getJasmineRequireObj` 方法，参考 [issue](https://github.com/jasmine/jasmine-ajax/issues/178)。
