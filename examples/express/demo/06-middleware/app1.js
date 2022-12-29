// 应用程序级别中间件
const express = require('express')

const app = express()

// 不做任何限定的中间件
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// 限定请求路径
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.originalUrl)
  next()
})

// next('route') 将控制权传递给下一条路由,从路由器中间件堆栈中跳过其余中间件功能
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})

// 中间件数组
function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

var logStuff = [logOriginalUrl, logMethod]
app.get('/name/:id', logStuff, function (req, res, next) {
  res.send('name Info')
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3002, () => {
  console.log('`Server running at http://localhost:3002/`')
})


