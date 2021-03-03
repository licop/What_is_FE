<template>
  <section id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus
        v-model="input"
        @keyup.enter="addTodo"
      >
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" v-model="allDone" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodos"
          :key="todo"
          :class="{ editing: todo === editingTodo, completed: todo.completed }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.text }}</label>
            <button class="destroy" @click="remove(todo)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-editing-focus="todo === editingTodo"
            v-model="todo.text"
            @keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          >
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="count">
      <span class="todo-count">
        <strong>{{ remainingCount }}</strong> {{ remainingCount > 1 ? 'items' : 'item' }} left
      </span>
      <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="count > remainingCount">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import './assets/index.css'
import useLocalStorage from './utils/useLocalStorage'
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

const storage = useLocalStorage()

// 1. 添加代办事项
const useAdd = todos => {
  const input = ref('')
  const addTodo = () => {
    const text = input.value && input.value.trim()
    if(text.length === 0) return
    todos.value.unshift({
      text,
      completed: false
    })
    input.value = ''
  }
  return {
    input,
    addTodo
  }
}

// 2. 删除代办事项
const useRemove = todos => {
  const remove = todo => {
    const index = todos.value.indexOf(todo)
    todos.value.splice(index, 1)
  }
  const removeCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.completed)
  }
  return {
    remove,
    removeCompleted
  }
}

// 3. 编辑待办项
const useEdit = remove => {
  let beforeEditingText = ''
  const editingTodo = ref(null)

  const editTodo = todo => {
    beforeEditingText = todo.text
    editingTodo.value = todo
  }
  const doneEdit = todo => {
    if(!editingTodo.value) return
    todo.text = todo.text.trim()
    todo.text || remove(todo)
    editingTodo.value = null
  }
  const cancelEdit = todo => {
    editingTodo.value = null
    todo.text = beforeEditingText
  }
  return {
    editingTodo,
    editTodo,
    doneEdit,
    cancelEdit
  }
}

// 4. 切换待办项，完成状态
const useFilter = todos => {
  const allDone = computed({
    get () {
      return !todos.value.filter(todo => !todo.completed).length
    },
    set (value) {
      todos.value.forEach(todo => {
        todo.completed = value
      })
    }
  })

  
  const filter = {
    all: list => list,
    active: list => list.filter(todo => !todo.completed),
    completed: list => list.filter(todo => todo.completed)
  }
  
  const type = ref('all')
  const filteredTodos = computed(() => filter[type.value](todos.value))
  const remainingCount = computed(() => filter.active(todos.value).length)
  const count = computed(() => todos.value.length)
  const onHashChange = () => {
    const hash = window.location.hash.replace('#/', '')
    if(filter[hash]) {
      type.value = hash
    } else {
      type.value = 'all'
      window.location.hash = ''
    }
  }

  onMounted(() => {
    window.addEventListener('hashchange', onHashChange)
    onHashChange()
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', onHashChange)
  })

  return {
    count,
    filteredTodos,
    allDone,
    remainingCount
  }
}

// 5. 存储待办事项
const useStorage = () => {
  const KEY = 'TODOKEYS'
  const todos = ref(storage.getItem(KEY) || [])
  // 监视todos的变化
  watchEffect(() => {
    storage.setItem(KEY, todos.value)
  })

  return todos
}

export default {
  name: 'App',
  setup () {
    const todos = useStorage()
    const { remove } = useRemove(todos)
    
    return {
      ...useAdd(todos),
      ...useRemove(todos),
      ...useEdit(remove),
      ...useFilter(todos),
      todos
    }
  },
  // 自定义指令，编辑的时候自动获取焦点
  directives: {
    editingFocus: (el, binding) => {
      // binding.value 为 todo === editingTodo 
      binding.value && el.focus()
    }
  }
}
</script>

<style>
</style>
