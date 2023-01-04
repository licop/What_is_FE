/**
 * 了解express的源码目录结构
 * express基本实现
 */

const express = require('./express')

const app = express()

app.get('/', (req, res, next) => {
  console.log('/ 1')
  next()
}, (req, res, next) => {
  console.log('/ 2')
  next()
}, (req, res, next) => {
  console.log('/ 3')
  next()
})

// app.get('/', (req, res, next) => {
//   res.end('get /')
// })

app.get('/foo', (req, res, next) => {
  console.log('foo 1')
  setTimeout(() => {
    next()
  }, 1000)
})

app.get('/foo', (req, res, next) => {
  console.log('foo 2')
  next()
})

app.get('/foo', (req, res, next) => {
  res.end('get /foo')
})

app.get('/', (req, res) => {
  res.end('get /')
})

app.get('/about', (req, res) => {
  res.end('get /about')
})

app.post('/about', (req, res) => {
  res.end('post /about')
})

app.patch('/about', (req, res) => {
  res.end('patch /about')
})

app.delete('/about', (req, res) => {
  res.end('delete /about')
})

// app.get('/ab?cd', function (req, res) {
//   res.end('ab?cd')
// })

// app.get('/ab*cd', function (req, res) {
//   res.end('ab*cd')
// })

// app.get('/ab+cd', function (req, res) {
//   res.end('ab+cd')
// })

app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log(req.params)
  res.end('/users/:userId/books/:bookId')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
