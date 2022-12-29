// 第三方中间件使用
const express = require('express')
const morgan = require('morgan')

const app = express()

// 输出http日志
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3002, () => {
  console.log('`Server running at http://localhost:3002/`')
})
