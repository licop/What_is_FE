# 关于 Redux

本篇文章整体都是对 [Redux 官方文档](https://cn.redux.js.org/introduction/getting-started)一些摘抄，Redux 官方文档写对整个 Redux 应用的开发写的很完善，建议详细阅读一遍并完成 demo，本篇文章对开发或者面试需要记忆的内容进行整理。

## 什么是 Redux

**Redux 是一个使用叫作 "actions" 的事件去管理和更新应用状态的模式和工具库。** 它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

在我们开发 React 应用时，当我们有**多个组件需要共享和使用相同 state 时**，可能会变得很复杂，尤其是当这些组件位于应用程序的不同部分时。有时这可以通过 "提升 state" 到父组件来解决，但这并不总是有效。

解决这个问题的一种方法是从组件中提取共享 state，并将其放入组件树之外的一个集中位置。这样，我们的组件树就变成了一个大“view”，任何组件都可以访问 state 或触发 action，无论它们在树中的哪个位置！

通过定义和分离 state 管理中涉及的概念并强制执行维护 view 和 state 之间独立性的规则，代码变得更结构化和易于维护。

**Redux 提供的模式和工具使你更容易理解应用程序中的状态何时、何地、为什么以及如何更新，以及当这些更改发生时你的应用程序逻辑将如何表现。** Redux 指导你编写可预测和可测试的代码，这有助于让你确信你的应用程序将按预期工作。

Redux 有的一些核心术语，Action，Action Creator，Reducer, Store, Dispatch, Selector

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

在原生 js 中使用 redux 实现计数器功能

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

## 在 React 中使用 Redux 开发应用

Redux 是专门为 React 设计的。 使用官方的 **React-Redux UI 绑定库** ,将 React 和 Redux 结合使用完成一个[Todo 项目](https://github.com/licop/What_is_FE/tree/master/examples/redux/redux-todo)

具体完成文档参考 [Redux 深入浅出](https://cn.redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)

### 设计 State

React 和 Redux 的核心原则之一是 **UI 应该基于 state**。因此，设计应用程序的一种方法是首先考虑描述应用程序工作所需的所有状态。尝试使用尽可能少的 state 来描述 UI，这样需要跟踪和更新的数据更少。

**Redux 根结点 state 通常作为一个普通 JS 对象**，其中嵌套了其他数据。

### 设计 Actions

**Actions** 是具有 `type` 字段的普通 JavaScript 对象。如前所述，**你可以将 actions 视为描述应用程序中所发生的事情。**

以下是列出的一些 actions 列表，他们描述所发生的事情例如：

- 根据用户输入的文本添加新的待办事项条目
- 切换待办事项的完成状态
- 为待办事项选择颜色类别
- 删除待办事项
- 将所有待办事项标记为已完成
- 清除所有已完成的待办事项

`type` 字段应该是一个可读的字符串，通常写成 'feature/eventName'

通常会将描述该领域正在发生的事情所需的任何额外数据放入 `action.payload` 中；这可以是一个数字、一个字符串或一个内部包含多个字段的对象。

基于可能发生的事情列表，可以创建应用程序将使用的 actions 列表：

- {type: 'todos/todoAdded', payload: todoText}
- {type: 'todos/todoToggled', payload: todoId}
- {type: 'todos/colorSelected, payload: {todoId, color}}
- {type: 'todos/todoDeleted', payload: todoId}
- {type: 'todos/allCompleted'}
- {type: 'todos/completedCleared'}

像 state 数据一样，**actions 应该包含描述所发生情况所需的最少信息.**

#### Action Creators

编写良好的 Redux 应用程序实际上并不会在我们 dispatch 这些 action 对象时以内联的方式编写它们。相反，我们使用 `action creator` 函数

action creator 就是创建并返回一个 action 对象的函数。我们通常使用它们来避免每次都手动编写 action 对象

```js
const todoAdded = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

我们调用这个 `action creator`，然后把返回值直接传给 dispatch：

```js
store.dispatch(todoAdded("Buy milk"));
```

### 编写 Reducers

Reducers 是接收当前的 state 和 action 作为参数并返回新的 state 结果的函数。也就是， **(state, action) => newState.**

**Reducers 通常使用 ES6 默认参数语法来提供初始状态：(state = initialState, action)。**

```js
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      // 可以只返回新的 todos 数组 - 周围没有额外的对象
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoToggled": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    default:
      return state;
  }
}
```

#### Reducers 规则

reducer 必须始终遵循一些特殊规则：

- 应该只根据 `state` 和 `action` 参数计算新的状态值
- 不允许修改现有的 `state`。相反，必须通过复制现有值并对复制的值进行更改来进行 immutable updates 。
- 不能做任何异步逻辑或包含"副作用"

**“ 副作用 ” 是在从函数返回值之外可以看到的状态或行为的任何变化**。一些常见的副作用是:

- 将值记录到控制台
- 保存文件
- 设置异步计时器
- 发出 AJAX HTTP 请求
- 修改存在于函数之外的某些状态，或改变函数的参数
- 生成随机数或唯一随机 ID（例如 Math.random() 或 Date.now()）

**在 Redux 中，我们的 reducer 永远不允许改变原始/当前状态值！**

```js
// ❌ 非法 - 默认情况下，这会改变状态！
state.value = 123;
```

Reducers 只能 复制 原始值，并只能改变这些副本。

```js
// ✅ 做了复制，所以是安全的
return {
  ...state,
  value: 123,
};
```

在 Redux 中不能改变状态有几个原因：

- 会导致错误，例如 UI 无法正确更新显示最新值
- 这使得更难理解为什么以及如何更新状态
- 使编写测试变得更加困难
- 破坏了正确使用“时间旅行调试”的能力
- 违背了 Redux 的预期精神和使用模式

#### Reducers 的拆分与组合

Reducer 通常根据顶级状态键或状态`slices`进行拆分。Reducers 通常写在`slice`文件中，组织成`feature`文件夹。

Redux 核心库包含一个名为 `combineReducers` 的实用程序, 可以将拆分的 reducers 组合成 rootReducer 注入 store 中。

```js
import { combineReducers } from "redux";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
  // 定义一个名为`todos`的顶级状态字段，由`todosReducer`处理
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
```

### Store

store 有以下几个职责：

- 在内部保存当前应用程序 state
- 通过 `store.getState()` 访问当前 state;
- 通过 `store.dispatch(action)` 更新状态;
- 通过 `store.subscribe(listener)` 注册监听器回调;
- 通过 `store.subscribe(listener)` 返回的 unsubscribe 函数注销监听器

**Redux 应用程序中只有一个 store， 每个 Reudx store 都有一个根 reducer 函数。**

#### 创建 Store

`rootReducer`为根 reducer 函数, `createStore` 也可以接受 preloadedState 值作为其第二个参数, 可以使用它在创建 store 时添加初始数据

```js
import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const store = createStore(rootReducer, preloadedState);
```

#### 实现一个 mini 版 Store

```js
// miniReduxStore.js
function createStore(reducer, preloadedState) {
  let state = preloadedState;
  const listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  dispatch({ type: "@@redux/INIT" });

  return { dispatch, subscribe, getState };
}
```

如你所见，这里的实际逻辑相当短：

- store 内部有当前的 state 值和 reducer 函数
- `getState` 返回当前 state 值
- `subscribe` 保存一个监听回调数组并返回一个函数来移除新的回调
- `dispatch` 调用 reducer，保存 state，并运行监听器
- store 在启动时 `dispatch` 一个 action 来初始化 reducers 的 state
- store API 是一个对象，里面有 `{dispatch, subscribe, getState}`

#### 使用 Enhancers 创建 Store

`store enhancer` 就像一个特殊版本的“ createStore ”，它添加了另一个包裹原始 Redux store 的层。然后，增强的 store 可以通过提供其自定义 store 的 dispatch、getState 和 subscribe 函数而不是原始版本来改变 store 的行为方式。

```js
// 每次 dispatched 一个 action 时总是将'Hi'！记录到控制台
export const sayHiOnDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newDispatch(action) {
      const result = store.dispatch(action);
      console.log("Hi!");
      return result;
    }

    return { ...store, dispatch: newDispatch };
  };
};

// 总是将字段 meaningOfLife: 42 添加到 getState() 返回值中
export const includeMeaningOfLife = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      };
    }

    return { ...store, getState: newGetState };
  };
};
```

Redux 核心包含一个 `compose` 函数，可用于将多个 enhancer 合并在一起

```js
import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from "./exampleAddons/enhancers";

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
```

`Store enhancers` 是一种非常强大的修改 store 的方法，几乎所有的 Redux 应用程序在设置 store 时都会包含至少一个 enhancer。

如果你没有任何要传入的 preloadedState，则可以将 enhancer 作为第二个参数传递：

```js
const store = createStore(rootReducer, storeEnhancer);
```

#### Middleware

`Enhancers` 非常强大，因为其可以覆盖或替换 store 的任何方法：`dispatch`、`getState` 和 `subscribe。`

但是，很多时候，我们只需要自定义 `dispatch` 的行为方式。

Redux 使用一种称为 **middleware** 的特殊插件来让我们自定义 `dispatch` 函数。

**Redux middleware 在 dispatch action 和到达 reducer 之间提供第三方扩展点。** 人们使用 Redux middleware 进行日志记录、崩溃报告、异步 API 通信、路由等。

`Redux Middleware` 实际上是在 Redux 内置的一个非常特殊的 `store enhancer` 之上实现的，称为 **applyMiddleware。**

```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";

const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// 将 enhancer 为第二参数，因为没有 preloadedState
const store = createStore(rootReducer, middlewareEnhancer);

export default store;
```

**编写 Middleware**

```js
// 使用 ES5 function 来编写 Middleware

// 外层 function:
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // 在这里做任何事情：用 next(action) 向前传递 action，
      // 或者使用 storeAPI.dispatch(action) 重启管线
      // 这里也可以使用 storeAPI.getState()

      return next(action);
    };
  };
}

// 使用箭头函数
const anotherExampleMiddleware = (storeAPI) => (next) => (action) => {
  // 当每个 action 都被 dispatch 时，在这里做一些事情

  return next(action);
};

// 实例一： 打印日志
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};

// 实例二：增加异步逻辑
const delayedMessageMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    setTimeout(() => {
      console.log("Added a new todo: ", action.payload);
    }, 1000);
  }

  return next(action);
};
```

更多关于[Store](https://cn.redux.js.org/tutorials/fundamentals/part-4-store)

### Redux 结合 React 使用

在设计完**组件树**结构后， 我们就可以使用官方的 **React-Redux UI 绑定库**与 UI 进行交互。

`React-Redux` 主要有三个功能：

- 使用 `useSelector` 从 Store 中读取 State
- 使用 `useDispatch` 来 Dispatch Action
- 使用 `Provider` 透传 Store

#### 使用 useSelector 从 Store 中读取 State

React 支持编写自定义 hook，这使我们可以提取可重用的 hook，以在 React 的内置 hook 之上添加自定义行为。和许多其他库一样，`React-Redux` 也有它的自定义 hook，你可以直接在组件中使用它们。`React-Redux` hook 使 React 组件能够通过读取 state 以及 dispatch action 来和 Redux store 进行交互。

`useSelector`是 React-Redux 中的自定义 hook，它使得 React 组件可以从 Redux store 中读取数据。

`useSelector`接收一个 selector 函数。**selector 函数接收 Redux store 的 state 作为其参数，然后从 state 中取值并返回。**

```js
const selectTodos = (state) => state.todos;

// selector 函数可以直接返回 Redux state，也可以基于该 state 返回 派生 值。
const selectTotalCompletedTodos = (state) => {
  const completedTodos = state.todos.filter((todo) => todo.completed);
  return completedTodos.length;
};
```

在组件渲染时使用`useSelector` hook,向 UI 传递 State 对象。

```js
import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const selectTodos = (state) => state.todos;

const TodoList = () => {
  const todos = useSelector(selectTodos);

  // `todos` 是一个数组，我们可以遍历它
  const renderedListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
```

`useSelector` 会自动订阅 Redux store！这样，任何时候 dispatch action，它都会立即再次调用对应的 selector 函数。**如果 selector 返回的值与上次运行时相比发生了变化，`useSelector` 将强制组件使用新值重新渲染。**我们仅需要在组件中调用一次 `useSelector()` 即可。

**我们可以在一个组件中多次使用 useSelector。并且每次调用 useSelector 都应该总是返回尽可能少的 state。**

#### “记忆（memoized）”selector 函数

值得注意的是， **useSelector 使用严格的 === 来比较结果，因此只要 selector 函数返回的结果是新地址引用，组件就会重新渲染！**这意味着如果在 selector 中创建并返回新地址引用，那么每次 dispatch action 后组件都会被重新渲染，即使数据值确实没有改变。

例如，将此 selector 传递给 `useSelector` 会导致组件 总是 被重新渲染，因为 `array.map()` 永远返回一个新的数组引用,造成重渲染

```js
// 不好的示例：总是返回一个新的引用
const selectTodoDescriptions = (state) => {
  // 这会创建一个新的数组引用！
  return state.todos.map((todo) => todo.text);
};
```

可以使用 **记忆（memoized)selector 函数** 来提高性能并避免不必要的重新渲染。

**Memoization** 是一种缓存——具体来说，就是保存那些非常耗时的计算结果，然后再次遇到同样的计算任务时，直接重用这些结果。

**Memoized selector 函数**是保存最新结果值的 selector，如果使用相同的输入多次调用它们，将得到相同的结果值。如果使用与上次 不同的 输入调用它们，它们将重新计算新的结果值，将其缓存并返回新值。

**Reselect 库 提供了一个 createSelector API，它将生成 memoized selector 函数。** `createSelector` 接收一个或多个 input selector 函数作为参数，外加一个 output selector，并返回新的 selector 函数。每次调用 selector 时：

- 所有 input selectors 都使用所有参数被调用
- 只要任何 input selector 返回值已更改，output selector 都将重新运行
- 所有 input selector 的结果都将成为 output selector 的参数
- output selector 的最终结果将被缓存以供下次使用

```js
export const selectFilteredTodos = createSelector(
  // 第一个 input selector：所有的 todo 列表
  (state) => state.todos,
  // 第二个 input selector：当前状态过滤器
  (state) => state.filters.status,
  // Output selector：接收两个值
  (todos, status) => {
    if (status === StatusFilters.All) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    // 根据过滤器返回未完成或已完成的 todo 列表
    return todos.filter((todo) => todo.completed === completedStatus);
  }
);
```

#### 使用 useDispatch 来 Dispatch Action

React-Redux 的 `useDispatch` hook 函数会返回 store 的 `dispatch` 方法。（事实上这个 hook 的内部实现真的是 `return store.dispatch。`）

因此，我们可以在任何需要 dispatch action 的组件中使用 `const dispatch = useDispatch()`，然后根据需要调用 `dispatch(someAction)`。

```js
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    // 如果用户按下 Enter 键：
    if (e.key === "Enter" && trimmedText) {
      // 使用这个文本来 dispatch "todo added" action
      dispatch({ type: "todos/todoAdded", payload: trimmedText });
      // 清空文本输入框
      setText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Header;
```

#### 使用 Provider 透传 Store

**使用 `<Provider>` 组件包裹 `<App>` 组件，并将 Redux store 作为 prop 传递给 `<Provider>` 组件**。之后，应用程序中的每个组件都可以在需要时能够访问到 Redux store。

```js
ReactDOM.render(
  // 使用 `<Provider>` 组件包裹 `<App>` 组件
  // 并把 Redux store 作为 prop 传入
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

更多详细的关于 react-redux 的使用参考 [UI 和 React](https://cn.redux.js.org/tutorials/fundamentals/part-5-ui-react)

### 异步逻辑和数据获取

#### Redux Middleware 和副作用

Redux store 本身无法处理异步逻辑。它只会同步地 dispatch action，并通过调用根 reducer 函数来更新 state，然后通知视图更新。任何异步都必须在 store 之外发生。

之前提过 Redux reducer 绝对不能包含“副作用”。**“副作用”是指除函数返回值之外的任何变更，包括 state 的更改或者其他行为。**

**Redux middleware 就是用来放这些副作用逻辑代码的地方。** Middleware 也可以访问 dispatch 和 getState。这意味着你可以在 middleware 中编写一些异步逻辑，并且仍然能够通过 dispatch action 与 Redux store 进行交互。

前面，我们看了 Redux 同步数据流程图。当我们向 Redux 应用程序添加异步逻辑时，额外添加了 middleware 步骤，可以在其中运行 AJAX 请求等逻辑，然后 dispatch action。这使得异步数据流看起来像这样：

![](/framework/redux/redux_2.gif)

使用中间件开发一个简易的 `redux-thunk`:

```js
const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  // 如果 action 实际上是一个函数...
  if (typeof action === "function") {
    // 调用该函数并传入 `dispatch` 和 `getState` 作为参数
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // 否则，它就是一个普通 action，那就继续执行
  return next(action);
};
```

#### 使用 Redux Thunk Middleware

`thunk middleware` 允许我们编写以 `dispatch` 和 `getState` 作为参数的函数。thunk 函数可以包含我们想要的任何异步逻辑，并且该逻辑可以根据需要 dispatch action 以及读取 store state。

在项目中使用`redux-thunk`

```js
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// store 现在就可以在 `dispatch` 中接收 thunk 函数了
const store = createStore(rootReducer, composedEnhancer);
export default store;
```

```js
// Thunk 函数
export const fetchTodos = () => async (dispatch, getState) => {
  dispatch(todosLoading());
  const response = await client.get("/fakeApi/todos");
  dispatch(todosLoaded(response.todos));
};

export const saveNewTodo = (text) => async (dispatch) => {
  const initialTodo = { text };
  const response = await client.post("/fakeApi/todos", { todo: initialTodo });
  dispatch(todoAdded(response.todo));
};
```

在加载组件时，我们可以在组件的`useEffect`中使用 dispatch 调用 thunk 函数

## 使用 Redux Toolkit 开发应用

**Redux Toolkit 是编写 Redux 应用程序逻辑的标准方式**, 它提供了官方的预设的最佳实践和功能齐备的工具，可以高效的进行 Redux 开发。

注意 `Redux Toolkit` 仅 涵盖了 Redux 逻辑——仍然需要使用 `React-Redux` 使得 React 组件与 Redux store 进行交互，包括 `useSelector` 和 `useDispatch`。 在使用`Redux Toolkit`开发应用时，我的 UI 组件代码和上面所描述的开发一致，将重新书写 slice 文件。

Redux Toolkit 集成了上面说的`immer` 库, `redux-thunk`, `Reselect`和`redux-devtools-extension`等工具，可以方便快捷的开发。

### 使用 configureStore

**Redux Toolkit 的 configureStore API，可简化 store 的设置过程**。`configureStore` 包裹了 Redux 核心 createStore API，并自动为我们处理大部分 store 设置逻辑。事实上，我们可以有效地将其缩减为一步：

```js
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    // 定义一个名为 `todos` 的顶级 state 字段，值为 `todosReducer`
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export default store;
```

`configureStore` 为我们完成了所有工作：

- 将 todosReducer 和 filtersReducer 组合到根 reducer 函数中，它将处理看起来像 {todos, filters} 的根 state
- 使用根 reducer 创建了 Redux store
- 自动添加了 “thunk” middleware
- 自动添加更多 middleware 来检查常见错误，例如意外改变（mutate）state
- 自动设置 Redux DevTools 扩展连接

### 使用 createSlice

**Redux Toolkit 的 createSlice API，将帮助我们简化 Redux reducer 逻辑和 actions。**createSlice 为我们做了几件重要的事情：

- 可以将 case reducer 编写为对象内部的函数，而不必编写 `switch/case` 语句
- reducer 将能够编写更短的不可变更新逻辑
- 所有 action creators 将根据我们提供的 reducer 函数自动生成

`createSlice` 接收一个包含三个主要选项字段的对象：

- `name`：一个字符串，将用作生成的 action types 的前缀
- `initialState`：reducer 的初始 state
- `reducers`：一个对象，其中键是字符串，值是处理特定 actions 的 “case reducer” 函数

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ “突变”（mutate）代码在 createSlice 中是可以的！
      state.entities.push(action.payload);
    },
    todoToggled(state, action) {
      const todo = state.entities.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: "loading",
      };
    },
  },
});

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions;

export default todosSlice.reducer;
```

可以看出：

- 我们在 reducers 对象中编写 case reducer 函数，并赋予它们高可读性的名称
- **createSlice 会自动生成对应于每个 case reducer 函数的 action creators**
- createSlice 在默认情况下自动返回现有 state
- **createSlice 允许我们安全地“改变”（mutate）state！**

### 使用 createAsyncThunk

Redux Toolkit 提供的 `createAsyncThunk` API 可以为我们生成 thunks

createAsyncThunk 接收两个参数：

- 一个字符串，用作生成的 action types 的前缀
- 一个 payload creator 回调函数，应该返回一个 Promise。这通常使用 `async/await`语法编写，因为 async 函数会自动返回一个 Promise。payload creator 将接收一个对象作为其第二个参数，其中包含 {getState，dispatch} 和一些其他有用值

```js
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await client.get("/fakeApi/todos");
  return response.todos;
});

export const saveNewTodo = createAsyncThunk(
  "todos/saveNewTodo",
  async (text, { dispatch, getState }) => {
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    dispatch(todoAdded(response.todo));
  }
);
```

`createAsyncThunk` 将生成三个 action creators 和 action types，以及一个在调用时自动 dispatch 这些 actions 的 thunk 函数。在这种情况下，action creators 和它们 types 是：

- fetchTodos.pending：todos/fetchTodos/pending
- fetchTodos.fulfilled：todos/fetchTodos/fulfilled
- fetchTodos.rejected：todos/fetchTodos/rejected

`createSlice` 还接收一个叫 `extraReducers` 的选项，可以让同一个 slice reducer 监听其他 action types。

```js
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await client.get("/fakeApi/todos");
  return response.todos;
});

export const saveNewTodo = createAsyncThunk(
  "todos/saveNewTodo",
  async (text) => {
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    return response.todo;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 省略 case reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((todo) => {
          newEntities[todo.id] = todo;
        });
        state.entities = newEntities;
        state.status = "idle";
      });
  },
});
```

更多参考学习：

- [使用 Redux Toolkit 实现 Todo 项目](https://github.com/licop/What_is_FE/tree/master/examples/redux/react-redux-posts)
- [使用 Redux Toolkit 实现计数器案例](https://github.com/licop/What_is_FE/tree/master/examples/redux/react-redux-count)
- [使用 Redux Toolkit 实现博客案例](https://github.com/licop/What_is_FE/tree/master/examples/redux/react-redux-posts)
- [Redux Toolkit 文档](https://cn.redux.js.org/redux-toolkit/overview)

## 性能优化

我们可以使用 `React DevTools Profiler` 查看 state 更新时组件重新渲染的分析图，来调研渲染行为。可以通过查看分析图来观察哪些组件重复渲染，从而找到具体的方法优化性能。

### 使用 React.memo()

React 项目中当一个子元素发生变化重新渲染，其通常兄弟子元素也会重选渲染，因为 **React 的默认行为是当父组件渲染时，React 会递归渲染其中的所有子组件**

我们可以使用 `React.memo()`包裹子组件，这可以确保组件只有在 props 真正更改时才会重新渲染

```js
let PostItem = ({ post }) => {
  // omit logic
};

PostItem = React.memo(PostItem);
```

### 记忆化的 Selector 函数

记忆化的 selector 是提高 React + Redux 应用程序性能的宝贵工具，因为它们可以帮助我们避免不必要的重新渲染，并且如果输入数据没有更改，还可以避免执行潜在的复杂或昂贵的计算。

更详细参考： [提升渲染性能](https://cn.redux.js.org/tutorials/essentials/part-6-performance-normalization/#%E6%8F%90%E5%8D%87%E6%B8%B2%E6%9F%93%E6%80%A7%E8%83%BD)

## 实现撤销重做功能

### 设计 State

```js
{
  counter: {
    past: [0, 1, 2],
    present: 3,
    future: [4]
  }
}

{
  todos: {
    past: [
      [],
      [{ text: 'Use Redux' }],
      [{ text: 'Use Redux', complete: true }]
    ],
    present: [
      { text: 'Use Redux', complete: true },
      { text: 'Implement Undo' }
    ],
    future: [
      [
        { text: 'Use Redux', complete: true },
        { text: 'Implement Undo', complete: true }
      ]
    ]
  }
}

// 总之，长这样：
{
  past: Array<T>,
  present: T,
  future: Array<T>
}
```

### 算法设计

实现 undoable 函数

```js
function undoable(reducer) {
  // 使用一个空 action 调用 reducer 以填充初始状态
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  };

  // 返回处理撤消和重做的 reducer
  return function(state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case "UNDO":
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      case "REDO":
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      default:
        // 代理传给 reducer 的 action
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
}
```

使用 undoable 函数

```js
// 这是个 reducer
function todos(state = [], action) {
  /* ... */
}

// 这也是个 reducer！
const undoableTodos = undoable(todos);

import { createStore } from "redux";
const store = createStore(undoableTodos);

store.dispatch({
  type: "ADD_TODO",
  text: "Use Redux",
});

store.dispatch({
  type: "ADD_TODO",
  text: "Implement Undo",
});

store.dispatch({
  type: "UNDO",
});
```

### 更多参考

- [Redux 官方网站](https://cn.redux.js.org/introduction/getting-started)
