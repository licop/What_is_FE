# Redux 源码实现

## 实现 createStore 核心逻辑

`createStore`接收 reducer 和初始化 preloadedState 参数，返回 `getState`，`dispatch`，和 `subscribe` 方法

并对 reducer 和 action 进行类型约束，**reducer 必须是一个函数，action 是一个含有 type 属性的对象**

```js
function createStore(reducer, preloadedState) {
  // 约束reducer参数类型
  if (typeof reducer !== "function") throw new Error("reducer 必须是一个函数");

  let currentState = preloadedState;
  // 存放订阅者函数
  const listeners = [];

  // 获取状态
  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener);
    // 返回取消订阅函数
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    // 判断action是否是对象
    if (!isPlainObject(action)) throw new Error("action 必须是个对象");
    // 判断action是否有type属性
    if (typeof action.type === "undefined")
      throw new Error("action对象中必须有type属性");

    currentState = reducer(action, currentState);
    // 调用订阅者
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

// 判断obj参数是否是对象
function isPlainObject(obj) {
  // 排除基本数据类型和null
  if (typeof obj !== "object" || obj === null) return false;
  // 区分数组和对象 原型对象对比
  let proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  // 原型对象和最顶层的原型对象相等，就是对象
  return Object.getPrototypeOf(obj) === proto;
}
```

## 实现 enhancer

enhancer 的中文就是“增强”，顾名思义这个参数的作用就是使`creteStore`这个函数的按照开发者的意愿加强。它添加了另一个包裹原始 Redux store 的层。然后，增强的 store 可以通过提供其自定义 store 的 dispatch、getState 和 subscribe 函数而不是原始版本来改变 store 的行为方式。

```js
function createStore(reducer, preloadedState, enhancer) {
  // 约束reducer参数类型
  if (typeof reducer !== "function") throw new Error("reducer 必须是一个函数");

  // 判断enhancer参数有没有传递
  if (typeof enhancer !== "undefined") {
    // 判断enhancer参数是不是一个函数
    if (typeof enhancer !== "function") {
      throw new Error("enhancer必须是一个函数");
    }
    // 其实就是一行代码，将开发空间留给开发者
    return enhancer(createStore)(reducer, preloadedState);
  }

  let currentState = preloadedState;
  // 存放订阅者函数
  const listeners = [];

  // 获取状态
  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener);
    // 返回取消订阅函数
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    // 判断action是否是对象
    if (!isPlainObject(action)) throw new Error("action 必须是个对象");
    // 判断action是否有type属性
    if (typeof action.type === "undefined")
      throw new Error("action对象中必须有type属性");

    currentState = reducer(action, currentState);
    // 调用订阅者
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
```

写一个 enhancer 函数

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
```

## 实现 applyMiddleware

Redux 使用一种称为 `middleware` 的特殊插件来让我们自定义 dispatch 函数。

Redux middleware 在 dispatch action 和到达 reducer 之间提供第三方扩展点。

Redux Middleware 实际上是在 Redux 内置的一个非常特殊的 store enhancer 之上实现的，称为 `applyMiddleware`。

`middleware`函数的格式：

```js
// 使用 ES5 function 来编写 Middleware

// 外层 function:
// storeAPI为阉割版的store，内部含有dispatch和getState方法
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // 在这里做任何事情：用 next(action) 向前传递 action，
      // 或者使用 storeAPI.dispatch(action) 重启管线
      // 这里也可以使用 storeAPI.getState()
      // 这里的next函数就是下一个middleware的第三层函数
      // 最后一个中间件的next是dispatch函数
      // 当实现完middleware的功能后，在最后调用reducer
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
```

`applyMiddleware` 函数实现:

```js
// applyMiddleware就是一个函数内置的enhancer函数
function applyMiddleware(...middlewares) {
  return function(createStore) {
    return function(reducer, preloadedState) {
      // 创建store
      let store = createStore(reducer, preloadedState);
      // 阉割版的store
      let storeApi = {
        getState: store.getState,
        dispatch: store.dispatch,
      };
      // 调用中间件的第一层函数， 传递阉割版的store对象
      let chain = middlewares.map((middleware) => middleware(storeApi));
      // 这个dispatch为第一个中间件的第三层函数
      let dispatch = compose(...chain)(dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

function compose() {
  let funcs = [...arguments];
  return function(dispatch) {
    // 遍历第二层函数，next参数是下一个中间件的第三层函数， 最后一个中间件的next参数是dispatch函数
    // 遍历获取到一个中间件的第三层函数
    for (let i = func.length - 1; i >= 0; i--) {
      dispatch = func[i](dispatch);
    }
    return dispatch;
  };
}
```

## 实现 bindActionCreators

惟一会使用到 `bindActionCreators` 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 dispatch 或 Redux store 传给它。

```js
// 第一个参数为action creator对象集合
function bindActionCreators(actionCreators, dispatch) {
  let boundActionCreators = {};
  for (let key in actionCreators) {
    bindActionCreators[key] = function() {
      dispatch(actionCreators[key]());
    };
  }

  return boundActionCreators;
}
```

使用`bindActionCreators`函数

```js
function increment() {
  return { type: "increment" };
}

function decrement() {
  return { type: "decrement" };
}

let actions = bindActionCreators({ increment, decrement }, store.dispatch);

document.getElementById("increment").onclick = function() {
  // store.dispatch({ type: "increment" });
  actions.increment();
};

document.getElementById("decrement").onclick = function() {
  // store.dispatch({ type: "decrement" });
  actions.decrement();
};
```

## 实现 combineReducers

`combineReducers` 可以将拆分的 reducers 组合成 rootReducer 注入 store 中。

```js
const rootReducer = combineReducers({
  // 定义一个名为`todos`的顶级状态字段，由`todosReducer`处理
  todos: todosReducer,
  filters: filtersReducer,
});
```

`combineReducers`代码实现

```js
function combineReducers(reducers) {
  // 1. 检查reducer类型 它必须是函数
  let reducerKeys = Object.keys(reducers);
  for (let i = 0; i < reducerKeys.length; i++) {
    let key = reducerKeys[i];
    if (typeof reducers[key] !== "function")
      throw new Error("reducer必须是函数");
  }
  // 2. 调用一个一个的小的reducer 将每一个小的reducer中返回的状态存储在一个新的大的对象中
  return function(state, action) {
    let nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      let key = reducerKeys[i];
      let reducer = reducers[key];
      let previousStateForKey = state[key];
      nextState[key] = reducer(previousStateForKey, action);
    }
    return nextState;
  };
}
```

[完整源码解析参考]()
