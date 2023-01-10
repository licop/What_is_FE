const http = require('http')
const { Stream } = require('stream')
const context = require('./context')
const request = require('./request')
const { body } = require('./response')
const response = require('./response')

class Application {
  constructor() {
    this.middleware = [] // 保存用户添加的中间件函数

  }

  listen(...args) {
    const server = http.createServer(this.callback())
    server.listen(...args)
  }

  // 异步递归遍历调用中间件处理函数
  use(fn) {
    this.middleware.push(fn)
  }
 
  compose(middleware) {
    return function() {
      const dispatch = index => {
        if(index >= middleware.length) return Promise.resolve()
        const fn = middleware[index]
        return Promise.resolve(
          // TODO 上下文对象
          fn({}, () => dispatch(index + 1))
        )
      }
      // 返回第一个中间件处理函数
      return dispatch(0)
    }
  }

  callback() {
    const fnMiddleWare = this.compose(this.middleware)
    const handleRequest = (req, res) => {
      fnMiddleWare().then(() => {
        console.log('end')
        res.end('my koa2')
      }).catch(err => {
        console.log('err', err)
      })
    }

    return handleRequest
  }
}

module.exports = Application
