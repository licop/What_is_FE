# Nodejs 学习笔记

## Nodejs 基础

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

  Node.js 运行 Javacript 主线程使用单线程来运行，单线程机制配合异步 I/O 和事件循环可以实现**高并发请求**, 单线程机制使得不适合 Cpu 密集型场景。

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

## Nodejs 核心模块

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

```

```
