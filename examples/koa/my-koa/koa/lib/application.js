const http = require('http')
const { Stream } = require('stream')
const context = require('./context')
const request = require('./request')
const { body } = require('./response')
const response = require('./response')

class Application {
  constructor() {
    this.middleware = [] // 保存用户添加的中间件函数
    
    // 拷贝一份，防止多个实例对其进行修改
    this.context = Object.create(context)
    this.request = Object.create(request)
    this.response = Object.create(response)
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
    return function(context) {
      const dispatch = index => {
        if(index >= middleware.length) return Promise.resolve()
        const fn = middleware[index]
        return Promise.resolve(
          // TODO 上下文对象
          fn(context, () => dispatch(index + 1))
        )
      }
      // 返回第一个中间件处理函数
      return dispatch(0)
    }
  }
  // 构造上下文对象
  createContext(req, res) {
    // 一个实例会处理多个请求，而不同的请求应该拥有不同的上下文对象，为了避免请求期间的数据交叉污染，所以这里又对这个数据做了一份儿新的拷贝
    const context = Object.create(this.context)
    const request = (context.request = Object.create(this.request))
    const response = (context.response = Object.create(this.response))

    context.app = request.app = response.app = this
    context.req = request.req = response.req = req
    context.res = request.res = response.res = res
    request.ctx = response.ctx = context
    request.response = response
    response.request = request
    context.originalUrl = request.originalUrl = req.url
    context.state = {}
    return context
  }
  
  callback() {
    const fnMiddleWare = this.compose(this.middleware)
    const handleRequest = (req, res) => {
      // 每个请求都会创建一个独立的Context上下文对象，他们之间不会相互污染
      const context = this.createContext(req, res)
      fnMiddleWare(context).then(() => {
        respond(context)
      }).catch(err => {
        console.log('err', err)
      })
    }

    return handleRequest
  }
}

function respond (ctx) {
  const body = ctx.body
  const res = ctx.res

  if (body === null) {
    res.statusCode = 204
    return res.end()
  }

  if (typeof body === 'string') return res.end(body)
  if (Buffer.isBuffer(body)) return res.end(body)
  if (body instanceof Stream) return body.pipe(ctx.res)
  if (typeof body === 'number') return res.end(body + '')
  if (typeof body === 'object') {
    const jsonStr = JSON.stringify(body)
    return res.end(jsonStr)
  }
}

module.exports = Application
