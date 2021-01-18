class Vue {
  constructor (options) {
    // 1. 通过属性保存选项中的数据
    this.$options = options || {};
    this.$data = options.data || {};
    this.$methods= options.methods || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    
    // 把data中的成员转换成getter和setter，注入到vue实例中
    this._proxyData(this.$data)
    // 将methods里的方法this绑定到Vue实例，使其能够获取Vue的属性和方法
    this._bindMethods(options.methods)
    // 调用observer对象，使用getter和setter监听数据读取和变更
    new Observer(this.$data)
    // 调用compiler对象，解析指令和差值表达式
    new Compiler(this)
  }
  
  _proxyData (data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return data[key]
        },
        set (newValue) {
          if(newValue === data[key]) {
            return 
          }
          data[key] = newValue
        }
      })
    })
  }
  
  _bindMethods (methods) {
    Object.keys(methods).forEach(key => {
      this.$methods[key] = methods[key].bind(this)
    })
  }
}