class Observer {
  constructor (data) {
    this.walk(data)
  }

  walk (data) {
    // 判断data是否是对象
    if(!data || typeof data !== 'object') {
      return
    }
    // 遍历data对象所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive (obj, key, val) {
    let that = this
    // dep负责收集依赖，并发送通知
    let dep = new Dep()
    // 如果val是对象，把val内部的属性转化为响应式数据
    this.walk(val)

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      // 如果返回obj[key]会造成死递归，因为每次访问obj[key]都会调用get方法，造成堆栈溢出
      get () {
        // 收集依赖
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set (newValue) {
        if(newValue === val) {
          return 
        }
        val = newValue
        // 如果属性被赋予新的值是对象，newValue内部属性转化为响应式
        that.walk(newValue)
        // 发送通知
        dep.notify()
      }
    })
  }
}