import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})

export default store

// configureStore 为我们完成了所有工作：

// 将 todosReducer 和 filtersReducer 组合到根 reducer 函数中，它将处理看起来像 {todos, filters} 的根 state
// 使用根 reducer 创建了 Redux store
// 自动添加了 “thunk” middleware
// 自动添加更多 middleware 来检查常见错误，例如意外改变（mutate）state
// 自动设置 Redux DevTools 扩展连接
