# ECMAScript 2015 语法

## ECMAScript 与 JavaScript 的关系

ECMAScript 通常被看作为 JavaScript 的标准化规范，实际上 JavsScript 是 ECMAScript 的扩展语言。ECMAScript 只提供了基本的语法，约定了我们代码该如何编写，例如该怎么定义变量和函数，或者是实现分支循环之类的语句。只是停留在语言层面，并不能完成实际的功能开发。

JavaScript 在继承了 ECMAScript 语法的基础之上，做了一些扩展，使得我们可以在浏览器环境当中操作 DOM 和 BOM。

JavaScript 语言本身指的就是 ECMAScript。

![](/syntax&API/es&js1.png)

![](/syntax&API/es&js2.png)

## ECMA 的发展过程

2015 年开始 ES 保持每年一个版本的迭代。

![](/syntax&API/es_version.png)

其中 ES2015 值得了解的内容有很多，是最新 ECMAScript 标准的代表版本， 相比上一个版本 ES5.1 变化比较大，自此标准命名规则发生了变化。ES2015 之后开始按照年份命名，很多人也把 ES2015 称之为 ES6，也有很多人用 ES6 泛指所有的新标准，例如`async`函数是 ES2017 制定的标准，也被称之为 ES6 语法，应该注意分辨资料中的 ES6 是特指还是泛指。

## ECMAScript 2015 新特性特点

- 解决原有语法上的一些问题或者不足
- 对原有语法进行增强
- 全新的对象，全新的方法，全新的功能

[ECMAScript 特性官方文档](https://www.ecma-international.org/ecma-262/6.0/)

下面我们将介绍一些 ECMAScript 2015 新特性

## let 与块级作用域

**作用域**: 某个成员能够起作用的范围

在 ES2015 之前，ES 只有两种作用域

- 全局作用域
- 函数作用域

ES2015 新增了**块级作用域**和`let`关键字。

**块**： 代码中用一对花括号{...}所包裹起来的范围，例如 if 语句和 for 语句， 以前块没有单独的作用域，到时块中定义的成员外部也可以访问到。

let 关键字可以将变量绑定到所在的任意作用域中（通常是{...}内部）。

```js
// let 声明的成员只会在所声明的块中生效
if (true) {
  // var foo = 'zce'
  let foo = "zce";
}
console.log(foo); // ReferenceError:
```

`let`可以解决`var`以前的很多奇怪的行为。

### let 在 for 循环中的表现

很多时候使用 var 关键字 for 循环中如果变量没有定义清楚，会造成一些意想不到的结果

比如下面例子在双循环的语句中，遍历的过程内外循环声明相同的变量 i，如果使用`var`内部循环的 i 被外部 for 循环作用域调用,导致外部循环提前结束。

```js
for (var i = 0; i < 3; i++) {
  for (var i = 0; i < 3; i++) {
    console.log(i)
  }
  console.log('内层结束 i = ' + i)
}
输出：0 1 2 内层结束 i = 3
```

内部循环使用`let`声明 i 则可以解决这个错误。

```js
for (var i = 0; i < 3; i++) {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log("内层结束 i = " + i);
}
```

### let 应用场景：循环绑定事件

来看下面这个例子。 我们在 for 循环的头部定义了变量 i，通常是因为只想的 for 循环内部的上下文中使用 i,而忽略了 i 会被绑定在外部作用域（函数或全局）中的事实。因为 i 是全局作用域中的, 所以打印的都是循环后累加的 3。

**for 循环会产生两层作用域**，(...)里是外部作用域或者全局作用域，{...}里则是块作用域。

```js
var elements = [{}, {}, {}];
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    console.log(i);
  };
}
elements[2].onclick(); // 3
```

当然我们可以使用**闭包**解决这个问题, 借助函数作用域来摆脱全局作用域产生的影响

```js
var elements = [{}, {}, {}];
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = (function(i) {
    return function() {
      console.log(i);
    };
  })(i);
}
elements[1].onclick();
```

使用 `let` 可以解决这个问题，让事件处理函数中获取正确索引。 `let` 不仅将 i 绑定到了 for 循环的块中，事实上它将其**重新绑定**到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值，内部也是可以**闭包**机制实现的。

```js
var elements = [{}, {}, {}];
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    console.log(i);
  };
}
elements[0].onclick();
```

### let 与变量声明提升现象

什么是**变量声明提升**？先看下面两个例子

```js
a = 2;
var a;
console.log(a);
```

```js
console.log(a);
var a = 2;
```

第一个例子输出的是 2，第二个例子输出的是`undefined`。是不是有点出乎意料呢？

这要从 JavaScript 的编译器开始讲起了，JS 编译阶段的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。**因此包含变量和函数在内的所有声明都会在任何代码被执行前首先被处理。**

当看到 var a = 2;时,可能会认为这是一个声明。但 JavaScript 实际上会将其看成两个声明： var a;和 a = 2;第一个定义声明在编译阶段进行的。第二个赋值声明会被留在原地等待执行任务。

因此以上两个代码会以如下形式处理

```js
var a;
a = 2;
console.log(a);
```

```js
var a;
console.log(a);
a = 2;
```

就好像变量和函数声明从它们在代码中出现的位置被“移动”到了最上面。这个过程叫做**声明提升**。其中函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量

再看一个例子

```js
foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
  // ...
};
```

foo() 由于对 undefined 值进行函数调用而导致非法操作，因此抛出 `TypeError` 异常(类型错误，在作用域中已经声明变量并且找到，但是没有找到确切定义或者引用)。
bar() 名称标识符在赋值之前也无法在所在作用域中使用

只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。如果提升改变了代码的执行的顺序，会造成非常严重的破坏。

`let` 则修复了变量声明提升现象,以上俩个例子使用`let`声明都会报`ReferenceError`(引用错误，即在作用域中没有找到该变量)，`let`默认如果没有声明前就引用变量，则会报引用错误。

### let 变量不能重复声明

```js
let a = 0;
let a = "sss";
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

## const

`const`用来声明一个只读的恒量/产量，任何修改值的操作都会引起错误， 其他使用方式和 let 一致。

`const`只是要求内层指向不允许被修改， 对于数据成员的修改是没有问题的。例如：

```js
const obj = {};
obj.name = "zce";
```

**最佳实践： 不用 var，主用 const，配合 let**

## 数组的解构

使用解构可以快速提取数组中的指定成员。

```js
const arr = [100, 200, 300];

// 不使用解构方法提取数组元素
const foo = arr[0];
const bar = arr[1];
const baz = arr[2];
console.log(foo, bar, baz);
// 使用解构
const [foo, bar, baz] = arr;
console.log(foo, bar, baz);
// 只提取单个元素
const [, , baz] = arr;
console.log(baz);

// 使用...，提取从当前位置往后的所有成员
// 结果会放在数组当中，输出[200, 300]
// ...只能在解构位置的最后成员使用
const [foo, ...rest] = arr;
console.log(rest);

// more 为 undefined
const [foo, bar, baz, more] = arr;
console.log(more);

// 给元素添加默认值
const [foo, bar, baz = 123, more = "default value"] = arr;
console.log(bar, more);

const path = "/foo/bar/baz";
// const tmp = path.split('/')
// const rootdir = tmp[1]

// 使用解构可以使我们的代码变得更加简单
const [, rootdir] = path.split("/");
console.log(rootdir);
```

使用...可以对数组进行张开, 可以替代 `apply` 方法

```js
const arr = ["foo", "bar", "baz"];

// 'foo', 'bar', 'baz'
// console.log.apply(console, arr)
console.log(...arr);
```

## 对象的解构

除了数组可以被解构，对象也可被解构。对象的解构需要根据**属性名**去匹配提取，而不是位置。因为数组中的元素有下标和顺序规则，而对象里的成员没有固定的次序。

```js
const obj = { name: "zce", age: 18 };

// 输出'zce'
const { name } = obj;
console.log(name);

// 重名名，防止变量命名冲突
const name = "tom";
const { name: objName } = obj;
console.log(objName);

// 提取log方法
const { log } = console;
log("foo");
log("bar");
log("123");
```

## 模板字符串

```js
// 反引号包裹
const str = `hello es2015, this is a string`;

// 允许换行
const str = `hello es2015,

this is a \`string\``;
console.log(str);

// 可以通过 ${} 插入表达式，表达式的执行结果将会输出到对应位置
const name = "tom";
const msg = `hey, ${name} --- ${1 + 2} ---- ${Math.random()}`;
console.log(msg);
```

此外我们还可以给模板字符串添加标签，模板字符串的标签就是一个特殊的函数，添加标签就是调用这个函数

看如下例子将`console.log`赋值给标签打印出一个数组

```js
// [ 'hello world' ]
const tag = console.log;
const str = tag`hello ${name}`;
```

一个复杂一点的例子，可以将变量提取出来使用，对模板字符串进行加工

```js
const name = 'tom'
const gender = false

function myTagFunc (strings, name, gender) {
  [ 'hey, ', ' is a ', '.' ] tom false
  console.log(strings, name, gender)

  const sex = gender ? 'man' : 'woman'
  return strings[0] + name + strings[1] + sex + strings[2]
}

const result = myTagFunc`hey, ${name} is a ${gender}.`
// hey, tom is a woman.
console.log(result)
```

可以使用这种功能实现多语言化，检查不安全字符之类的需求，甚至可以实现一个小型的模板引擎。

## 字符串的扩展方法

- includes() 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
- startsWith() 用来判断当前字符串是否是以另外一个给定的子字符串“开始”的，根据判断结果返回 true 或 false。
- endsWith() 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

```js
const message = "Error: foo is not defined.";

message.startsWith("Error");
message.endsWith(".");
message.includes("foo");
```

更多字符串扩展方法参考[MDN String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

## 函数的形参列表

可以给参数的默认值

```js
function foo(enable = true) {
  console.log("foo invoked - enable: ");
  console.log(enable);
}

foo();
```

剩余参数，只能出现在最后一位且使用一次

```js
// [ 2, 3, 4 ]
function foo(first, ...args) {
  console.log(args);
}

foo(1, 2, 3, 4);
```

## 箭头函数

**箭头函数**表达式的语法比函数表达式更简洁，并且没有自己的 `this`，`arguments`，`super` 或 `new.target`。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

基础语法

```js
// 普通形式
function test(a, b) {
  return a + b;
}

// 1.箭头函数: 省略 function   函数保存到 fn 变量中
const fn1 = (a, b) => {
  return a + b;
};

// 2.箭头函数: 省略 return , 表示a+b作为返回值 注意不能有 { }
const fn2 = (a, b) => a + b;

// 3.箭头函数: 省略 参数两边小括号, 只有一个形参时才可以
const fn3 = (x) => x + 7;

// 4.箭头函数 常用场景，简化回调函数的书写
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.filter((i) => i % 2);
```

箭头函数不会创建自己的 this,**它只会从自己的作用域链的上一层继承 this**

因此，在下面的代码中，传递给 setInterval 的函数内的 this 与封闭函数中的 this 值相同：

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
  }, 1000);
}

var p = new Person();
```

如果使用 function 函数表达式，this 指向 window 对象

```js
function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++; //  this 会指向 window 对象
  }, 1000);
}

var p = new Person();
```

```js
const person = {
  name: 'tom',
  // tom
  // sayHi: function () {
  //   console.log(${this.name})
  // }
  // undefined
  sayHi: () => {
    console.log(${this.name})
  },
  // 需要使用_this的情况，可以使用箭头函数来避免
  sayHiAsync: function () {
    // const _this = this
    // setTimeout(function () {
    //   console.log(_this.name)
    // }, 1000)

    // tom
    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}
person.sayHi()
person.sayHiAsync()
```

更多箭头函数参考[MDN 箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 对象字面量增强

```js
const bar = "345";

const obj = {
  foo: 123,

  // bar: bar
  // 属性名与变量名相同，可以省略 : bar
  bar,

  // method1: function () {
  //   console.log('method111')
  // }
  // 方法可以省略 : function
  method1() {
    console.log("method111");
    // 这种方法就是普通的函数，同样影响 this 指向。
    console.log(this);
  },

  // Math.random(): 123 // 不允许
  // 通过 [] 让表达式的结果作为属性名
  [bar]: 123,
};

// 动态添加属性名
obj[Math.random()] = 123;
```

## 对象扩展方法

- Object.assign

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

```js
const source1 = {
  a: 123,
  b: 123,
};

const source2 = {
  b: 789,
  d: 789,
};

const target = {
  a: 456,
  c: 456,
};
// 用后面对象的属性覆盖第一个对象，assign方法的返回值就是第一个对象
const result = Object.assign(target, source1, source2);
// { a: 123, c: 456, b: 789, d: 789 }
console.log(target);
// true
console.log(result === target);
```

常用应用场景， 将参数赋值给一个新的对象上面进行修改

```js
function func(obj) {
  // obj.name = 'func obj'
  // console.log(obj)

  const funcObj = Object.assign({}, obj);
  funcObj.name = "func obj";
  console.log(funcObj);
}

const obj = { name: "global obj" };

func(obj);
console.log(obj);
```

- Object.is

Object.is() 方法判断两个值是否为同一个值。

```js
0 == false; // => true
(0 ===
  false + // => false
    0) ===
  -0; // => true
NaN === NaN; // => false
Object.is(+0, -0); // => false
Object.is(NaN, NaN); // => true
```

更多 Object 参考[MDN Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Proxy

以前如果我们想监控某个对象的读写，我们可以使用 ES5 的[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)方法来为我们对象添加属性，这样我们就可以捕获对象的读写过程，vue3.0 就是使用这种方法实现双向数据绑定。

ES2015 中新添了 Proxy 类型，专门为对象添加**访问代理器**，可以理解为在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

来看下面这个例子，我们对 person 对象进行监控。

```js
const person = {
  name: "zce",
  age: 20,
};

const personProxy = new Proxy(person, {
  // 监视属性读取
  get(target, property) {
    // 给不存在的属性添加默认值
    return property in target ? target[property] : "default";
  },
  // 监视属性设置
  set(target, property, value) {
    // target参数表示所要拦截的目标对象
    // property为监视的属性，当属性有设置操作会被监视
    // value的值为更改的值
    console.log(target, property, value);
    // 监视age属性当不是int数字类型是报错
    if (property === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError(`${value} is not an int`);
      }
    }

    target[property] = value;
  },
});

personProxy.age = 100;
personProxy.gender = true;

console.log(personProxy.age); // 100
console.log(personProxy.xxx); // default
console.log(person); // { name: 'zce', age: 100, gender: true }
```

`Proxy` 和相比 `Object.defineProperty` 有很优势

- 优势 1：Proxy 可以监视读写以外的操作

```js
// 监视删除操作
const person = {
  name: "zce",
  age: 20,
};

const personProxy = new Proxy(person, {
  deleteProperty(target, property) {
    console.log("delete", property);
    delete target[property];
  },
});

delete personProxy.age;
console.log(person);
```

除此之外还有很多其他的对象操作都能被监视到

![](syntax&API/proxy.png)

- 优势 2：Proxy 可以很方便的监视数组操作

```js
const list = [];

const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log("set", property, value);
    target[property] = value;
    return true; // 表示设置成功
  },
});

listProxy.push(100);
listProxy.push(100);
```

- 优势 3：Proxy 是以非入侵的方式监管的对象的读写

```js
const person = {};

// 使用 Object.defineProperty
Object.defineProperty(person, "name", {
  get() {
    console.log("name 被访问");
    return person._name;
  },
  set(value) {
    console.log("name 被设置");
    person._name = value;
  },
});
Object.defineProperty(person, "age", {
  get() {
    console.log("age 被访问");
    return person._age;
  },
  set(value) {
    console.log("age 被设置");
    person._age = value;
  },
});

person.name = "jack";
console.log(person.name);

// Proxy 方式更为合理
const person2 = {
  name: "zce",
  age: 20,
};

const personProxy = new Proxy(person2, {
  get(target, property) {
    console.log("get", property);
    return target[property];
  },
  set(target, property, value) {
    console.log("set", property, value);
    target[property] = value;
  },
});

personProxy.name = "jack";
console.log(person.name);
```

更多关于[Proxy](https://es6.ruanyifeng.com/#docs/proxy)

## Reflect

**`Reflect`统一对象操作的 API**,`Reflect`属于一个静态类，不能使用`new Reflect()`构建一个静态对象，只能够调用静态类的静态方法。

`Reflect`内部封装了一系列对对象的底层操作，具体有 13 个静态方法，和`Proxy`处理对象的方法是一一对应的。

`Reflect`成员方法就是`Proxy`处理对象方法的默认实现。看下面代码

```js
const obj = {
  foo: "123",
  bar: "456",
};
// 默认get方法实现
const proxy = new Proxy(obj, {
  get(target, property) {
    console.log("watch logic~");

    return Reflect.get(target, property);
  },
});

console.log(proxy.foo); // '123'
```

`Reflect`提供了一套统一的对象操作的 API

```js
const obj = {
  name: "zce",
  age: 18,
};

console.log("name" in obj);
console.log(delete obj["age"]);
console.log(Object.keys(obj));

// 和上面的操作方式一致
console.log(Reflect.has(obj, "name"));
console.log(Reflect.deleteProperty(obj, "age"));
console.log(Reflect.ownKeys(obj));
```

## Promise

解决了传统异步编程中回调函数嵌套过深的问题， 具体参考 JavaScript 异步编程有更详细的介绍

## Class

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`hi, my name is ${this.name}`);
  }
}

const p = new Person("tom");
p.say();
```

`Class`里面的方法分为**实例方法**和**静态方法**

- **实例方法**通过构建的实例对象去调用
- **静态方法**直接通过类本身去调用

ES2015 中新增添加静态方法的**static**关键词

静态方法是挂载到类上面的， 静态方法内的`this`不会指向某个实例，而是当前的类。

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`hi, my name is ${this.name}`);
  }

  static create(name) {
    return new Person(name);
  }
}

const tom = Person.create("tom");
tom.say();
```

类的继承，在 ES2015 以前我们使用原型的方式实现继承，ES2015 中添加了专门用于类继承的关键字**extends**

```js
class Student extends Person {
  constructor(name, number) {
    super(name); // 父类构造函数
    this.number = number;
  }

  hello() {
    super.say(); // 调用父类成员
    console.log(`my school number is ${this.number}`);
  }
}

const s = new Student("jack", "100");
s.hello();
```

## Set

ES2015 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```js
const s = new Set();

s.add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(2);

console.log(s); // Set { 1, 2, 3, 4 }

// 遍历
s.forEach((i) => console.log(i));
for (let i of s) {
  console.log(i);
}

// 长度
console.log(s.size);
// 是否存在某元素
console.log(s.has(100)); // false
// 删除元素
console.log(s.delete(3)); // true
console.log(s); // Set { 1, 2, 4 }
// 清空
s.clear();
```

应用场景：**数组去重**

```js
const arr = [1, 2, 1, 3, 4, 1];

// const result = Array.from(new Set(arr))
const result = [...new Set(arr)];

console.log(result); //[ 1, 2, 3, 4 ]

// 使用内置构造函数的proptype，里面this就是调用这个函数的数组、字符串
Array.prototype.uniq = function() {
  return [...new Set(this)];
};
arr.uniq();
```

还存在弱引用版本 **WeakSet**, 差异就是 **Set** 中会对所使用到的数据产生引用,即便这个数据在外面被消耗，但是由于 **Set** 引用了这个数据，所以依然不会回收,而 **WeakSet** 的特点就是不会产生引用，一旦数据销毁，就可以被回收，所以不会产生**内存泄漏**问题。

## Map

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

```js
const obj = {};
obj[true] = "value";
obj[123] = "value";
obj[{ a: 1 }] = "value";
// 设置的boolean，对象，数字都被转化为字符串
console.log(Object.keys(obj)); // [ '123', 'true', '[object Object]' ]
console.log(obj["[object Object]"]); // value
```

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```js
const m = new Map();

const tom = { name: "tom" };

m.set(tom, 90);

console.log(m); // Map { { name: 'tom' } => 90 }
console.log(m.get(tom)); // 90
// 遍历
m.forEach((value, key) => {
  console.log(value, key);
});
// 是否存在某元素
m.has();
// 删除
m.delete();
// 清空
m.clear();
```

弱引用版本 `WeakMap`，差异就是 `Map` 中会对所使用到的数据产生引用，即便这个数据在外面被消耗，但是由于 `Map` 引用了这个数据，所以依然不会回收，而 `WeakMap` 的特点就是不会产生引用，一旦数据销毁，就可以被回收，所以不会产生**内存泄漏**问题。

## Symbol

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 `Symbol` 的原因。

ES6 引入了一种新的原始数据类型 `Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

`Symbol`类型的用法：

```js
// Symbol 值通过Symbol函数生成
const s = Symbol();
console.log(s); // Symbol()
console.log(typeof s); // symbol

// 两个 Symbol 永远不会相等
console.log(
  Symbol() === Symbol() // false
);

// Symbol 描述文本
console.log(Symbol("foo")); // Symbol(foo)

// 使用 Symbol 为对象添加用不重复的键
const obj = {};
obj[Symbol()] = "123";
obj[Symbol()] = "456";
console.log(obj); // { [Symbol()]: '123', [Symbol()]: '456' }

// 也可以在计算属性名中使用
const obj1 = {
  [Symbol()]: 123,
};
console.log(obj1);

// Symbol 全局注册表, 相同的字符串返回相同类型的值
const s1 = Symbol.for("foo");
const s2 = Symbol.for("foo");
console.log(s1 === s2); // true

console.log(
  Symbol.for(true) === Symbol.for("true") // true
);

// 内置 Symbol 常量
console.log(Symbol.iterator);
console.log(Symbol.hasInstance);
// toStringTag为内置Symbol 常量
const obj1 = {
  [Symbol.toStringTag]: "XObject",
};
console.log(obj1.toString()); // [object XObject]

const obj = {
  [Symbol()]: "symbol value",
  [Symbol()]: "symbol value1",
  foo: "normal value",
};
//
for (var key in obj) {
  console.log(key); // foo
}
console.log(Object.keys(obj)); // [ 'foo' ]
console.log(JSON.stringify(obj)); // {"foo":"normal value"}

// 类似于Object.key()方法，只能获取到Symbol类型属性名
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol() ]
```

`Symbol`的使用场景

```js
// 案例：Symbol 模拟实现私有成员
// a.js ======================================

const name = Symbol();
const person = {
  [name]: "licop",
  say() {
    console.log(this[name]); // licop
  },
};
// 只对外暴露 person

// b.js =======================================

// 由于无法创建出一样的 Symbol 值，
// 所以无法直接访问到 person 中的「私有」成员
console.log(person[Symbol()]); // undefined
person.say();
```

**Symbol 最主要的作用就是为对象添加独一无二的属性名**

## for...of 循环

ES2015 引入一种全新的遍历方式，**for...of 循环**，可以作为遍历所有数据结构的统一方式。

```js
// 遍历数组， 伪数组arguments和nodelist也可以遍历
const arr = [100, 200, 300, 400];

for (const item of arr) {
  console.log(item);
}

// for...of 循环可以替代 数组对象的 forEach 方法
arr.forEach((item) => {
  console.log(item);
});

// 遍历 Set 与遍历数组相同

const s = new Set(["foo", "bar"]);
for (const item of s) {
  console.log(item);
}

// 遍历 Map 可以配合数组结构语法，直接获取键值
const m = new Map();
m.set("foo", "123");
m.set("bar", "345");

for (const [key, value] of m) {
  console.log(key, value); // foo 123  bar 345
}

// 普通对象不能被直接 for...of 遍历
const obj = { foo: 123, bar: 456 };
// TypeError: obj is not iterable
for (const item of obj) {
  console.log(item);
}
```

## 可迭代接口

ES 中能够表示有结构的数据类型越来越多，为了给各种各样的数据结构提供统一的遍历方式， ES2015 提供了`Iterable`接口，实现 Iterable 接口就是`for...of`的前提，也就是说只要实现了`Iterable`接口的数据结构，就能被`for...of`遍历。

Array，Set 和 Map 都实现了`Iterable`接口

```js
// 获取数据结构迭代器（Iterator）
const set = new Set(["foo", "bar", "baz"]);
const iterator = set[Symbol.iterator]();

console.log(iterator.next()); // { value: 'foo', done: false }
console.log(iterator.next()); // { value: 'bar', done: false }
console.log(iterator.next()); // { value: 'baz', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }

while (true) {
  const current = iterator.next();
  console.log(current, 14);
  if (current.done) {
    break; // 迭代已经结束了，没必要继续了
  }
  console.log(current.value);
}
```

实现迭代器接口（Iterable）

```js
// 自定义对象实现迭代器接口（Iterable）

const obj = {
  store: ["foo", "bar", "baz"],

  [Symbol.iterator]: function() {
    let index = 0;
    const self = this;

    return {
      next: function() {
        const result = {
          value: self.store[index],
          done: index >= self.store.length,
        };
        index++;
        return result;
      },
    };
  },
};

for (const item of obj) {
  console.log("循环体", item);
}

// 循环体 foo
// 循环体 bar
// 循环体 baz
```

迭代器设计模式

```js
// 场景：你我协同开发一个任务清单应用

// 我的代码 ===============================

const todos = {
  life: ["吃饭", "睡觉", "打豆豆"],
  learn: ["语文", "数学", "外语"],
  work: ["喝茶"],

  // 提供统一遍历访问接口, 让外部不用关心内部的结构
  each: function(callback) {
    const all = [].concat(this.life, this.learn, this.work);
    for (const item of all) {
      callback(item);
    }
  },

  // 提供迭代器（ES2015 统一遍历访问接口）
  [Symbol.iterator]: function() {
    const all = [...this.life, ...this.learn, ...this.work];
    let index = 0;
    return {
      next: function() {
        return {
          value: all[index],
          done: index++ >= all.length,
        };
      },
    };
  },
};

todos.each(function(item) {
  console.log(item);
});

console.log("-------------------------------");

for (const item of todos) {
  console.log(item);
}

// 你的代码 ===============================

for (const item of todos.life) {
  console.log(item);
}
for (const item of todos.learn) {
  console.log(item);
}
for (const item of todos.work) {
  console.log(item);
}
```

## 生成器(Generator)

```js
function* foo1() {
  console.log("zce");
  return 100;
}

const result = foo1();
console.log(result.next()); // { value: 100, done: true }

function* foo2() {
  console.log("1111");
  yield 100;
  console.log("2222");
  yield 200;
  console.log("3333");
  yield 300;
}

const generator = foo2();

console.log(generator.next()); // 第一次调用，函数体开始执行，遇到第一个 yield 暂停  { value: 100, done: false }
console.log(generator.next()); // 第二次调用，从暂停位置继续，直到遇到下一个 yield 再次暂停 { value: 200, done: false }
console.log(generator.next()); // 。。。 { value: 300, done: false }
console.log(generator.next()); // 第四次调用，已经没有需要执行的内容了，所以直接得到 undefined { value: undefined, done: true }
```

**Generator**应用

```js
// 案例1：发号器
function* createIdMaker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idMaker = createIdMaker();

console.log(idMaker.next().value); // 1
console.log(idMaker.next().value); // 2
console.log(idMaker.next().value); // 3
console.log(idMaker.next().value); // 4
```

```js
// 案例2：使用 Generator 函数实现 iterator 方法

const todos = {
  life: ["吃饭", "睡觉", "打豆豆"],
  learn: ["语文", "数学", "外语"],
  work: ["喝茶"],
  [Symbol.iterator]: function*() {
    const all = [...this.life, ...this.learn, ...this.work];
    for (const item of all) {
      yield item;
    }
  },
};

for (const item of todos) {
  console.log(item);
}
```

## ES Modules

语言层面的模块化标准

## ES2016 新增特性

- Array.protoType.includes 查看数组中是否包含某元素

```js
const arr = ["foo", 1, NaN, false];

arr.includes("foo"); // ture
```

- 指数运算符

```js
console.log(2 ** 10); // 1024
```

## ES2017 新增特性

- Object.values
- Object.entries
- Object.getOwnPropertyDescriptors

```js
const obj = {
  foo: "value1",
  bar: "value2",
};

Object.values(obj); // ['value1', 'value2']
Object.entries(obj); // [['foo', 'value1'], ['bar', 'value2']]

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// Map{'foo' => 'value1', 'bar' => 'value2', }
console.log(new Map(Object.entries(obj)));

// Object.getOwnPropertyDescriptors
// 返回指定对象上一个自有属性对应的属性描述符
// 主要配合getter和setter使用
const p1 = {
  firstName: "chuang",
  lastName: "Li",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

const descriptors = Object.getOwnPropertyDescriptor(p1);
const p2 = Object.defineProperties({}, descriptors);
p2.firstName = "licop";
console.log(p2.fullName); // licop li
```

- String.prototype.padStart
- String.prototype.padEnd

方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串

```js
const books = {
  html: 5,
  css: 6,
  javascript: 128
}

for(const [name, count] of Object.entries(books)) {
  console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(3, '0')}`)
}

html------------|005
css-------------|006
javascript------|128
```

- 在函数参数的末尾添加逗号

```js
function foo(bar, baz) {}
```

- async/await
