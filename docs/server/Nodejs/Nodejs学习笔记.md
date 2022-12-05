# Nodejs 学习笔记

## Nodejs 基础

### 什么是 NodeJS

JS 是脚本语言，脚本语言都需要一个解析器才能运行。对于写在 HTML 页面里的 JS，浏览器充当了解析器的角色。而对于需要独立运行的 JS，NodeJS 就是一个解析器。

每一种解析器都是一个运行环境，不但允许 JS 定义各种数据结构，进行各种计算，还允许 JS 使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的 JS 的用途是操作 DOM，浏览器就提供了 `document` 之类的内置对象。而运行在 NodeJS 中的 JS 的用途是操作磁盘文件或搭建 HTTP 服务器，NodeJS 就相应提供了 `fs`、`http` 等内置对象。

### Nodejs 可以做什么

### Nodejs 架构

可以将 Node.js 理解为一个将多种技术组合起来的平台，可以使用 JavaScript 调用系统接口。

查看 node 下的 `deps` 文件夹, 也就是 nodejs 所用到的依赖

```
deps
├── cares        用 C-ares 做域名解析
├── gtest        是 C/C++ 的单元测试框架
├── http_parser  用来解析 HTTP
├── npm          包管理工具
├── openssl      用来解析 HTTPS
├── uv           一个跨平台的异步 I/O 库
├── v8           google 开发的js引擎，为 js 提供运行环境
└── zlib         用来做加密
```

那么这些技术又是怎么进行组合的呢，再看看 Node.js 的技术架构

![](/server/nodejs/nodejs1.jpeg)

- `Node Standard Library` 是我们每天都在用的标准库，如 `Http`, `Buffer` 模块。
- `Node Bindings` 是沟通 JS 和 C++的桥梁，封装 V8 和 Libuv 的细节，向上层提供基础 API 服务。
- 最下面这一层是支撑 Node.js 运行的关键，由 C/C++ 实现。
  - `V8` 是 Google 开发的 JavaScript 引擎，提供 JavaScript 运行环境，可以说它就是 Node.js 的发动机。
  - `Libuv` 是专门为 Node.js 开发的一个封装库，提供**跨平台的异步 I/O 能力**.
  - `C-ares`：提供了异步处理 DNS 相关的能力。
  - `http_parser`、`OpenSSL`、`zlib` 等：提供包括 http 解析、SSL、数据压缩等其他的能力。

#### 什么是 V8

V8 引擎是一个 JavaScript 引擎实现，最初由一些语言方面专家设计，后被谷歌收购，随后谷歌对其进行了开源。

V8 使用 C++ 开发，在运行 JavaScript 之前，相比其它的 JavaScript 的引擎转换成字节码或解释执行，V8 将其编译成原生机器码。

Node.js 为啥选择 V8？JavaScript 程序在 V8 引擎下的运行速度媲美二进制程序，它是现阶段执行 JavaScript 最快的一个引擎。

V8 的功能如下：

- 将 JS 源代码变成本地代码并执行
- 维护调用栈，确保 JS 函数的执行顺序
- 内存管理，为所有对象分配内存
- 垃圾回收，重复利用无用的内存
- 实现 JS 的标准库

#### 什么是 libuv

因为各个系统的 I/O 库都不一样，windows 系统有 IOCP，Linux 系统有 epoll。Node.js 的作者 Ryan 为了将其整合在一起实现一个跨平台的异步 I/O 库，开始写 `libuv`

什么是 I/O？例如：

- 从操作系统写文件到硬盘
- 访问网络，从操作系统发出数据到别的服务器
- 打印连接打印机，从操作系统发指令给打印机

以上这些行为都是 I/O，可以理解为**系统和外界进行交互的过程都叫 I/O**
而 `libuv` 会根据你是什么系统，自动的选择当前系统已经实现好了的异步操作（I/O）库，用于 TCP/UDP/DNS 文件等的异步操作

- 比如操作 TCP，我们都知道 HTTP 是基于 TCP/IP 的，如果可以操作 TCP 那么，就可以做 HTTP 的服务
- UDP，用于实时通信，常见的 QQ 聊天
- 解析 DNS

读文件、写文件，`libuv` 都可以帮你管理。这样 I/O 的部分就全部交给 C 语言去做，Javasript 无法操作底层硬件，甩手掌柜，负责调用就行了.

想要了解更多[libuv 中文教程](https://github.com/luohaha/Chinese-uvbook)

### Nodejs 的特点

**Node.js 很擅长 I/O 密集型任务，应对一些 I/O 密集型的高并发场景很有优势**，这也是它的定位：提供一种简单安全的方法在 JavaScript 中构建高性能和可扩展的网络应用程序。

- **单线程**

  单线程就是一个进程（process）只开一个线程。 Node.js 运行 Javacript 主线程使用单线程来运行，单线程机制配合异步 I/O 和事件循环可以实现**高并发请求**, 单线程机制使得不适合 Cpu 密集型场景。

  ```js
  // 单线程机制演示
  const http = require("http");

  function sleepTime(time) {
    const sleep = Date.now() + time * 1000;
    while (Date.now() < sleep) {}
    return;
  }
  sleepTime(4);
  const server = http.createServer((req, res) => {
    res.end("server starting......");
  });
  // 延迟4s服务器才启动
  server.listen(8080, () => {
    console.log("服务启动了");
  });
  ```

- **非阻塞 I/O**

  Node.js 避免了由于需要等待输入或者输出（数据库、文件系统、Web 服务器...）响应而造成的 CPU 时间损失，这得益于 Libuv 强大的**异步 I/O**。I/O 是应用程序的瓶颈所在，异步 I/O 提高性能无需等待原地返回结果。

- **事件驱动编程**

  事件与回调在 JavaScript 中已是屡见不鲜，同时这种编程对于习惯同步思路的同学来说可能一时很难理解，但是这种编程模式，确是一种高性能的服务模型。Node.js 与 Nginx 均是基于事件驱动的方式实现，不同之处在于 Nginx 采用纯 C 进行编写，仅适用于 Web 服务器，在业务处理方面 Node.js 则是一个可扩展、高性能的平台。

  **Nodejs 单线程配合事件驱动架构以及 libuv 实现异步 I/0**

  ```js
  // nodejs常见的事件驱动机制
  const EventEmitter = require("events");

  const myEvent = new EventEmitter();

  myEvent.on("事件1", () => {
    console.log("事件1执行了");
  });

  myEvent.on("事件1", () => {
    console.log("事件1-2执行了");
  });
  ```

- **跨平台**

起初 Node.js 只能运行于 Linux 平台，在 v0.6.0 版本后得益于 Libuv 的支持可以在 Windows 平台运行。

### Nodejs 应用场景

- **I/O 密集型场景**

  Node.js 的优势主要在于事件循环，非阻塞异步 I/O，只开一个线程，不会每个请求过来我都去创建一个线程，从而产生资源开销。

- **RESTful API**

  通常我们可以使用 Node.js 来做为中间层，负责组装数据提供 API 接口给到前端调用，这些数据源可能来自第三方接口或者数据库，例如，以前可能我们通过后端 Java、PHP 等其它语言来做，现在我们前端工程师通过 Node.js 即可完成，后端则可以更专注于业务开发。

  推荐一个去哪儿开源的 API 管理工具 YAPI：https://github.com/YMFE/yapi 使用的 Node.js 进行开发的

- **Backend For Frontend**

  Backend For Frontend，简称 BFF，服务于前端的后端，并非是一种新技术只是一种逻辑上的分层，在这一层我们可以做一些资源的整合，例如：原先前端需要从三个不同的地方来获取资源，那么，有了这一层之后，我们是不是可以做个聚合，统一处理之后返回给前端，同时也不授后端系统的变迁，导致也要去更改。

  ![](/server/nodejs/nodejs2.png)

* **RPC 服务**

  RPC（Remote Procedure Call）中文名「远程过程调用」，也许你对它很陌生，但是在当今微服务模式下，我们可能是针对功能或者具体的业务形态进行服务化，那么服务之间的通信一种常见的模式我们都知道通过 HTTP 来实现，了解网络模型的同学可能知道，如果我们现在通过 TCP 的方式是不是会更高效呢？

  当然是的，HTTP 属于应用层协议，在这之下就是传输层，显然以 TCP 形式是很有优势的，RPC 服务也就是采用的 TCP，现在出名的 RPC 服务例如，Google 的 gRPC、阿里的 Dubble。

* **基础工具**

  可以做为基础工具，前端领域中的编译器、构建工具、搭建脚手架等。比较出名的例如 Webpack、Gulp 都是很成功的。

* **论坛社区**

  Nodeclub 是使用 Node.js 和 MongoDB 开发的社区系统，界面优雅，功能丰富，小巧迅速，可以用它搭建自己的社区。Cnode 社区就是一个成功的例子，Cnode 地址：https://cnodejs.org/

  https://github.com/cnodejs/nodeclub

* **Serverless**

  `ServerLess` 是一种 “无服务器架构”，它不需要开发者去关心运维、流量处理这些工作，开发者则可以更关注于业务本身。

  函数即服务，那么写一个函数就可以实现一个 API 接口给到前端，显然对开发工作是减轻了很多，在 JavaScript 中函数则是一等一的公民，在 ServerLess 这一场景下 Node.js 本身也很轻量级，还是拥有着很大的优势。

* **Microservices**

  微服务也是近两年一个很火热的词，这里提几个微服务主要的特点：小型服务、以独立进程运行、可以使用不同语言。那么这里则可以根据业务形态来选择不同的语言实现，Node.js 本身也是很轻量级的，实现起来也很快，在一些 I/O 密集场景还是很适用的。

### Nodejs 实现第一个 API 服务

[实现一个简单的 API 服务 demo](https://github.com/licop/What_is_FE/tree/master/examples/nodejs_learn/node_ts_api)

### Nodejs 全局对象

- 与浏览器平台的 window 不完全相同
- Nodejs 全局对象上挂载许多属性
- Nodejs 全局对象是 global， 全局对象可以看作全局变量的宿主

Nodejs 常见全局变量：

```js
__filename: 返回正在执行脚本文件的绝对路径;
__dirname: 返回正在执行脚本所在目录;
timer类函数: 执行顺序与事件循环间的关系;
process: 指向Nodejs内置的process模块，提供与当前进程互动的接口;
require: 实现模块加载
module、export: 处理模块导出
...
```

### process 进程

Node.js 中的进程 `process` 是一个全局对象，无需 require 直接使用，给我们提供了当前进程中的相关信息。官方文档提供了详细的说明，感兴趣的可以亲自实践下 [Process 文档](http://nodejs.cn/api/process.html)。

- `process.env`：环境变量，例如通过 `process.env.NODE_ENV` 获取不同环境项目配置信息
- `process.nextTick`：这个在谈及 Event Loop 时经常为会提到
- `process.pid`：获取当前进程 id
- `process.ppid`：当前进程对应的父进程
- `process.cwd()`：获取当前进程工作目录
- `process.platform`：获取当前进程运行的操作系统平台
- `process.uptime()`：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
- `process.argv`: 获取启动参数
- `process.memoryUsage()`: 内存使用
- `process.cpuUsage`: cpu 使用
- 进程事件：`process.on('uncaughtException', cb)` 捕获异常信息、`process.on('exit', cb）`进程退出监听
- 三个标准流：`process.stdout` 标准输出、`process.stdin` 标准输入、`process.stderr` 标准错误输出

了解更多关于进程(process)和线程(threads)：[进程和线程](https://www.nodejs.red/#/nodejs/process-threads?id=process)

## Nodejs 核心模块

### path 模块

`path`为 Nodejs 内置模块，require 之后可以直接使用，用来处理文件和目录的路径 [path 模块 官方文档](https://nodejs.org/api/path.html)

path 模块常用 API:

- `path.basename(path[, suffix])` 获取路径中基础名称
- `path.dirname(path)` 获取路径中目录名称
- `path.extname(path)` 获取路径中扩展名称
- `path.isAbsolute(path)` 当前路径是否是绝对路径
- `path.join([...path])` 拼接多个路径片段
- `path.resolve([...paths])` 返回绝对路径
- `path.parse(path)` 解析路径
- `path.format(pathObject)` 序列化路径
- `path.normalize(path)` 规范化路径

[path 模块常用 API 使用 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/02Path/01-path.js)

### Buffer

- `Buffer` 是无须 require 的一个全局变量
- 实现 Nodejs 平台下的二进制数据操作
- 不占据 V8 堆内存大小的内存空间，直接由 c++层面进行分配
- 内存的使用由 Node 来控制，由 V8 的 GC 回收
- 一般配合 `Stream` 流使用，充当**数据缓冲区**

![](/server/nodejs/nodejs3.png)

关于 Buffer 详细可以参考： [Node.js 中的缓冲区（Buffer）究竟是什么？](https://www.nodejs.red/#/nodejs/buffer?id=buffer-vs-cache)

#### Buffer 使用 demo

[Buffer 的三种创建方法，实例方法和静态方法 Api 使用 demo](https://github.com/licop/What_is_FE/tree/master/examples/nodejs_learn/03Buffer)

[Buffer 自定义实例方法 split 的实现](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/03Buffer/04-buffer-split.js)

## Nodejs 通信

## 更多学习资料

- [Nodejs 技术栈 强力推荐](https://www.nodejs.red)
- [Nodejs 技术栈 Github](https://github.com/qufei1993/Nodejs-Roadmap)
- [Nodejs 官方文档](https://nodejs.org/docs/latest-v17.x/api/documentation.html)
- [Nodejs 中文文档](https://www.apiref.com/nodejs-zh/synopsis.html)
- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs#official)
- [七天学会 NodeJS](http://nqdeng.github.io/7-days-nodejs/#1.1)
- [9 个 Node.js 学习、进阶、debugging 分析、实战 的重磅开源项目](https://juejin.cn/post/6961101653709684772#heading-7)
- [Nodejs 技术架构](https://juejin.cn/post/7081891057918558221)
