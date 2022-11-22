import { createSelector } from "reselect"
import { StatusFilters } from "../filters/filtersSlice"
import { client } from '../../api/client'

const initialState = {
  status: 'idle',
  entities: []
}

// [
  // { id: 0, text: 'Learn React', completed: true },
  // { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  // { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
// ]

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        entities: [...state.entities, action.payload],
      }
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        entities: state.entities.map((todo) => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed,
          }
        }),
      }
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return {
        ...state,
        entities: state.entities.map((todo) => {
          if (todo.id !== todoId) {
            return todo
          }

          return {
            ...todo,
            color,
          }
        }),
      }
    }
    case 'todos/todoDeleted': {
      return {
        ...state,
        entities: state.entities.filter((todo) => todo.id !== action.payload),
      }
    }
    case 'todos/allCompleted': {
      return {
        ...state,
        entities: state.entities.map((todo) => {
          return { ...todo, completed: true }
        }),
      }
    }
    case 'todos/completedCleared': {
      return {
        ...state,
        entities: state.entities.filter((todo) => !todo.completed),
      }
    }
    case 'todos/todosLoading': {
      return {
        ...state,
        status: 'loading',
      }
    }
    case 'todos/todosLoaded': {
      return {
        ...state,
        status: 'idle',
        entities: action.payload,
      }
    }
    default:
      return state
  }
}

/** thunk 函数 **/ 
export const fetchTodos = () => async (dispatch, getState) => {
  dispatch(todosLoading())
  const response = await client.get('/fakeApi/todos')
  dispatch(todosLoaded(response.todos))
}

export const  saveNewTodo = (text) => async dispatch => {
  const initialTodo = { text }
  const response = await client.post('/fakeApi/todos', { todo: initialTodo })
  dispatch(todoAdded(response.todo))
}


// export function saveNewTodo(text) {
//   // 然后创建并返回异步 thunk 函数：
//   return async function saveNewTodoThunk(dispatch, getState) {
//     // ✅ 现在可以使用文本值并将其发送到服务器了
//     const initialTodo = { text }
//     const response = await client.post('/fakeApi/todos', { todo: initialTodo })
//     dispatch(todoAdded(response.todo))
//   }
// }
  
/** action creator **/
export const todoAdded = (todo) => ({ type: 'todos/todoAdded', payload: todo })

export const todoToggled = (todoId) => ({ 
  type: 'todos/todoToggled', 
  payload: todoId 
})

export const colorSelected = (todoId, color) => ({
  type: 'todos/colorSelected',
  payload: {todoId, color}
})

export const todoDeleted = (todoId) => ({
  type: 'todos/todoDeleted',
  payload: todoId
})

export const allTodosCompleted = () => ({ type: 'todos/allCompleted' })

export const completedTodosCleared = () => ({ type: 'todos/completedCleared' })

export const todosLoading = () => ({ type: 'todos/todosLoading' })

export const todosLoaded = (todos) => ({
  type: 'todos/todosLoaded',
  payload: todos,
})


/** selector **/
export const selectTodos = state => state.todos.entities

export const selectTodoIds = createSelector(
  // 首先传入一个或更多的 input selector 函数：
  selectTodos,
  // 然后，output selector 接收所有输入结果作为参数
  // 并返回最终结果值
  // 参数“todos”为 selectTodos的返回值
  todos => todos.map(todo => todo.id)
)

export const selectTodoById = (state, todoId) => {
  return selectTodos(state).find(todo => todo.id === todoId)
}

// 筛选todos
export const selectFilteredTodos = createSelector(
  // 第一个 input selector：所有的 todo 列表
  selectTodos,
  // 第二个 input selector：当前过滤器
  state => state.filters,
  // Output selector：接收两个值
  (todos, filters) => {
    const { status, colors } = filters
    const showAllCompletions = status === StatusFilters.All

    if(showAllCompletions && colors.length === 0) {
      return todos
    }

    const completedStatus = status === StatusFilters.Completed
    // 根据过滤器返回 todo 列表
    return todos.filter(todo => {
      const statusMatches = showAllCompletions || todo.completed === completedStatus
      const colorMatches = colors.length === 0 || colors.includes(todo.color)

      return colorMatches && statusMatches
    })
  }
)

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id)  
)
