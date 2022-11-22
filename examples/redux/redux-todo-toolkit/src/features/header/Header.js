import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  const handleKeyDown = async e => {
    const trimmedText = text.trim()
    if(e.which === 13 && trimmedText) {
      setStatus('loading')
      // 使用用户编写的文本创建 thunk 函数
      const saveNewTodoThunk = saveNewTodo(trimmedText)
      // 然后 dispatch thunk 函数本身
      // Thunks 可以从 dispatch 中返回 promise
      await dispatch(saveNewTodoThunk)
      // 组件内可以等待异步 thunks 完成后再处理一些逻辑
      setText('')
      setStatus('idle')
    }   
  }
  
  let isLoading = status === 'loading'
  let placeholder = isLoading ? '' : 'What needs to be done?'
  let loader = isLoading ? <div className="loader" /> : null

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {loader}
    </header>
  )
}

export default Header
