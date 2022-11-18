# MockServiceWorker

在开发前端项目中，大部分需求会涉及 API 数据交互，为了保证项目效率，前端通常需要一个 API 服务器来确保前端开发进度，这就是所谓的 Mock 服务。网络上有许多类型的 Mock 工具，使用不同的方法解决同一个问题。

主要包括两种类型：

- 一种是使用服务器语言（如 Node.js、PHP）模拟一个服务器
- 另一种是使用拦截器拦截请求然后重定向到前端准备好的处理函数。

[Mock Service Worker（MSW)](https://juejin.cn/post/7018732383067176991)，一个功能完善的 API Mock 工具，**它可以使用 Service Worker 拦截 HTTP 请求，可以模拟真实的 HTTP 请求**，可以使用浏览器的 DevTools 进行查看，并且是在 Service Worker 级别上工作。

**优点总结**

- 集成于前端，不需要写 node 中间件（比如 express, koa）
- 语法基本和 express 一致
- 直接通过 chrome 快速 debugger
- 即可用于前端开发，也可用于单元测试，只需要写一份 mocker
- 可在 build 环境使用 mock
- 不存在跨域问题

**缺点总结**

- 需要安装和配置, 有时需要搞定环境问题，前期投入时间成本较大
- 不适用与多人协作，规模较大的项目

## 什么是 Service Worker

MSW 依赖于 `Service Worker`，`Service Worker` 本质上是浏览器在后台运行的脚本，它是完全独立于它正在处理或服务的网页。它们充当了 web 应用程序、浏览器和网络之间的代理服务器，目的是为前端应用程序创建一个良好的离线体验，关于 Service Worker 的更多内容可以参考[Service Worker 的 MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)。而 MSW 就是建立在 `Service Worker` 的缓存机制之上的。

## 使用 MockServiceWorker

安装细节和使用可以参考官网，以下是简单的使用代码

```js
import { setupWorker, rest } from "msw";
const worker = setupWorker(
  rest.post("/login", async (req, res, ctx) => {
    const { username } = await req.json();
    return res(
      ctx.json({
        username,
        firstName: "John",
      })
    );
  })
);
worker.start();
```

具体使用方法可以参考我的[redux-react-post]()项目的 `server.js`文件

项目中还使用了 [@mswjs/data](https://github.com/mswjs/data)模拟创建数据模型的结构和关系，并可以像查询数据库一样获取数据

项目中还使用了 [fakerjs](https://github.com/faker-js/faker) 生成随机数据，来完善丰富我们的数据结构。
