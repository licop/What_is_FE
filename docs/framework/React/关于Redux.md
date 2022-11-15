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

#### 数据流基础

- **Redux state 由 reducer 函数来更新:**
  - Reducers 总是通过复制现有状态值，更新副本来不可变地生成新状态
  - Redux Toolkit `createSlice` 函数为您生成“slice reducer”函数，并让您编写 “mutable 可变”代码，内部自动将其转变为安全的不可变更新
  - 这些 slice 化 reducer 函数被添加到 `configureStore` 中的 `reducer` 字段中，并定义了 Redux store 中的数据和状态字段名称
- **React 组件使用 useSelector 钩子从 store 读取数据**
  - 选择器函数接收整个 state 对象，并且返回需要的部分数据
  - 每当 Redux store 更新时，选择器将重新运行，如果它们返回的数据发生更改，则组件将重新渲染
- **React 组件使用 useDispatch 钩子 dispatch action 来更新 store**

  - `createSlice` 将为我们添加到 slice 的每个 reducer 函数生成 action creator 函数
  - 在组件中调用 `dispatch(someActionCreator())` 来 dispatch action
  - Reducers 将运行，检查此 action 是否相关，并在适当时返回新状态
  - 表单输入值等临时数据应保留为 React 组件状态。当用户完成表单时，dispatch 一个 Redux action 来更新 store。

#### 使用数据

- **任意 React 组件都能从 Redux store 中拿到其需要的数据**
  任意组件都能从 Redux Store 中读取任意数据
  多个组件可以读取相同的数据，甚至在同一时刻读
  组件应该根据其渲染所需，从 Redux Store 中读取最小量的数据
  组件可以结合 props, state, Redux store 的数据去渲染。组件可以从 store 中读取多条数据，并根据需要重塑数据以进行显示。
  任意组件都能通过 dispatch actions 引发状态更新（state updates）

- **Redux action creators 可以使用一个正确的内容模板去构造（prepare）action 对象**

  - createSlice 和 createAction 可以接受一个返回 action payload 的 "prepare callback"
  - 诸如唯一的 ID 和一些随机值应该放在 action 里，而不是在 reducer 中去计算

- **Reducers 内（仅）应该包含 state 的更新逻辑**
  - Reducers 内可以包含计算新 state 所需的任意逻辑
  - Action 对象内应该包含足够描述即将发生什么事的信息

#### 异步逻辑与数据请求

### 更多参考

- [Redux 官方网站](https://cn.redux.js.org/introduction/getting-started)
