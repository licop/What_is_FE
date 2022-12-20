# Nodejs 学习笔记

## Nodejs 基础

### 什么是 NodeJS

JS 是脚本语言，脚本语言都需要一个解析器才能运行。对于写在 HTML 页面里的 JS，浏览器充当了解析器的角色。而对于需要独立运行的 JS，NodeJS 就是一个解析器。

每一种解析器都是一个运行环境，不但允许 JS 定义各种数据结构，进行各种计算，还允许 JS 使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的 JS 的用途是操作 DOM，浏览器就提供了 `document` 之类的内置对象。而运行在 NodeJS 中的 JS 的用途是操作磁盘文件或搭建 HTTP 服务器，NodeJS 就相应提供了 `fs`、`http` 等内置对象。

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

### FS

FS 是内置核心模块，提供文件系统操作的 API。

在 NodeJS 中，所有与文件操作都是通过 `fs` 核心模块来实现的，包括文件目录的创建、删除、查询以及文件的读取和写入，在 `fs` 模块中，所有的方法都分为同步和异步两种实现，具有 `sync` 后缀的方法为同步方法，不具有 `sync` 后缀的方法为异步方法，在了解文件操作的方法之前有一些关于系统和文件的前置知识，如文件的权限位`mode`、标识位 `flag`、文件描述符 `fd` 等。

关于文件的前置知识和 `fs` 的所有 api 详解请参考，以及如何将`fs`异步方法的回调函数写成`async/await`方式：[Node 中 fs 模块 API 详解](https://juejin.cn/post/6844903677782654983)

**fs 使用案例：**

[文件读、写、拷贝、监控 API 操作 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/01-file-api-01.js)

[使用 fs 的 api 将 md 文件转换成 html 文件 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/02-md-to-html.js)

[文件的打开和关闭操作 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/03-open-close-api.js)

[实现大文件读写 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/04-fs-read-write.js)

[自定义实现大文件拷贝 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/05-copy-file.js)

[目录的查看权限、读取信息、新建、删除等 API 操作 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/06-fs-dir-api.js)

[同步模式创建嵌套文件夹 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/07-mkdir-sync.js)

[异步模式创建嵌套文件夹 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/04FS/08-mkdir-async.js)

### Commonjs 模块机制

这方面知识在前端工程化的模块化内容总结过，参考：
[Commonjs 模块机制](/engineering/前端工程化/模块化.html#commonjs)

### Event

`node.js`是基于**事件驱动**的异步操作架构，内置`events`模块，`events`模块提供了`EventEmitter`类， `node.js`中很多内置核心模块继承`EventEmitter`,例如 `Net`、`HTTP`、`FS`、`Stream` 等，除了这些系统模块比较知名的 `Express`、`Koa` 框架中也能看到 `EventEmitter` 的踪迹。

**EventEmitter 常见 API**

- on: 添加当事件被触发时调用的回调函数
- emit: 触发事件，按照注册的顺序同步调用每个事件监听器
- once: 添加当事件在注册之后首次被触发时调用的回调函数
- off: 移除特定的监听器

```js
// 一个简单的例子
const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

emitter.on("起床", function(time) {
  console.log(`早上 ${time} 开始起床，新的一天加油！`);
});

emitter.emit("起床", "6:00");
```

**模拟实现 EventEmitter 的功能**

[代码实现](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/06Events/04-imitate-events.js)

```js
function MyEvent() {
  // 准备一个数据结构用于缓存订阅者信息
  this._events = Object.create(null);
}

MyEvent.prototype.on = function(type, callback) {
  // 判断当前次的事件是否已经存在，然后再决定如何做缓存
  if (this._events[type]) {
    this._events[type].push(callback);
  } else {
    this._events[type] = [callback];
  }
};

MyEvent.prototype.emit = function(type, ...args) {
  if (this._events && this._events[type].length) {
    this._events[type].forEach((callback) => {
      callback.call(this, ...args);
    });
  }
};

MyEvent.prototype.off = function(type, callback) {
  // 判断当前 type 事件监听是否存在，如果存在则取消指定的监听
  if (this._events && this._events[type]) {
    this._events[type] = this._events[type].filter((item) => {
      return item !== callback && item.link !== callback;
    });
  }
};

MyEvent.prototype.once = function(type, callback) {
  let foo = function(...args) {
    callback.call(this, ...args);
    this.off(type, foo);
  };
  foo.link = callback;
  this.on(type, foo);
};

let ev = new MyEvent();

let fn = function(...data) {
  console.log("事件1执行了", data);
};
```

[EventEmitter 常见 API 使用 demo](https://github.com/licop/What_is_FE/blob/master/examples/nodejs_learn/06Events/01-EventEmitter-apis.js)

更多关于 Event 模块的使用参考[Node.js Events 模块](https://www.nodejs.red/#/nodejs/events)

### 关于流 Stream

#### 什么是“流"

流的英文 `stream`，**流（Stream）** 是一个抽象的数据接口，`Node.js` 中很多对象都实现了流，流是`EventEmitter` 对象的一个实例，总之它是会冒数据（以 Buffer 为单位），或者能够吸收数据的东西，它的本质就是让数据流动起来。

可能看一张图会更直观：

![](/server/nodejs/nodejs7.jpeg)

流是数据的集合 —— 就像数组或字符串一样。流与它们的不同之处在于，流可能无法立马可用，并且它们不需要全部载入内存中。这种特性使得**流能够处理大量数据**，或者在一个时刻处理来自外部数据源的数据。

`Node.js` 中的许多 `build-in` 模块都实现了流的接口：

![](/server/nodejs/nodejs6.png)

#### 为什么要使用”流“

拿电影对比方，对比上图的水桶管道流转图，`source` 就是服务器端的视频，`dest` 就是你自己的播放器(或者浏览器中的 flash 和 h5 video)。看电影的方式就如同上面的图管道换水一样，一点点从服务端将视频流动到本地播放器，一边流动一边播放，最后流动完了也就播放完了。 说明：视频播放的这个例子，如果我们不使用管道和流动的方式，直接先从服务端加载完视频文件，然后再播放。会造成很多问题 因内存占有太多而导致系统卡顿或者崩溃 因为我们的网速 内存 cpu 运算速度都是有限的，而且还要有多个程序共享使用，一个视频文件加载完可能有几个 g 那么大。

在 Node.js 中，I/O 都是异步的，所有在和硬盘以及网络的交互过程中会涉及到传递回调函数的过程。

你之前可能会写出这样的代码：

```js
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  fs.readFile(__dirname + "/data.txt", function(err, data) {
    res.end(data);
  });
});
server.listen(8000);
```

上面的这段代码并没有什么问题，但是在每次请求时，我们都会把整个 `data.txt` 文件读入到内存中，然后再把结果返回给客户端。想想看，如果 `data.txt` 文件非常大，在响应大量用户的并发请求时，程序可能会消耗大量的内存，这样很可能会造成用户连接缓慢的问题。

其次，上面的代码可能会造成很不好的用户体验，因为用户在接收到任何的内容之前首先需要等待程序将文件内容完全读入到内存中。

幸运的是，`req` 请求对象和 `res` 响应对象都是流对象，这意味着我们可以使用一种更好的方法来实现上面的需求：

```js
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  var stream = fs.createReadStream(__dirname + "/data.txt");
  stream.pipe(res);
});
server.listen(8000);
```

在这里，`.pipe()` 方法会自动帮助我们监听 `data` 和 `end` 事件。上面的这段代码不仅简洁，而且 `data.txt` 文件中每一小段数据都将源源不断的发送到客户端。

![](/server/nodejs/nodejs4.gif)

除此之外，使用 `.pipe()` 方法还有别的好处，比如说它可以**自动控制背压**，以便在客户端连接缓慢的时候 `Node.js` 可以将尽可能少的缓存放到内存中。

同时使用”流“创建大文件可以减少内存占用，提升程序的运行效率。

#### 流的分类

在 Node.js 中有四种类型的流：Readable、Writable、Duplex 和 Transform 流：

- **Readable 流** 表示数据能够被消费，例如可以通过 `fs.createReadStream()` 方法创建可读流。
- **Writable 流** 表示数据能被写，例如可以通过 `fs.createWriteStream()` 方法创建可写流。
- **Duplex 流** 即表示既是 Readable 流也是 Writable 流，如 TCP Socket。
- **Transform 流** 也是 Duplex 流，能够用来修改或转换数据。例如 `zlib.createGzip` 方法用来使用 gzip 压缩数据。你可以认为 transform 流是一个函数，它的输入是 Writable 流，输出是 Readable 流。

| 使用情景                     | 类        | 需要重写的方法       |
| ---------------------------- | --------- | -------------------- |
| 只读                         | Readable  | \_read               |
| 只写                         | Writable  | \_write              |
| 双工                         | Duplex    | \_read, \_write      |
| 操作被写入数据，然后读出结果 | Transform | \_transform, \_flush |

此外所有的流都是 `EventEmitter` 的实例，它们能够监听或触发事件，用于控制读取和写入数据。Readable 与 Writable 流支持的常见的事件和方法如下图所示：

![](/server/nodejs/nodejs5.png)

#### stream 流转过程

再次看这张水桶管道流转图

![](/server/nodejs/nodejs7.jpeg)

图中可以看出，`stream` 整个流转过程包括 `source`，`dest`，还有连接二者的管道 `pipe`(stream 的核心)，了解这三者可以搞懂 `stream` 流转过程。

- **stream 从哪里来-soucre**

`stream` 的常见来源方式有三种：

1. 从控制台输入
2. http 请求中的 request
3. 读取文件

这里先说一下从 **控制台输入** 这种方式，2 和 3 两种方式 `stream`应用场景章节会有详细的讲解。 看一段 `process.stdin` 的代码

```js
process.stdin.on('data', function (chunk) {
    console.log('stream by stdin', chunk)
    console.log('stream by stdin', chunk.toString())
})
//控制台输入licop后输出结果
stream by stdin <Buffer 6c 69 63 6f 70 0a>
stream by stdin licop
```

运行上面代码：然后从控制台输入任何内容都会被 data 事件监听到，`process.stdin` 就是一个 stream 对象,data 是 stream 对象用来监听数据传入的一个自定义函数，通过输出结果可看出 `process.stdin` 是一个 stream 对象。

说明： stream 对象可以监听 data, end, opne, close, error 等事件。node.js 中监听自定义事件使用.on 方法，例如 `process.stdin.on(‘data’,…)`, `req.on(‘data’,…)`,通过这种方式，能很直观的监听到 stream 数据的传入和结束。

- **连接水桶的管道-pipe**

从水桶管道流转图中可以看到，在 source 和 dest 之间有一个连接的管道 pipe,它的基本语法是 `source.pipe(dest)`，source 和 dest 就是通过 pipe 连接，让数据从 source 流向了 dest。

- **stream 到哪里去-dest**

stream 的常见输出方式有三种：

1. 输出控制台
2. http 请求中的 response
3. 写入文件

#### stream 应用场景

stream 的应用场景主要就是**处理 IO 操作**，而 **http 请求**和**文件操作**都属于 IO 操作。这里再提一下 stream 的本质——由于一次性 IO 操作过大，硬件开销太多，影响软件运行效率，因此将 IO 分批分段进行操作，让数据像水管一样流动起来，直到流动完成，也就是操作完成。下面对几个常用的应用场景分别进行介绍。

- **get 请求中应用 stream**

使用 node.js 实现一个 http 请求，读取 data.txt 文件，创建一个服务，监听 8000 端口，读取文件后返回给客户端

常规使用文件读取返回给客户端 response 例子

```js
// getTest.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function(req, res) {
  const method = req.method; // 获取请求方法
  if (method === "GET") {
    // get 请求方法判断
    const fileName = path.resolve(__dirname, "data.txt");
    fs.readFile(fileName, function(err, data) {
      res.end(data);
    });
  }
});
server.listen(8000);
```

使用 stream 返回给客户端 response 将上面代码做部分修改

```js
const server = http.createServer(function(req, res) {
  const method = req.method; // 获取请求方法
  if (method === "GET") {
    // get 请求
    const fileName = path.resolve(__dirname, "data.txt");
    let stream = fs.createReadStream(fileName);
    stream.pipe(res); // 将 res 作为 stream 的 dest
  }
});
server.listen(8000);
```

- **post 中使用 stream**

一个通过 post 请求微信小程序的地址生成二维码的需求。

```js
/*
 * 微信生成二维码接口
 * params src 微信url / 其他图片请求链接
 * params localFilePath: 本地路径
 * params data: 微信请求参数
 * */
const downloadFile = async (src, localFilePath, data) => {
  try {
    const ws = fs.createWriteStream(localFilePath);
    return new Promise((resolve, reject) => {
      ws.on("finish", () => {
        resolve(localFilePath);
      });
      if (data) {
        request({
          method: "POST",
          uri: src,
          json: true,
          body: data,
        }).pipe(ws);
      } else {
        request(src).pipe(ws);
      }
    });
  } catch (e) {
    logger.error("wxdownloadFile error: ", e);
    throw e;
  }
};
```

看这段使用了 stream 的代码，为本地文件对应的路径创建一个 stream 对象，然后直接`.pipe(ws)`,将 post 请求的数据流转到这个本地文件中，这种 stream 的应用在 node 后端开发过程中还是比较常用的。

- **在文件操作中使用 stream**

创建一个可读数据流 readStream，一个可写数据流 writeStream,然后直接通过 pipe 管道把数据流转过去。

```js
const fs = require("fs");
const path = require("path");

// 两个文件名
const fileName1 = path.resolve(__dirname, "data.txt");
const fileName2 = path.resolve(__dirname, "data-bak.txt");
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1);
// 写入文件的 stream 对象
const writeStream = fs.createWriteStream(fileName2);
// 通过 pipe执行拷贝，数据流转
readStream.pipe(writeStream);
// 数据读取完成监听，即拷贝完成
readStream.on("end", function() {
  console.log("拷贝完成");
});
```

- **前端一些打包工具的底层实现**

目前一些比较火的前端打包构建工具，都是通过 `node.js` 编写的，打包和构建的过程肯定是文件频繁操作的过程，离不来 stream,例如 gulp

更多[Stream 使用案例 demo](https://github.com/licop/What_is_FE/tree/master/examples/nodejs_learn/07Stream)

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
- [深入学习 Node.js](https://github.com/semlinker/node-deep)
- [Node.js 内存溢出时如何处理？](http://www.inode.club/node/overflow.html)
