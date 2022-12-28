// 请求对象
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(req.url, 7)
  console.log(req.method, 8)
  console.log(req.headers, 9)
  console.log(req.query)
  res.send('Hello World')
})

app.listen(3001, () => {
  console.log('`Server running at http://localhost:3001/`')
})


