function todos() {
  const [todos, dispatch] = useReducer(todosReducer, [])

  function handleAddClick(text) {
    dispatch({ type: 'add', text });
  }
}
