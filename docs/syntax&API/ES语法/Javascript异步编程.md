# Javascript 异步编程

Javascript 采用**单线程**模式工作,即 JS 执行环境中负责执行代码的线程只有一个。

单线程是必要的，也是 javascript 这门语言的基石，原因之一在其最初也是最主要的执行环境——浏览器中，我们需要进行各种各样的 dom 操作。试想一下 如果 javascript 是多线程的，那么当两个线程同时对 dom 进行一项操作，例如一个向其添加事件，而另一个删除了这个 dom，此时该如何处理呢？因此，为了保证不会 发生类似于这个例子中的情景，javascript 选择只用一个主线程来执行代码，这样就保证了程序执行的一致性。

**单线程**的模式的优点是更安全，更简单，缺点是如果遇到特别耗时的任务后面的任务都要排队等待任务结束。

```
 console.log('foo');
 for(let i = 0; i< 10000; i++) {
    console.log('耗时操作')
 }
 console.log('等待耗时结束')
```

为了解决耗时任务**阻塞**执行的问题, Javascript 将任务的执行模式分为了两种。

- 同步模式（synchronous）
- 异步模式（Asynchronous）

## 同步模式和异步模式

### 同步模式

程序的执行顺序与程序的编码顺序一致，在单线程模式下大多数任务都会以**同步模式**执行

```
console.log('global begin')

function bar () {
  console.log('bar task')
}

function foo () {
  console.log('foo task')
  bar()
}

foo()

console.log('global end')

```

### 异步模式

不同于同步模式，异步模式的 Api 不会等待这个任务的结束才开始下一个任务，耗时操作开始过后就立即往后执行下一个任务，耗时操作的后续逻辑一般会通过回调函数的方式定义，耗时任务完成后会自动执行传入的回调函数。

```
console.log('global begin')

setTimeout(function timer1 () {
  console.log('timer1 invoke')
}, 1800)

setTimeout(function timer2 () {
  console.log('timer2 invoke')

  setTimeout(function inner () {
    console.log('inner invoke')
  }, 1000)
}, 1000)

console.log('global end')

// global begin
// global end
// timer2 invoke
// timer1 invoke
// inner invoke
```

> 所谓的同步异步是指，运行环境提供的 API 是以同步的方式还是异步的方式工作

### 调用栈(Call Stack)、消息队列(Task Queue)、事件循环（Event Loop）

JS 引擎(chrome 浏览器中和 node.js 中使用的 V8 引擎)中主要由两个部分组成，**内存堆（Memory Heap）**和**调用栈（Call Stack）**。（只负责取消息，不负责生产消息）

- **内存堆（Memory Heap）**: 进行内存分配。如变量赋值。
- **调用栈（Call Stack）**: 这是代码在**栈帧**中执行的地方。调用栈中顺序执行主线程的代码，当调用栈中为空时，js 引擎会去**消息队列**取消息。取到后就执行。JavaScript 是单线程的编程语言，意味着它有一个单一的调用栈。因此它只能在同一时间做一件事情。调用栈是一种数据结构，它基本上记录了我们在程序中的什么位置。如果我们步入一个函数中，我们会把这些数据放在堆栈的顶部。如果我们从一个函数中返回，这些数据将会从栈顶弹出。这就是堆栈的用途。调用栈中的每个条目叫做**栈帧**。当我们在 chrome 调试窗口中看到抛出的错误时，就能够看到大致的调用顺序。

![](/syntax&API/stack-error.webp)

**事件循环机制**：

- JS 引擎线程会维护一个**调用栈**，同步代码会依次加入到**调用栈**中依次执行并出栈。
- JS 引擎线程遇到异步函数（网络请求、计时器、DOM 事件监听等），会将异步函数交给相应的 Webapi，而继续执行后面的任务。
- Webapi 会在条件满足的时候，将异步对应的回调加入到**消息队列**中，等待执行。
- **调用栈**为空时，JS 引擎线程会去取**消息队列**中的回调函数（如果有的话），并加入到**调用栈**中执行。
- 完成后出栈，**调用栈**再次为空，重复上面的操作，这就是**事件循环(event loop)**

两张图来展示这个过程：
![](/syntax&API/event-loop.png)

上图中的 stack 表示我们所说的执行栈，web apis 则是代表一些异步事件，而 callback queue 即事件队列。

![](/syntax&API/async1.png)

## 回调函数

回调函数是所有异步编程方案的根基，但是直接使用传统回调的方式去完成复杂的异步流程，无法避免大量的回调函数嵌套，造成地狱回调问题

```js
$.get("/url1", function(data1) {
  $.get("/url2", data1, function(data2) {
    $.get("/url3", data2, function(data3) {
      $.get("/url4", data3, function(data4) {
        $.get("/url5", data4, function(data5) {
          $.get("/url6", data5, function(data6) {
            $.get("/url7", data6, function(data7) {
              // 略微夸张了一点点
            });
          });
        });
      });
    });
  });
});
```

## Promise 异步方案

Promise 是由 CommonJS 社区提出的一种更优的异步编程统一方案,比传统的解决方案——回调函数和事件——更合理和更强大。

所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise 对象代表一个异步操作，有三种状态：`pending（进行中`）、`fulfilled（已成功）`和 `rejected（已失败）`。

一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`。

![](/syntax&API/promise1.png)

### 基本用法

```js
const promise = new Promise(function(resolve, reject) {
  // 这里用于“兑现”承诺

  // resolve(100) // 承诺达成

  reject(new Error("promise rejected")); // 承诺失败
});

promise.then(
  function(value) {
    // 即便没有异步操作，then 方法中传入的回调仍然会被放入队列，等待下一轮执行
    console.log("resolved", value);
  },
  function(error) {
    console.log("rejected", error);
  }
);

console.log("end");
```

定义了一个函数 sleep，它的作用是等候传入参数指定的时长。

```js
function sleep(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, duration);
  });
}
sleep(1000).then(() => console.log("finished"));
```

使用 Promise 封装 ajax

```js
function ajax(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    xhr.send();
  });
}

ajax("/api/foo.json").then(
  function(res) {
    console.log(res);
  },
  function(error) {
    console.log(error);
  }
);
```

### 链式调用

相比于传统回调函数的方式，promise 的最大优势是链式调用，这样可以最大程度的避免回调嵌套。

`promise.then`方法返回一个新的 promise 的对象。每一个 then 方法实际上都是为上一个 then 返回的 `promise` 对象添加状态明确过后的回调,可以尽量保证代码的扁平化。

```js
ajax("/api/users.json")
  .then(function(value) {
    console.log(1111);
    return ajax("/api/urls.json");
  }) // => Promise
  .then(function(value) {
    console.log(2222);
    console.log(value);
    return ajax("/api/urls.json");
  }) // => Promise
  .then(function(value) {
    console.log(3333);
    return ajax("/api/urls.json");
  });
```

- 前面 then 方法中回调函数的返回值会作为后面 then 方法回调的参数
- 如果回调中返回的事 Promise，那后面 then 方法的回调会等待它的结束

```
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
// 结果为1， 原因为第二个和第三个then方法没有return返回值，所以传递给链条末端的参数是1
```

### 异常处理

promise 的异常处理有两种方法

```js
// 同时注册的 onRejected 只是给当前 Promise 对象注册的失败回调
// 它只能捕获到当前 Promise 对象的异常
ajax("/api/users.json").then(
  function onFulfilled(value) {
    console.log("onFulfilled", value);
    return ajax("/error-url");
  },
  function onRejected(error) {
    console.log("onRejected", error);
  }
);

// 因为 Promise 链条上的任何一个异常都会被一直向后传递，直至被捕获
// 分开注册的 onRejected 相当于给整个 Promise 链条注册失败回调
ajax("/api/users.json")
  .then(function onFulfilled(value) {
    console.log("onFulfilled", value);
    return ajax("/error-url");
  }) // => Promise {}
  .catch(function onRejected(error) {
    console.log("onRejected", error);
  });
```

对于链式调用，建议使用第二种`catch`方案。promise 链条上的任何一个异常都会被一直向后传递，直至被捕获，更像给 promise 链条添加的失败回调，相对来讲更通用一些。

### 静态方法

- **Promise.resolve()** 快速把一个值转化为 Promise 对象
  - 如果 Promise.resolve() 包裹的是一个 Promise 对象则原样返回
  - 通常而言，如果您不知道一个值是否是 Promise 对象，使用 Promise.resolve(value) 来返回一个 Promise 对象,这样就能将该 value 以 Promise 对象形式使用。
- **Promise.reject()** 快速创建一个一定失败的 Promise 对象, 将失败信息传递给处理方法
- **Promise.all()** 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。所有 promise 方法成功后才执行回调函数。

```js
ajax("/api/users.json");
ajax("/api/posts.json");

var promise = Promise.all([ajax("/api/users.json"), ajax("/api/posts.json")]);

promise
  .then(function(values) {
    console.log(values);
  })
  .catch(function(error) {
    console.log(error);
  });
```

[更多关于 Promise.all 使用]()

- **Promise.race()** 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。其中一个 promise 方法状态改变，则整个返回的 promise 状态跟着改变

```js
// Promise.race 实现超时控制

const request = ajax("/api/posts.json");
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("timeout")), 500);
});

Promise.race([request, timeout])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
```

[更多关于 Promise.race 使用](<Promise.race()有哪些具体应用.html>)

## 宏任务和微任务

**宏任务**可以理解为每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。
浏览器为了让 JS 内部宏任务 与 DOM 操作能够有序的执行，会在一个宏任务执行结束后，在下一个宏任务执行开始前，对页面进行重新渲染。

宏任务包含：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、MessageChannel 等

**微任务**可以理解是在当前任务执行结束后需要立即执行的任务。也就是说，在当前任务后，在渲染之前，执行清空微任务。所以它的响应速度相比宏任务会更快，因为无需等待 UI 渲染。

微任务包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)等

在一个事件循环中，异步事件返回结果后会被放到一个任务队列中。然而，根据这个异步事件的类型，这个事件实际上会被对应的宏任务队列或者微任务队列中去。并且在当前执行栈为空的时候，主线程会 查看微任务队列是否有事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。

我们只需记住当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。

下面我们来研究一些 Promise 函数中的执行顺序，我们来看一段代码示例：

```js
var r = new Promise(function(resolve, reject) {
  console.log("a");
  resolve();
});
r.then(() => console.log("c"));
console.log("b");
```

我们执行这段代码后，注意输出的顺序是 a b c。在进入 console.log(“b”) 之前，毫无疑问 r 已经得到了 resolve，但是 Promise 的 resolve 始终是异步操作，所以 c 无法出现在 b 之前。

接下来我们试试跟 setTimeout 混用的 Promise。

在这段代码中，我设置了两段互不相干的异步操作：通过 setTimeout 执行 console.log(“d”)，通过 Promise 执行 console.log(“c”)。

```js
   var r = new Promise(function(resolve, reject) {
     console.log("a");
     resolve()
  })
  setTimeout(()=>console.log("d"), 0)；
  r.then(() => console.log("c"));
  console.log("b");
```

我们发现，不论代码顺序如何，d 必定发生在 c 之后，**因为 Promise 产生的是 JavaScript 引擎内部的微任务，而 setTimeout 是浏览器 API，它产生宏任务。**

为了理解微任务始终先于宏任务，我们设计一个实验：执行一个耗时 1 秒的 Promise。

```js
setTimeout(() => console.log(d), 0);
var r = new Promise(function(resolve, reject) {
  resolve();
});
r.then(() => {
  var begin = Date.now();
  while (Data.now() - begin < 1000);
  console.log("c1");
  new Promise(
    function(resolve, reject) {
      resolve();
    }.then(() => console.log("c2"))
  );
});
```

这里我们强制了 1 秒的执行耗时，这样，我们可以确保任务 c2 是在 d 之后被添加到任务队列。我们可以看到，即使耗时一秒的 c1 执行完毕，再执行 的 c2，仍然先于 d 执行了，这很好地解释了微任务优先的原理。

通过一系列的实验，我们可以总结一下如何分析异步执行的顺序：

- 首先我们分析有多少个宏任务；
- 在每个宏任务中，分析有多少个微任务；
- 根据调用次序，确定宏任务中的微任务执行次序
- 根据宏任务的触发规则和调用次序，确定宏任务的执行次序；
- 确定整个顺序；

我们再来看一个稍微复杂的例子：

```js
  function sleep(duration) {
     retrun new Promise(fucntion(resolve, reject)) {
        console.log("b");
        setTimeout(resolve, duration);
     }
  }
  console.log("a");
  sleep(5000).then(() => console.log("c"));
```

这是一段非常常用的封装方法，利用 Promise 把 setTimeout 封装成可以用于异步的函数。

我们首先来看，setTimeout 把整个代码分割成了 2 个宏观任务，这里不论是 5 秒还是 0 秒，都是一样的。

第一个宏观任务中，包含了先后同步执行的 console.log(“a”); 和 console.log(“b”);。
setTimeout 后，第二个宏观任务执行调用了 resolve，然后 then 中的代码异步得到执行，所以调用了 console.log(“c”)，最终输出的顺序才是： a b c。

![](/syntax&API/macro&micro.jpg)

- 常见宏任务包括：setTimeout，setInterval，requestAnimationFrame
- 常见微任务包括：Promise.then .catch .finally，process.nextTick，MutationObserver

更多关于宏任务微任务参考 [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

## Generator 异步方案

Generator 可以将异步调用写成同步代码的体验。

```js
function* main() {
  try {
    const users = yield ajax("/api/users.json");
    console.log(users);

    const posts = yield ajax("/api/posts.json");
    console.log(posts);

    const urls = yield ajax("/api/urls11.json");
    console.log(urls);
  } catch (e) {
    console.log(e);
  }
}

function co(generator) {
  const g = generator();

  function handleResult(result) {
    if (result.done) return; // 生成器函数结束
    result.value.then(
      (data) => {
        handleResult(g.next(data));
      },
      (error) => {
        g.throw(error);
      }
    );
  }

  handleResult(g.next());
}

co(main);
```

## Async/Await

async/await 是 Generator 更高级的语法糖， async/await 是 ES2016 新加入的特性，它提供了用 for、if 等代码结构来编写异步的方式。他的运行时基础是 Promise，面对这种比较新的特性，我们先来看一下基本用法。

async 函数必定返回 Promise，我们把所有返回 Promise 的函数都可以认为是异步函数。

async 函数是一种特殊语法，特征实在 function 关键字之前加上 async 关键字，这样就定义了一个 async 函数，我们可以再其中使用 await 来等待一个 Promise。

```js
function sleep(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, duration);
  });
}
async function foo() {
  console.log("a");
  await sleep(2000);
  console.log("b");
}
```

这段代码利用了我们之前定义的 sleep 函数。在异步函数 foo 中，我们调用 sleep。async 函数强大之处在于，它是可以嵌套的。我们在定义了一批原子操作的情况下，可以利用 async 函数组合出新的 async 函数。

```js
function sleep(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, duration);
  });
}
async function foo(name) {
  await sleep(2000);
  console.log(name);
}
async function foo2() {
  await foo("a");
  await foo("b");
}
```

这里 foo2 用 await 调用了两次异步函数 foo，可以看到，如果我们把 sleep 这样的异步操作放入某一个框架或者库中，使用者几乎不需要了解 Promise 的概念即可进行异步编程了。

### 实例

我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色，你会怎样编写这个代码呢？

```js
   function sleep(duration) {
       return new Promise(function(resolve){
          setTimeout(resolve， duration)；
       })
   }
   async function changeColor(duration, color) {
      document.getElementById("traffic-light").style.background = color;
      await sleep(duration);
   }
   async function main() {
      while(true) {
          await changeColor(3000, "green");
          await changeColor(1000, "yellow");
          await changeColor(2000, "red");
      }
   }
   main();
```
