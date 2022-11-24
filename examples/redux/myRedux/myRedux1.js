/**
 * creteStore(reducer, preloaderState, enhancer)
 * {
 *   getState, dispatch, subscribe
 * }
 */

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

// 判断obj参数是否是对象
function isPlainObject(obj) {
  // 排除基本数据类型和null
  if(typeof obj !== "object" || obj === null) return false
  // 区分数组和对象 原型对象对比
  let proto = obj;
  
  while(Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  // 原型对象和最顶层的原型对象相等，就是对象
  return Object.getPrototypeOf(obj) === proto
}

// applyMiddleware就是一个函数内置的enhancer函数
function applyMiddleware(...middlewares) {
  return function(createStore) {
    return function(reducer, preloadedState) {
      // 创建store
      let store = createStore(reducer, preloadedState)
      // 阉割版的store
      let middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch
      }
      // 调用中间件的第一层函数， 传递阉割版的store对象
     let chain = middlewares.map(middleware => middleware(middlewareAPI))
     // 这个dispatch为第一个中间件的第三层函数
     let dispatch = compose(...chain)(dispatch)
     return {
      ...store,
      dispatch 
     }
    }
  }
}

function compose() {
  let funcs = [...arguments]
  return function (dispatch) {
    // 遍历第二层函数，next参数是下一个中间件的第三层函数， 最后一个中间件的next参数是dispatch函数
    // 遍历获取到一个中间件的第三层函数
    for(let i = func.length - 1; i >= 0; i--) {
      dispatch = func[i](dispatch)
    }
    return dispatch
  }
}

function bindActionCreators(actionCreators, dispatch) {
  let boundActionCreators = {}
  for(let key in actionCreators) {
    bindActionCreators[key] = function() {
      dispatch(actionCreators[key]())
    }
  } 

  return boundActionCreators
}

function combineReducers (reducers) {
  // 1. 检查reducer类型 它必须是函数
  let reducerKeys = Object.keys(reducers);
  for (let i = 0; i < reducerKeys.length; i++) {
    let key = reducerKeys[i];
    if (typeof reducers[key] !== 'function') throw new Error('reducer必须是函数');
  }
  // 2. 调用一个一个的小的reducer 将每一个小的reducer中返回的状态存储在一个新的大的对象中
  return function (state, action) {
    let nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      let key = reducerKeys[i];
      let reducer = reducers[key];
      let previousStateForKey = state[key];
      nextState[key] = reducer(previousStateForKey, action)
    }
    return nextState;
  }
}

