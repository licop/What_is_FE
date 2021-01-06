# JavaSript 性能优化

## Javacript 内存管理

- **内存**: 有可读写的单元组成，表示一片可操作的空间
- **内存管理**： 开发者主动申请空间，使用空间，释放空间

```
  // 申请
  let obj = {}
  // 使用
  obj.name = 'lg'
  // 释放
  obj = null
```

## Javacript 垃圾回收

JavaScript 中**内存管理**是自动的，而且是不可见的。我们创建基本类型、对象、函数……所有这些都需要内存。

### 什么时候产生垃圾

- 对象不在被引用时
- 对象不能从跟上访问到

### 可达对象

- 可以被访问到的对象就是**可达对象**（引用，作用域链）
- 可达的标准就是从**跟**上出发是否能够被找到
- JavaScript 中的**根**就可以理解为是**全局变量对象**

```
function objGroup(obj1, obj2) {
    obj1.next = obj2
    obj2.prev = obj1

    return {
        o1: obj1,
        o2: obj2
    }
}

let obj = objGroup({name: 'obj1'}, {name: 'obj2'})
console.log(obj)
```

使用图示对上面代码进行说明，obj1 和 obj2 进行相互的引用，目前所有对象都是可达对象。

![](/running-monitoring/可达对象1.png)

当把 obj 下的 o1 和 o2 的 prev 删除掉，此时我们无法访问到 obj1,这时可以 obj1 可以被认为是**垃圾**

![](/running-monitoring/可达对象2.png)

JavaScript 引擎中有一个后台进程称为垃圾回收器，它监视所有对象，并删除那些不可访问的对象。

## GC 算法

GC 就是**垃圾回收机制**的简写，GC 可以找到内存中的垃圾、并释放和回收空间

**GC 里的垃圾是什么？**

- 程序中不再需要使用的对象
- 程序中不能在访问的对象

**什么是 GC 算法？**

- GC 是一种机制，垃圾回收完成具体的工作
- 工作内容就是查找垃圾释放空间、回收空间
- 算法就是工作是查找和回收所遵循的原则

### 引用计数

这是最初级的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。

**核心思想**

设置引用数， 判断当前引用数是否为 0

**示例**

```
var o = {
  a: {
    b:2
  }
};
// 两个对象被创建，一个作为另一个的属性被引用，另一个被分配给变量o
// 很显然，没有一个可以被垃圾收集


var o2 = o; // o2变量是第二个对“这个对象”的引用

o = 1;      // 现在，“这个对象”只有一个o2变量的引用了，“这个对象”的原始引用o已经没有

var oa = o2.a; // 引用“这个对象”的a属性
               // 现在，“这个对象”有两个引用了，一个是o2，一个是oa

o2 = "yo"; // 虽然最初的对象现在已经是零引用了，可以被垃圾回收了
           // 但是它的属性a的对象还在被oa引用，所以还不能回收

oa = null; // a属性的那个对象现在也是零引用了
           // 它可以被垃圾回收了
```

**优点**

- 可以及时回收垃圾对象
- 减少程序卡顿

**缺点**

- 无法回收循环引用的对象
- 资源消耗比较大

### 标记清除

这个算法假定设置一个叫做**根（root）**的对象（在 Javascript 里，根是全局对象）。垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象。

如图所示，a1 和 b1 相互引用，但是无法从**跟**上访问到，为不可达对象，所以被当做垃圾处理。

![](/running-monitoring/标记清除.png)

**核心思想**

核心思想：分**标记**和**清除**两个阶段，第一阶段遍历所有对象找标记活动对象，遍历所有对象清除没有标记对象。

**优点**

- 可以回收循环引用的对象

**缺点**

- 容易产生碎片化空间，浪费空间
- 不会立即回收垃圾对象

### 标记整理

标记整理算法是**标记清除**的增强，会在清除阶段之前执行整理，移动对象位置。

**优点**

- 减少碎片化空间

**缺点**

- 不会立即回收垃圾对象

## V8 引擎

V8 引擎是一款主流的采用即时编译的 JavScript 执行引擎

### V8 内存设限

由于起初只是作为浏览器端 JavaScript 的执行环境，且 JavaScript 是单线程的，在浏览器端我们很少会遇到使用大量内存的场景，所以 V8 直接对内存进行了限制。64 位操作系统默认使用 1.4G，32 位操作系统默认使用 0.7G。

### V8 垃圾回收策略

V8 采用了一种分代回收的策略，将内存分为两个生代：新生代（new generation）和老生代（old generation）, 针对不同对象采用不同算法。

![](/running-monitoring/v8垃圾回收.png)

v8 内部内存被分为两个区域，左侧存储老生代对象，右侧存储老生代对象
![](/running-monitoring/v8内存分配.png)

### 新生代垃圾回收

**新生代**指的是存活时间较短的对象

回收过程采用复制算法和标记整理，新生代内存区分为两个等大小的空间 From（使用空间）和 To（空闲空间）

活动对象存储在 From 空间，当垃圾回收时使用标记整理后将活动对象拷贝至 To，然后 From 和 To 交换空间完成释放

新生代区域垃圾回收使用空间换时间。

拷贝的过程中可能存在**晋升**，**晋升**就是将新生代对象移动至老年代

**晋升条件**

- 一轮 GC 还存活的新生态对象需要晋升
- To 空间的使用率超过 25%

### 老生代垃圾回收

**老生代**指的是存活时间较长的对象，例如全局对象和闭包里的数据。

回收过程采用标记清除、标记整理、增量标记算法，首先使用**标记清除**完成垃圾空间的回收，然后在**晋升**阶段如果空间不足采用**标记整理**进行空间优化，采用**增量标记**进行效率的优化

**增量标记如何优化垃圾回收**

原本需要一次性遍历堆内存的操作改为增量标记的方式，先标记堆内存中的一部分对象，然后暂停，将执行权重新交给 JS 主线程，待主线程任务执行完毕后再从原来暂停标记的地方继续标记，直到标记完整个堆内存。这个理念其实有点像**React**框架中的**Fiber**架构，只有在浏览器的空闲时间才会去遍历**Fiber** Tree 执行对应的任务，否则延迟执行，尽可能少地影响主线程的任务，避免应用卡顿，提升应用性能。

![](/running-monitoring/增量标记.png)

## Performance 工具

使用 Chrome DevTools 的 **performance** 面板可以记录和分析页面在**运行时**的所有活动,通过 Performance 可以时刻监控内存。

可以参考[Chrome Devtool Performance 使用指南](https://zhuanlan.zhihu.com/p/29879682)

## 内存问题

### 外在表现

- 页面出现延迟加载或经常性暂停
- 页面持续性出现糟糕的性能
- 页面的性能随时间延长越来越差（内存泄露）

### 界定内存问题的标准

- **内存泄漏（memory leak）**: 不再用到的内存，没有及时释放，内存使用持续升高
  ![](/running-monitoring/内存泄露.png)
- **内存膨胀**: 在多数设备上都存在性能问题
- **频繁垃圾回收**: 通过内存变化图进行分析

### 监控内存的几种方式

- 浏览器的任务管理器
- Timeline 时序图记录
- 堆快照查找分离 DOM

### 任务管理器监控内存

可以通过判断内存是否增长来判断是否有问题，不能定位问题。

### Timeline 时序图记录

使用 Performance 工具，勾选内存选项，来分析内存的实时走向
![](/running-monitoring/timeline.png)

### 堆快照查找分离 DOM

**什么是分离 DOM**

**分离 DOM**从 DOM 树上分离，但是在 JS 代码中还有引用，在界面上看不见，在内存上占据空间。

以下代码 tmpEle 为**分离 DOM**

```
  var tmpEle;
  function fn() {
    var ul = document.createElement('ul');
    for(var i = 0; i < 10; i++) {
      var li = document.createElement('li');
      ul.appendChild(li)

      tmpEle = ul;
    }
  }
```

使用开发者工具 内存， 勾选堆快照
![](/running-monitoring/堆快照.png)

搜索 detached 查看是否有分离 dom
![](/running-monitoring/堆快照分离dom.png)

## JS 代码优化

### 慎用全局变量

**全局变量**定义在全局的执行上下文，是所有作用域链的顶端

**为什么要慎用？**

- 全局执行上下文一直存在于上下文执行栈，直到程序退出，不利于垃圾回收
- 如果某个局部作用域出现了同名变量则会遮蔽或污染全局

使用 [jsbench](https://jsbench.me/) 对代码的效率进行对比

![](/running-monitoring/jsbench1.png)

### 通过原型对象添加附加方法

![](/running-monitoring/jsbench2.png)

### 避开闭包陷阱

**闭包特点**

- 外部具有指向内部的引用
- 在外部作用域访问内部作用域的数据

```
  // 此时的a引用了内部的fn
  // a在调用时外部作用域访问了内部的a
  // 发生了闭包
  function foo() {
    let name = 'licop';

    return function fn() {
      console.log(name)
    }
  }

  var a = foo()
  a();
```

闭包是一个强大的语法，闭包使用不当很容易造成出现内存泄露，不要为了闭包而闭包。

### 避免属性访问方法使用

![](/running-monitoring/jsbench3.png)

### for 循环优化

**对数组的长度进行提前保存, 减少循环体中的活动**

```
  for(var i = 0; i < arr.length; i++) {
    console.log(i)
  }

  // 更优
  let let =  arr.length
  for(var i = 0; i < len; i++) {
    console.log(i)
  }
```

**对比遍历方式**

```
var arrList = new Array(1, 2, 3, 4, 5)

// 最快
arrList.forEach(function(item) {
  console.log(item)
})

// 相对较慢
for (var i = arrList.length; i; i--) {
  console.log(arrList[i])
}

// 很快
for (var i in arrList) {
  console.log(arrList[i])
}
```

### 优化节点操作

通过文档碎片优化节点添加

```
for (var i = 0; i < 10; i++) {
  var oP = document.createElement('p')
  oP.innerHTML = i
  document.body.appendChild(oP)
}

// 相对较快
const fragEle = document.createDocumentFragment()
for (var i = 0; i < 10; i++) {
  var oP = document.createElement('p')
  oP.innerHTML = i
  fragEle.appendChild(oP)
}

document.body.appendChild(fragEle)
```

通过克隆节点优化节点操作

```
for (var i = 0; i < 3; i++) {
  var oP = document.createElement('p')
  oP.innerHTML = i
  document.body.appendChild(oP)
}
// 相对较快
var oldP = document.getElementById('box1')
for (var i = 0; i < 3; i++) {
  var newP = oldP.cloneNode(false)
  newP.innerHTML = i
  document.body.appendChild(newP)
}
```

### 直接量替换 new object 构造式

```
// 较快
var a = [1, 2, 3]

// 较慢
var a1 = new Array(3)
a1[0] = 1
a1[1] = 2
a1[2] = 3
```

### 减少判断层级

尽量减少 if 语句的层级嵌套，可以使用提前 return 方法将嵌套减少掉

### 减少作用链查找层级

```
var name = 'licop';
function  foo() {
    name = 'licop1' // 这里的name属于全局的

    function baz() {
        let age = 18;
        console.log(name, age)
    }
    baz()
}
foo()

// 更优
var name = 'licop';
function  foo() {
    let name = 'licop1'

    function baz() {
        let age = 18;
        console.log(name, age)
    }
    baz()
}
foo()
```

### 减少数据读取次数

把频繁使用的值提前缓存变量，使用空间换时间

```
var oBox = document.getElementById('skip');
function hasEle(ele, cls) {
  return ele.className === cls
}
hasEle(oBox, 'skip')

// 更优
var oBox = document.getElementById('skip');
function hasEle(ele, cls) {
  var clsName = ele.className
  return clsName === cls
}
hasEle(oBox, 'skip')
```

### 减少声明及语句数

```
var test = (ele) = {
  let w = ele.offsetWidth;
  let h = ele.offsetHeight;
  return w * h;
}

// 更优
var test = (ele) = {
  return ele.offsetWidth * ele.offsetHeight;
}

```

### 惰性函数与性能

```
  function addEvent(obj, type, fn) {
    if(obj.addEventListener) {
      obj.addEventListener(type, fn, false)
    } else if() {
      obj.attachEvent('on' + type, fn)
    } else {
      obj['on' + type] = fn;
    }
  }
  // 更优
  function addEvent(obj, type, fn) {
    if(obj.addEventListener) {
      addEvent = obj.addEventListener(type, fn, false)
    } else if() {
      addEvent = obj.attachEvent('on' + type, fn)
    } else {
      addEvent = obj['on' + type] = fn;
    }
    return addEvent;
  }

  addEvent(btn, 'click', console.log(this))
```

### 采用事件绑定

## 更多参考

- [MDN 内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
- [chrome Performance 的使用](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance?hl=zh-cn)
- [Chrome Devtool Performance 使用指南](https://zhuanlan.zhihu.com/p/29879682)
