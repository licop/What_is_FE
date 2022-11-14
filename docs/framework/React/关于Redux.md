## 关于 Redux

### 什么是 Redux

**Redux 是 JavaScript 状态容器，提供可预测化的状态管理。**

在我们开发 React 应用时，当我们有**多个组件需要共享和使用相同 state 时**，可能会变得很复杂，尤其是当这些组件位于应用程序的不同部分时。有时这可以通过 "提升 state" 到父组件来解决，但这并不总是有效。

解决这个问题的一种方法是从组件中提取共享 state，并将其放入组件树之外的一个集中位置。这样，我们的组件树就变成了一个大“view”，任何组件都可以访问 state 或触发 action，无论它们在树中的哪个位置！

通过定义和分离 state 管理中涉及的概念并强制执行维护 view 和 state 之间独立性的规则，代码变得更结构化和易于维护。

这就是 Redux 背后的基本思想：**应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。**

Redux 有的一些核心术语，Action，Action Creator，Reducer, Store, Dispatch,Selector

具体用法官方文档方写很详细 [核心术语](https://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts)

动画的方式来表达数据流更新:
![](/framework/redux/redux_1.gif)

总结：

- **Redux 是一个管理全局应用状态的库**
  - Redux 通常与 `React-Redux` 库一起使用，把 Redux 和 React 集成在一起
  - `Redux Toolkit` 是编写 Redux 逻辑的推荐方式
- **Redux 使用 "单向数据流"**
  - State 描述了应用程序在某个时间点的状态，视图基于该 state 渲染
  - 当应用程序中发生某些事情时：
    - 视图 dispatch 一个 action
    - store 调用 reducer，随后根据发生的事情来更新 state
    - store 将 state 发生了变化的情况通知 UI
  - 视图基于新 state 重新渲染
- **Redux 有这几种类型的代码**
  - Action 是有 type 字段的纯对象，描述发生了什么
  - Reducer 是纯函数，基于先前的 state 和 action 来计算新的 state
  - 每当 dispatch 一个 action 后，store 就会调用 root reducer

在原生 js 中使用 redux 实现技术器功能

```html
<button id="plus">+</button>
<span id="count">0</span>
<button id="minus">-</button>
<script src="redux.min.js"></script>
<script>
  // 3. 存储默认状态
  var initialState = {
    count: 0,
  };
  // 2. 创建 reducer 函数
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  // 1. 创建 store 对象
  var store = Redux.createStore(reducer);

  // 4. 定义 action
  var increment = { type: "increment" };
  var decrement = { type: "decrement" };

  // 5. 获取按钮 给按钮添加点击事件
  document.getElementById("plus").onclick = function() {
    // 6. 触发action
    store.dispatch(increment);
  };

  document.getElementById("minus").onclick = function() {
    // 6. 触发action
    store.dispatch(decrement);
  };

  // 7. 订阅 store
  store.subscribe(() => {
    // 获取store对象中存储的状态
    // console.log(store.getState());
    document.getElementById("count").innerHTML = store.getState().count;
  });
</script>
```

### 在 React 中使用 Redux

### 更多参考

- [Redux 官方网站](https://cn.redux.js.org/introduction/getting-started)
