## 关于react hook

### 什么是hook

-  React 16.8带来的全新特性，使得函数式组件代替class组件的写法
-  hook是一种特殊的函数，它可以让你“钩入” React 的特性，例如它可以帮助我们在函数中使用state
-  没有破坏性改动
    - 完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook
    - 100% 向后兼容的。 Hook 不包含任何破坏性改动。
    - 没有计划从React移除class

###  为什么需要hook

- class 组件很难复用状态逻辑
- 复杂组件变得难以理解，尤其是声明周期函数
   - Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分
   - 不用分别处理class组件声明周期挂载和更新
- 难以理解的 class
   - Hook 使你在非 class 的情况下可以使用更多的 React 特性
  
### 使用State Hook 

```
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

> demo参考 react-hook-demo 中的LikeButton组件

### 使用 Effect Hook

#### 无需清除的 effect

> demo参考 react-hook-demo 中的LikeButton组件


在 **React 更新 DOM 之后运行一些额外的代码**。比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。因为我们在执行完这些操作之后，就可以忽略他们了

*useEffect* 会在每次渲染后都执行，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。


#### 需要清除的 effect

> demo参考 react-hook-demo 中的MouseTracker组件

- 在 effect 中返回一个函数， 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
- React 何时清除 effect？ React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么**React 会在执行当前 effect 之前对上一个 effect 进行清除**。








