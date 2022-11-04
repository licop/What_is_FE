# 关于 React 和不可变数据

## 什么是不可变数据

**不可变数据(Immutable Data)在创建以后，就不可以再被改变。** 这种数据在编程和调试时更容易预测，有利于降低复杂性。同时在 Web 领域，类似监听数据变化这样的功能非常有用，但运行起来可能会比较重，而不可变数据可以简化实现，降低成本。

JS 里有没有不可变数据？有。所有原始数据类型（Primitive Types）都是不可变数据类型，包括：undefined、null、boolean、number、BigInt、string、Symbol。但对引用类型，如 Object、Function、Array、Map、Set、Date 等，就不是不可变类型了。

object 一般是可变数据，原因是 javascript 的对象使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象，例如

```js
const student1 = {
  school: "Baidu",
  name: "licop",
  age: "27",
};

const changeStudent = (student, newName, newAge) => {
  const newStudent = student;
  newStudent.name = newName;
  newStudent.age = newAge;
  return newStudent;
};

const student2 = changeStudent(student1, "licop2", "28");

console.log(student1, student2);
// Object {school: "Baidu", name: "licop2", age: "28"}
// Object {school: "Baidu", name: "licop2", age: "28"}
```

尽管创建了一个新的对象 student2，但是老的对象 student1 也被改动了。这是因为 JS 对象中的赋值是“引用赋值”，即在赋值过程中，传递的是在内存中的引用(memory reference)。具体说就是“栈存储”和“堆存储”的问题。

我们可以使用 ES6 中**解构(destructuring)赋值**， 达到我们想要的效果，根据参数，产生一个新对象，并正确赋值，最重要的就是并没有改变原对象。

```js
const student1 = {
  school: "Baidu",
  name: "licop",
  age: "27",
};

const changeStudent = (student, newName, newAge) => {
  return {
    ...student, //使用解构
    name: newName, // 覆盖name属性
    age: newAge, // 覆盖age属性
  };
};

const student2 = changeStudent(student1, "licop2", "28");

console.log(student1, student2);
// Object {school: "Baidu", name: "licop2", age: "28"}
// Object {school: "Baidu", name: "licop2", age: "28"}
```

## React 为什么需要不可变数据

这主要还是因为 React 是声明式的框架，为了更新用户看到的页面，我们需要让开发出来的 React 组件响应数据流的变化。这就是说无论开发者，还是 React 框架本身都关注 props、state、context 的数据是否有变化。**对 React 框架，不可变数据可以简化比对数据的实现，降低成本；对开发者，不可变数据在开发和调试过程中更容易被预测。**

接下来看一下 React 在哪些环节会检查数据的变化。

### 协调过程中的数据对比

首先是最核心的 Fiber 协调引擎，常提到的 Diffing 对比算法就在引擎里，这些对比绝大部分都是在渲染阶段发生的。

React 是用 `Object.is()` 方法来判断两个值是否相等的。在以下过程中，React 会调用 `is(oldValue, newValue)` 来对比新旧值：

- 更新 state 时，只有新旧 state 值不相等，才把 Fiber 标记为收到更新；
- 更新 Context.Provider 中的 value 值；
- 检查 useEffect、useMemo、useCallback 的依赖值数组，只有每个值的新老值都检查过，其中有不同时，才执行它们的回调；
- useSyncExternalStore 中检查来自外部的应用状态（比如 Redux）是否有变化，才把 Fiber 标记为收到更新。

还有一种情况是对新旧两个对象做**浅对比（Shallow Compare）**，具体实现方式依然是基于 Object.is()。当两个对象属性数量相同，且其中一个对象的每个属性都与另一个对象的同名属性相等时，这两个对象才算相等。在下面的过程中，React 会调用 shallowEqual(oldObj, newObj) 来对比新旧对象（主要是 props）：

- React.memo 进入更新阶段，如果属性均相同，则跳过该组件继续执行下一个工作；
- PureComponent 进入更新阶段，如果属性均相同，则跳过该组件继续执行下一个工作。

### 合成事件中的数据对比

除了协调引擎，还有一处数据对比发生在合成事件中：在触发 onSelect 合成事件前，React 用浅对比判断选中项是否真的有变化，真有变化才会触发事件，否则不会触发。

### React.Memo

[React.Memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)为高阶组件。

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});

const MyComponent = React.memo(MyComponent, compare); // 自定义对比函数
```

如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 `React.memo` 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

React.memo 仅检查 props 变更。如果函数组件被 `React.memo` 包裹，且其实现中拥有 useState，useReducer 或 useContext 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染。

当你不满足于浅对比时，你还可以给这个 API 传入第二个可选参数，一个 compare 函数，compare 函数被调用时会接受 oldProps 和 newProps 两个参数，如果返回 true，则视为相等，反之则视为不等。

### 不可变数据的实现

刚才提到 JS 中的引用类型并不是不可变的。那如果想用它们，该怎么为它们加入不可变特性呢？

### 手工实现

要领就是**别. 改. 原. 对. 象**。

```js
// 数组
// 我们可以使用：.map, .filter或者.reduce去达成目标。这些APIs的共同特点就是不会改变原数组，而是产生并返回一个新数组
const itemAdded = [...oldArray, newItem];
const itemRemoved = oldArray.filter((item) => item !== newItem);

// 对象
const newObj = { ...oldObj, b: "newValue" };
const newObj = Object.assign({}, oldObj, { b: "newValue" });
```

一些经典 APIs 都是 shallow 处理，比如上文提到的 `Object.assign` 就是典型的浅拷贝。如果遇到嵌套很深的结构，我们就需要手动递归。这样做呢，又会存在性能上的问题。

所以有时候我们要借助一些不可变数据的类库来帮助我们处理。

### 可持久化数据结构和 Immutable.js

在计算机编程中，**可持久化数据结构（Persistent data structure）**是一种能够在修改之后其保留历史版本（即可以在保留原来数据的基础上进行修改——比如增添、删除、赋值）的数据结构。这种数据结构实际上是不可变对象，因为相关操作不会直接修改被保存的数据，而是会在原版本上产生一个新分支。

在 JS 中，可持久化数据结构的代表性实现，就是 FB 开源的[immutable.js](https://immutable-js.com/)。这个库提供了 List、Stack、Map、OrderedMap、Set、OrderedSet 和 Record 这些不可变数据类型。用这些类型 API 创建的数据，就是基于可持久化数据结构的不可变数据，可以直接用在 React 中。

这里贴两段官方样例代码。首先是神似 JS Array 的 List，你可以看到对 List 对象每个操作都会创建新的 List：

```js
const { List } = require("immutable");
const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
assert.equal(list1.size, 2);
assert.equal(list2.size, 5);
assert.equal(list3.size, 6);
assert.equal(list4.size, 13);
assert.equal(list4.get(0), 1);
```

还有这个库的强项嵌套结构，在对象树深处的更新也会返回新的不可变对象：

```js
const { fromJS } = require("immutable");
const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

console.log(nested2.getIn(["a", "b", "d"])); // 6

const nested3 = nested2.updateIn(["a", "b", "d"], (value) => value + 1);
console.log(nested3);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

const nested4 = nested3.updateIn(["a", "b", "c"], (list) => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }
```

`Immutable.js` 很强大，在 React 技术社区也受到过追捧。然而，不知道你平时是怎么使用的，我反正在 React 项目中使用这个框架时，总是要时刻提醒自己，什么时候可以使用 JS 原生的数据类型，什么时候就必须切换到不可变数据类型，这增加了我在开发过程中的认知负荷。

> 在认知心理学中，认知负荷（Cognitive Load）是指工作记忆资源的使用量。

这虽然会提高程序运行效率，但同时也会降低开发者的开发效率。那么有没有一种方式，既可以沿用熟悉的 JS 数据类型和方法，又可以优雅地加入不可变性？有的，[Immer](https://immerjs.github.io/immer/zh-CN/)就是这样一款框架，它可以让 JS 开发者使用原生的 JS 数据结构，和本来不具有不可变性的 JS API，创建和操作不可变数据。

以下是来自 `Immer` 官网的一段样例代码，它的 produce API 接受原数据和数据变更回调函数两个参数，在回调函数中发生的变更，并不会修改原数据本身，而是会返回一个等同于变更结果的新数据：

```js
import produce from "immer";

const nextState = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ title: "Tweet about it" });
});
```

### 在 React 中使用

`Immer`在函数组件中，可以直接使用 `Immer` 提供的 Hooks 来替代 useState。

安装 Immer

```js
npm install immer use-immer
```

在组件中使用 Immer：

```js
import React from "react";
import { useImmer } from "use-immer";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [todoList, setTodoList] = useImmer([
    { title: '开发任务-1', status: '22-05-22 18:15' },
    { title: '开发任务-3', status: '22-05-22 18:15' },
    { title: '开发任务-5', status: '22-05-22 18:15' },
    { title: '测试任务-3', status: '22-05-22 18:15' }
  ]);
  // ...
  const handleSubmit = (title) => {
    setTodoList(draft => {
      draft.unshift({ title, status: new Date().toDateString() });
    });
  };
  // ...
```

## 更多参考

- [谈一谈前端“不可变数据”和函数式编程](https://juejin.cn/post/6844903470718255118)
