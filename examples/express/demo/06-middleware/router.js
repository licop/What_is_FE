// 路由级别的中间件
// 路由器级中间件与应用程序级中间件的工作方式相同，只不过它绑定到的实例 express.Router()。

const express = require('express')

// 1. 创建路由实例
// 路由实例相当于一个mini express实例
const router = express.Router()
const app = express()

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.send('regular')
})

router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.send('special')
})

// 给路由设定访问前缀
app.use('/name',router)

app.listen(3002, () => {
  console.log('`Server running at http://localhost:3002/`')
})
