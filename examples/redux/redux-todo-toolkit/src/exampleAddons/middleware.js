export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}


// 使用 ES5 function 来编写 Middleware

// 外层 function:
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // 在这里做任何事情：用 next(action) 向前传递 action，
      // 或者使用 storeAPI.dispatch(action) 重启管线
      // 这里也可以使用 storeAPI.getState()

      return next(action)
    }
  }
}

// 使用箭头函数
const anotherExampleMiddleware = storeAPI => next => action => {
  // 当每个 action 都被 dispatch 时，在这里做一些事情

  return next(action)
}

export const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  // 在dispatch之后执行
  console.log('next state', storeAPI.getState())
  return result
}

// middleware可以运行异步逻辑
export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }

  return next(action)
}