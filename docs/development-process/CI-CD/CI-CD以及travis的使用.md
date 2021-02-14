# CI/CD 以及 travis 的使用

## CI 持续集成（Continuous Integration）

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

- 频繁的将代码集成到主干
- 快速发现错误
- 防止分支大幅偏离主干

## CD 持续交付、持续部署(Continuous Delivery & Continuous Deployment)

- 频繁的将软件的新版本，交付给质量团队或者用户
- 代码通过评审以后，自动部署到生产环境

![cicd](/development-process/cicd.png)

## 使用 Travis CI

`Travis CI` 提供的是持续集成服务（CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到[Gihub Page](https://docs.travis-ci.com/user/deployment/pages/)和服务器上。

如何是 node 项目， `Travis CI`会首先 自动执行 `nvm install stable` 安装依赖,之后执行 `npm run test`，单元检测全部通过后才会对项目进行构建和部署。

> `Travis CI` 只支持 Github，不支持其他代码托管服务。

## .travis.yml

Travis 要求项目的根目录下面，必须有一个`.travis.yml`文件。这是配置文件，指定了 Travis 的行为。该文件必须保存在 Github 仓库里面，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令。

## 运行流程

Travis 的运行流程很简单，任何项目都会经过两个阶段。

```
  install 阶段:  安装依赖
  script 阶段：运行脚本
```

### install 字段

`install`字段用来指定安装脚本。

```
install: ./install-dependencies.sh
```

如果有多个脚本，可以写成下面的形式。

```
install:
  - command1
  - command2
```

上面代码中，如果 command1 失败了，整个构建就会停下来，不再往下进行。

如果不需要安装，即跳过安装阶段，就直接设为`true`。

```
install: true
```

### script 字段

`script`字段用来指定构建或测试脚本。

```
script: bundle exec thor build
```

如果有多个脚本，可以写成下面的形式。

```
script:
  - command1
  - command2
```

注意，`script`与`install`不一样，如果`command1`失败，`command2`会继续执行。但是，整个构建阶段的状态是失败。

如果`command2`只有在`command1`成功后才能执行，就要写成下面这样。

```
script: command1 && command2
```

### 运行实例：Node 项目

以下是一个 node 项目的运行实例，完成文档构建，然后将项目部署到`Github Page`上。

```
  language: node_js
  node_js:
    - "stable"
  script:
    - npm run build-storybook
  deploy:
    provider: pages
    skip_cleanup: true
    github_token: $github_token
    local_dir: storybook-static
    on:
       branch: main
```

上面代码中，`node_js`字段用来指定 Node 版本。

Node 项目的`install`和`script`阶段都有默认脚本，可以省略。

```
 install默认值：npm install
 script默认值：npm test
```

`github_token` 在 github 的`Setting`里生成，然后添加到`travis`的变量中。

[更多关于 javascript 和 nodejs 部署](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

## 钩子方法

Travis 为上面这些阶段提供了 7 个钩子。

```
   before_install：install 阶段之前执行
   before_script：script 阶段之前执行
   after_failure：script 阶段失败时执行
   after_success：script 阶段成功时执行
   before_deploy：deploy 步骤之前执行
   after_deploy：deploy 步骤之后执行
   after_script：script 阶段之后执行
```

下面是一个`before_install`钩子的例子。

```
  before_install:
  - sudo apt-get -qq update
  - sudo apt-get install -y libxml2-dev
```

上面代码表示`before_instal`l 阶段要做两件事，第一件事是要更新依赖，第二件事是安装`libxml2-dev`

## 运行状态

最后，Travis 每次运行，可能会返回四种状态。

```
   passed：运行成功，所有步骤的退出码都是0
   canceled：用户取消执行
   errored：before_install、install、before_script有非零退出码，运行会立即停止
   failed ：script有非零状态码 ，会继续运行
```

## 更多参考

- [持续集成服务 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)
- [Building a JavaScript and Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
