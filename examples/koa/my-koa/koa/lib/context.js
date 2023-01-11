const context = {
  // get method () {
  //   return this.request.method
  // },

  // get url () {
  //   return this.request.url
  // }
}

defineProperty('request', 'method')
defineProperty('request', 'url')
defineProperty('response', 'body')


// 处理Context中的代理别名
function defineProperty (target, name) {
  console.log(target, name, 16)
  // context.__defineGetter__(name, function () {
  //   return this[target][name]
  // })
  Object.defineProperty(context, name, {
    get () {
      return this[target][name]
    },

    set (value) {
      this[target][name] = value
    }
  })
}

module.exports = context
