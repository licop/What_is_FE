# 使用 Husky+Commitlint+Lint-staged 约束 Git 提交

每一名开发人员都有自己独特的代码风格。但对于多人协作项目，保持统一的风格有利于项目维护。我们可以在项目中引入 **ESLint**、**Prettier** 来规范代码，使用**Commitlint**来规范我们的提交信息，并且使用**Husky**和**Lint-staged**来在每次代码提交前进行校验。

## 常用工具汇总

1. [eslint](https://github.com/eslint/eslint) JavaScript 代码检测工具，检测并提示错误或警告信息

2. [prettier](https://github.com/prettier/prettier) 代码格式化工具，更好的代码风格效果

3. [husky](https://github.com/typicode/husky) Git hooks 工具, 可以在执行 git 命令时，执行自定义的脚本程序

4. [lint-staged](https://github.com/okonet/lint-staged) 对暂存区 (git add) 文件执行脚本

5. [commitlint](https://github.com/conventional-changelog/commitlint) 检测 git commit 内容是否符合定义的规范

## Husky

Husky 是一款 Git Hooks 工具，可以在执行特定的 git 命令时（如: git commit, git push）触发对应的脚本

**安装 husky**

```shell
npx husky-init && npm install
```

执行以上代码之后，项目的根目录会多出一个 .husky 文件夹，并且 package.json 中会增加一个脚本执行命令

```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

prepare 会在每次 npm install 的时候执行。现在 husky 已经安装好了，接下来添加对应的钩子函数

比如我需要在每次 git commit 提交前执行某些操作，就可以添加一个 `commit-msg` 钩子

```
npx husky add .husky/commit-msg 'npm test'
```

然后 .husky 目录下就会增加一个 `commit-msg` 文件

这样每一次 git commit 都会执行一次 npm test, 如果面临特殊情况，需要绕过 Git Hooks，可以使用 --no-verify

## Commitlint

**Commitlint** 检测 git commit 内容是否符合定义的规范。

在开发项目时产生大量的 commit 版本， 这些 commit 记录了整个项目的开发进程，当我们需要通过 commit 来回顾项目开发进展或者回退版本时，良好的 commit 信息可以帮我们快速了解但是开发和修改的需求背景和动机。

**Commitlint** 会提供一套规范来约束项目的 commit 信息，并在提供 commit 的时候自动校验。

规范要求我们按以下规定来填写 commit 信息：

```
type(scope?):subject
```

- `type` 表示 commit 的类型
- `scope` 是可选的，表示当前 commit 的修改范围
- `subject` 就是描述 commit 的详细说明

根据规范 type 可以为一下这些值

- build
- chore
- ci
- docs
- feat（新功能）
- fix（修复）
- perf（性能）
- refactor（重构）
- revert
- style
- test

**安装**

```
npm install --save-dev @commitlint/{config-conventional,cli}
```

然后在项目根目录新建一个 `commitlint.config.js` 文件

```js
module.exports = { extends: ["@commitlint/config-conventional"] };
```

之前已经在项目中引入了 Husky，修改一下 commit-msg 脚本，在每次 git commit 的时候执行 commitlint 校验

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

`.husky/commit-msg` 文件中的内容变为：

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit "${1}"
```

完成以上配置之后，只有满足规范的 commit message 才能提交，不满足规则的提交会报错

## lint-staged

之前使用了 husky 的 hook —— pre-commit 来在 commit 代码之前对代码做一些检验处理，下面我们将使用 lint-staged 来处理检验任务。

**什么是 lint-staged？**

lint-staged 是用来在 commit 代码前来统一运行校验任务的。在终端运行以下命令安装 lint-staged。

```
npm i lint-staged -D
```

**修改 pre-commit**

接着将 .husky/pre commit 文件里的 npm test 改成 npm run pre-commit

**修改 package.json**

然后我们需要修改 package.json。在 scripts 里增加 pre-commit 命令，另外还需要在 scripts 同层增加 lint-staged 的配置。

```json
"scripts": {
  "dev": "vite",
  "build": "run-p type-check build-only",
  "preview": "vite preview --port 4173",
  "build-only": "vite build",
  "type-check": "vue-tsc --noEmit",
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
  "prepare": "husky install",
  // 在这里增加 pre-commit 命令
  "pre-commit": "lint-staged"
},
// 在这里增加 lint-staged 配置
"lint-staged": {
  "src/**/*.{ts,vue}": [
    "prettier --write",
    "eslint --fix"
  ]
}
```
