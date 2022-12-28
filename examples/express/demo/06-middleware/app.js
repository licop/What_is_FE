const express = require('express')

const app = express()

// 中间件的顺序很重要，从上往下依次匹配
app.use((req, res, next) => {
  // 中间件可以修改req和res，之后的路由也会改变
  req.foo = 'bar'
  res.abc = () => {
    console.log('abc')
  }

  console.log(req.method, req.url, Date.now())
  // 交出执行权，往后继续执行
  next()
})

// 内置中间件
app.use(express.json())

app.get('/', (req, res) => {
  console.log(req.foo)
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.abc()
  res.send('about')
})

app.get('/login', (req, res) => {
  res.send('login')
})

app.listen(3001, () => {
  console.log('`Server running at http://localhost:3001/`')
})
