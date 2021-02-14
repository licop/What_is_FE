# 使用 Github Actions 完成持续集成

除了 `Travis CI`，Github 也有自带的持续集成服务`GitHub Actions`, 功能同样十分强大。我们可以使用它抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 `actions`。

很多操作在不同项目里面是类似的，完全可以共享。如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可.

GitHub 做了一个官方市场，可以搜索到他人提交的 [actions](https://github.com/actions)。 另外，还有一个[awesome actions](https://github.com/sdras/awesome-actions)的仓库，也可以找到不少 action。

## 基本概念

`GitHub Actions` 有一些自己的术语。

1. **workflow （工作流程）**：持续集成一次运行的过程，就是一个 workflow。

2. **job （任务）**：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

3. **step（步骤）**：每个 job 由多个 step 构成，一步步完成。

4. **action （动作）**：每个 step 可以依次执行一个或多个命令（action）。

## workflow 文件

GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的`.github/workflows`目录。

workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为.yml，比如 foo.yml。一个库可以有多个 workflow 文件。GitHub 只要发现`.github/workflows` 目录里面有.yml 文件，就会自动运行该文件。

workflow 文件的配置字段非常多，详见[官方文档](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)。

## 实例: Nuxtjs realworld 项目自动部署到阿里云服务器

将 nuxtjs 实现的 realworld 项目发布部署到[nuxtjs-realworld](https://github.com/licop/nuxtjs-realworld)阿里云服务器, 网址 https://realworld.licop.cn/

### 配置 Github Access Token

在`Settings Developer/settings`生成一个新的 token,然后拷贝生成的 token，这里的 token 只能显示一次

![](/development-process/gitaction1.png)

### 配置项目的 Secrets

然后，将这个 token 密钥储存到当前仓库的 `Settings/Secrets` 里面, 顺便将服务的地址，端口，用户名 root, 密码也配置在项目的 Secrets 中，在 workflow 文件中提取，用于部署到服务器。

![](/development-process/gitaction2.png)

### 新建 workflow 文件

workflow 文件可以分为 5 个关键的 action

1. 下载源码
2. 安装依赖，打包构建，将部署用到的文件、目录打包压缩包
3. 发布 Release
4. 上传构建结果到 Release
5. 部署到服务器,找到项目路径、解压、安装依赖、使用 pm2 运行项目

```yml
name: Publish And Deploy Demo
on:
  push:
    tags:
      - "v*"

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 下载源码
      - name: Checkout
        uses: actions/checkout@master

      # 打包构建
      - name: Build
        uses: actions/setup-node@master
      - run: npm install
      - run: npm run build
      - run: tar -zcvf release.tgz .nuxt static nuxt.config.js package.json pm2.config.json

      # 发布 Release
      - name: Create Release
        id: create_release
        uses: actions/create-release@master
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false

      # 上传构建结果到 Release
      - name: Upload Release Asset
        id: upload-release-asset
        uses: actions/upload-release-asset@master
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
        with:
          upload_url: ${{ steps.create_release.outputs.upload_url }}
          asset_path: ./release.tgz
          asset_name: release.tgz
          asset_content_type: application/x-tgz

      # 部署到服务器
      - name: Deploy
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          script: |
            cd /root/nuxtjs-realworld
            wget https://github.com/licop/nuxtjs-realworld/releases/latest/download/release.tgz -O release.tgz
            tar zxvf release.tgz
            npm install --production
            pm2 reload pm2.config.json
```

**CI/CD 流程**

![](/development-process/cicd1.png)

### 发布&部署

`push` 事件触发 workflow, 上面代码指定，push tag 并且 tag 名称是 v 开头的，可以触发 workflow。

```
git add .
git tag v0.1.0
git push origin v0.1.0
```

之后我们就可以在项目的 Actions 里查看，构建和发布是否成功

![](/development-process/gitaction3.png)

在 release 查看发布的内容

![](/development-process/gitaction4.png)

## 更多参考

- [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
