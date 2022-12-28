// 路由

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  res.send('post')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a delete request at /user')
})

app.listen(3001, () => {
  console.log('`Server running at http://localhost:3001/`')
})

