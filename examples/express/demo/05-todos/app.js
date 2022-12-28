// 实现todos
const express = require('express')
const {getDb, saveDb} = require('./db')

const app = express()

// 配置解析表单请求体：application/json
// 需要放在路由之前
app.use(express.json())
// 解析表单请求体：application/x-www-form-urlencoded
// app.use(express.urlencoded())

app.get('/todos', async (req, res) => {
  try {
    const db = await getDb()
    res.status(200).json(db.todos)
  } catch (error) {
    res.status(500).json({err: error.messsage})
  }
})

app.get('/todos/:id', async (req, res) => {
  try {
    const db = await getDb()
    // req.params 获取 id
    const todo = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
    if(!todo) {
      return res.status(404).end()
    }
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({err: error.messsage})
  }
})

app.post('/todos', async (req, res) => {
  try {
    // 1. 获取客户端请求参数
    const todo = req.body
    console.log(todo, 34)
    // 2. 数据验证
    if(!todo.title) {
      return res.status(422).json({error: 'The field title is required.'})
    }

    // 3. 把数据存储到db中
    const db = await getDb()
    const lastTodo = db.todos[db.todos.length - 1]
    todo.id = lastTodo ? lastTodo.id + 1 : 1
    db.todos.push(todo)
    console.log(todo, 49)
    await saveDb(db)
    // 4. 发送相应
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({err: error.messsage})
  }
})

app.patch('/todos/:id', async (req, res) => {
  try {
    const todo = req.body
    
    const db = await getDb()
    const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
    if(!ret) {
      return res.status(404).end()
    }
    
    Object.assign(ret, todo)
    await saveDb(db)

    res.status(201).json(ret)

  } catch (error) {
    res.status(500).json({err: error.messsage})
  }
})

app.delete('/todos/:id', async (req, res) => {
  try {
    const todoId = Number.parseInt(req.params.id)
    
    const db = await getDb()
    const index = db.todos.findIndex(todo => todo.id === todoId)
    if(index === -1) {
      return res.status(404).end()
    }
    
    db.todos.splice(index, 1)
    
    await saveDb(db)

    res.status(204).end()

  } catch (error) {
    res.status(500).json({err: error.messsage})
  }
})

app.listen(3001, () => {
  console.log('`Server running at http://localhost:3001/`')
})
