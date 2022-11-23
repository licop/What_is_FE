import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleWare from 'redux-thunk'
import rootReducer from './reducer'
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'
import { print1, print2, print3, loggerMiddleware, delayedMessageMiddleware } from './exampleAddons/middleware'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')
if(persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}
// Redux 核心包含一个 compose 函数，可用于将多个 enhancer 合并在一起
const composedEnhancer1 = compose(sayHiOnDispatch, includeMeaningOfLife)

// Redux 核心库有一个 createStore API 可以创建 store。
// createStore 接受 preloadedState 值作为其第二个参数，可以添加初始数据
// 接受 enhancer 作为参数， 用于自定义store的能力并新增功能
// const store = createStore(rootReducer, preloadedState, composedEnhancer)

const middlewareEnhancer = applyMiddleware(print1, print2, print3, delayedMessageMiddleware)

// 将redux DevTools 添加到 store中， 代替原始的 Redux compose 函数
const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleWare)
)

const store = createStore(rootReducer, composedEnhancer)

export default store
// 如果你没有任何要传入的 preloadedState，则可以将 enhancer 作为第二个参数传递：
// const store = createStore(rootReducer, storeEnhancer)
