## 什么是 Hook

- React 16.8 带来的全新特性，使得函数式组件代替 class 组件的写法
- hook 是一种特殊的函数，它可以让你“钩入” React 的特性，例如它可以帮助我们在函数中使用 state
- 没有破坏性改动
  - 完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook
  - 100% 向后兼容的。 Hook 不包含任何破坏性改动。
  - 没有计划从 React 移除 class

## 为什么需要 Hook

- class 组件很难复用状态逻辑
- 复杂组件变得难以理解，尤其是声明周期函数
  - Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分
  - 不用分别处理 class 组件声明周期挂载和更新
- 难以理解的 class

  - Hook 使你在非 class 的情况下可以使用更多的 React 特性

## 使用 State Hook

```js
 1:  import React, { useState } from 'react';
 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:    return (
 7:      <div>
 8:        <p>You clicked {count} times</p>
 9:        <button onClick={() => setCount(count + 1)}>
10:         Click me
11:        </button>
12:      </div>
13:    );
14:  }
```

- 第一行: 引入 React 中的 `useState` Hook。它让我们在函数组件中存储内部 state。

- 第四行: 在 Example 组件内部，我们通过调用 `useState` Hook 声明了一个新的 state 变量。它返回一对值给到我们命名的变量上。我们把变量命名为 count，因为它存储的是点击次数。我们通过传 0 作为 `useState` 唯一的参数来将其初始化为 0。第二个返回的值本身就是一个函数。它让我们可以更新 count 的值，所以我们叫它 setCount。

- 第九行: 当用户点击按钮后，我们传递一个新的值给 setCount。React 会重新渲染 Example 组件，并把最新的 count 传给它。

> demo 参考 react-hook-demo 中的 LikeButton 组件

## 使用 Effect Hook

### 无需清除的 effect

> demo 参考 react-hook-demo 中的 LikeButton 组件

在 **React 更新 DOM 之后运行一些额外的代码**。比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。因为我们在执行完这些操作之后，就可以忽略他们了

_useEffect_ 会在每次渲染后都执行，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

### 需要清除的 effect

> demo 参考 react-hook-demo 中的 MouseTracker 组件

- 在 effect 中返回一个函数， 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
- React 何时清除 effect？ React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么**React 会在执行当前 effect 之前对上一个 effect 进行清除**。

同时每次更新的时候都要运行 Effect，也解决了忘记正确地处理 _componentDidUpdate_ React 应用中常见的 bug 来源。

### useEffect 的参数

`useEffect()`接受两个参数，一个参数为 effect 函数，第二个参数为一个只读的数组，我们在数组中存入 state 的值，只用在数组中的 state 发生变化时，effect 才会执行。当第二参数参数为空数组是，只用挂载和卸载的时候才会执行，相当于 _componentDidMount_ 和*componentWillUnmount*

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
// 等同于
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新

```

## Hook 规则

### 只在最顶层使用 Hook

不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。

### 只在 React 函数中调用 Hook

不要在普通的 JavaScript 函数中调用 Hook。你可以：

- ✅ 在 React 的函数组件中调用 Hook
- ✅ 在自定义 Hook 中调用其他 Hook

## 自定义 Hook

> demo 参考 react-hook-demo 中的 hooks 文件夹

- 自定义 hook 将组建逻辑提取到可重用的函数中
- **自定义 Hook 必须以 “use” 开头**： 这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则。
- **在两个组件中使用相同的 Hook 不会共享 state**： 自定义 Hook 是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。
- 自定义 hook 可以原实现 class 组件高阶组件 HOC 的功能，比 HOC 更加易读和编写

> HOC(higher order component) 高阶组件就是一个函数，接受一个组件作为参数，返回一个新的组件

## useContext

> demo 参考 react-hook-demo 中的`ThemeContext`

```js
const value = useContext(MyContext);
```

接收一个 `context`对象（`React.createContext` 的返回值）并返回该 `context`的当前值。当前的 `context` 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 value prop 决定。

## useRef

> demo 参考 react-hook-demo 中的 LikeButton 组件

```js
const refContainer = useRef(initialValue);
```

`useRef` 返回一个可变的 ref 对象，其`.current` 属性被初始化为传入的参数`（initialValue）`。返回的 ref 对象在组件的整个生命周期内保持不变。

ref 也是一种访问 DOM 的主要方式。如果你将 ref 对象以`<div ref={myRef} />`形式传入组件，则无论该节点如何改变，React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。
