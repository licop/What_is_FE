// 错误处理中间件

const express = require('express')

const app = express()

app.get('/todos', async (req, res) => {
  try {
    res.send('/todos')

  } catch (error) {
    next(error)
  }
})

// 通常会在所有路由之后配置处理404内容
app.use((req, res, next) => {
  res.status(404).send('404 not found')
})

// 在所有的中间件之后挂载错误处理中间件
app.use((err, req, res, next) => {
  console.log('error:', err)

  res.status(500).json({
    error: err.message
  })
})

app.listen(3002, () => {
  console.log('`Server running at http://localhost:3002/`')
})


