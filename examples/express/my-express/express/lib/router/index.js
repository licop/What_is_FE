const url = require('url')
const methods = require('methods')
const Layer = require('./layer')
const Route = require('./route')

function Router() {
  this.stack = []
}

methods.forEach(method => {
  Router.prototype[method] = function(path, handlers) {
    const route = new Route()
    const layer = new Layer(path, route.dispatch.bind(route))
    layer.route = route
    this.stack.push(layer)
    route[method](path, handlers)
  }
})

Router.prototype.handle = function(req, res) {
  const { pathname } = url.parse(req.url)
  const method = req.method.toLowerCase()
  
  let index = 0
  const next = () => {
    if(index >= this.stack.length) {
      return res.end(`Can not get ${pathname}`)
    }

    const layer = this.stack[index++]
    const match = layer.match(pathname)

    if(match) {
      req.params = req.params || {}
      Object.assign(req.params, layer.params)


      // 顶层判断请求路径，内层判断请求方法
      return layer.handler(req, res, next)
    }
    next()
  }
  next()
}

Router.prototype.use = function(path, handlers) {
  if (typeof path === 'function') {
    handlers.unshift(path) // 处理函数
    path = '/' // 任何路径都以它开头的
  }

  handlers.forEach(handler => {
    const layer = new Layer(path, handler)
    layer.isUseMiddleware = true
    this.stack.push(layer)
  })
}

module.exports = Router
