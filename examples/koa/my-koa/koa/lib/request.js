const url = require('url')

const request = {
  // 对象属性的访问器，写的是函数，最后只能当属性来用
  get method () {
    return this.req.method
  },

  get header () {
    return this.req.headers
  },

  get url () {
    return this.req.url
  },

  get path () {
    return url.parse(this.req.url).pathname
  },

  get query () {
    return url.parse(this.req.url, true).query
  }
}

module.exports = request
