// 页面中所有依赖数据的地方都需要创建一个Watcher对象负责更新视图
class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 回调函数负责更新视图
    this.cb = cb
    
    // 把watcher对象记录到Dep类的静态属性target中 ?为何添加到Dep中，添加到Watcher也可工作
    Dep.target = this;
    // 触发get方法，在get方法中调用addSub
    this.oldValue = vm[key]

    Dep.target = null;
  }

  // 当数据发生变化的时候更新视图
  update () {
    let newValue = this.vm[this.key]
    if (this.oldValue === newValue) {
      return 
    }
    // 更新视图
    this.cb(newValue)
  }
} 