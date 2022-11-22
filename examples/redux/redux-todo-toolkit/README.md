# Redux Todo

参考：[Redux 深入浅出 3](https://cn.redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)

## 开发步骤

### 设计 State 结构

```js
const todoAppState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'Active',
    colors: ['red', 'blue'],
  },
}
```

### 设计 Actions

Actions 是具有 type 字段的普通 JavaScript 对象。如前所述，**你可以将 actions 视为描述应用程序中所发生的事情。**

- 根据用户输入的文本添加新的待办事项条目
- 切换待办事项的完成状态
- 为待办事项选择颜色类别
- 删除待办事项
- 将所有待办事项标记为已完成
- 清除所有已完成的待办事项
- 选择不同的 “已完成” 过滤器值
- 添加新的滤色器
- 移除滤色器

- {type: 'todos/todoAdded', payload: todoText}
- {type: 'todos/todoToggled', payload: todoId}
- {type: 'todos/colorSelected, payload: {todoId, color}}
- {type: 'todos/todoDeleted', payload: todoId}
- {type: 'todos/allCompleted'}
- {type: 'todos/completedCleared'}
- {type: 'filters/statusFilterChanged', payload: filterValue}
- {type: 'filters/colorFilterChanged', payload: {color, changeType}}

**actions 应该包含描述所发生情况所需的最少信息.**

### 编写 reducers

Reducers 是接收当前的 state 和 action 作为参数并返回新的 state 结果的函数。也就是， **(state, action) => newState.**
