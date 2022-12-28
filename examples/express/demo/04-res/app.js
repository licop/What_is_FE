// 响应对象
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // 设置响应状态码
  // res.statusCode = 201

  // res.write('a')
  // res.write('b')
  // res.write('c')
   
  res.cookie('name', 'tobi')
  res.cookie('a', 112)
  res.status(201).send('ok')
  
  //res.status(400).send('sorry!')
  // 结束响应
  // res.end('end')
})

app.listen(3001, () => {
  console.log('`Server running at http://localhost:3001/`')
})


