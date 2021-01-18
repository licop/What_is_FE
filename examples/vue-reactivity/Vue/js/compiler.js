class Compiler { 
  constructor (vm) {
    this.el = vm.$el
    this.vm = vm
    this.compile(this.el)
  }
  // 编译模板，处理本文节点和元素节点
  compile (el) {
    let childNodes = el.childNodes;
    // 伪数组变成数组
    Array.from(childNodes).forEach(node => {
      if(this.isTextNode(node)) {
        this.compileText(node)
      } else if(this.isElementNode(node)) {
        this.compileElement(node)
      }
      // 判断node是否有子节点，如果有递归调用compiler
      if(node.childNodes && node.childNodes.length !== 0) {
        this.compile(node)
      }
    })
  }
  // 编译元素节点，处理指令
  compileElement (node) {
    // 遍历所有的属性节点，判断是否是指令
    Array.from(node.attributes).forEach(attr => {
      // 判断是否是指令
      let attrName = attr.name
      if(this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node, key, attrName)
      }
    })
  }
  
  update (node, key, attrName) {
    let updateFn = this[attrName.split(':')[0] + 'Updater']
    updateFn && updateFn(node, key, attrName)
  }
  
  // 处理v-text指令
  textUpdater = (node, key) => {
    node.textContent = this.vm[key]
    new Watcher(this.vm, key, () => {
      node.textContent = this.vm[key]
    })
  }
  
  // 处理v-model指令
  modelUpdater = (node, key) => {
    node.value = this.vm[key]
    new Watcher(this.vm, key, () => {
      node.value = this.vm[key]
    })

    // 双向绑定, 语法糖
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  // 处理v-html指令
  htmlUpdater = (node, key) => {
    node.innerHTML = this.vm[key]
    
    new Watcher(this.vm, key, () => {
      node.innerHTML = this.vm[key]
    })
  }
  
  // 处理v-on指令
  onUpdater = (node, key, attrName) => {
    const event = attrName.split(':')[1]
    // 匹配函数名和参数
    const reg = /(.+?)\((.+?|\s?)\)/
    if(reg.test(key)) {
      let fnKey = RegExp.$1.trim()
      let args = RegExp.$2.trim()
      if(args) {
        args = args.split(',').map(arg => {
          let _arg = arg.replace(/\s+/, '')
           // todo 这里只实现了参数是数字，字符串和data里属性的情形
          if(_arg.startsWith('"') ||  _arg.startsWith("'")) {
            return _arg.slice(1, _arg.length - 1)
          } else if(Number(_arg)) {
              return Number(_arg)
          }
          return this.vm.$data[_arg] 
        })
      } else {
        args = []
      }
      node.addEventListener(event, () => { this.vm.$methods && this.vm.$methods[fnKey](...args) });
    }
  }

  // 编译文本节点，处理差值表达式 {{ msg }}
  compileText (node) {
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      // 将花括号里的值提取出来,正则表达式里使用小括号包裹
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])

      // 创建watcher对象，当数据改变更新视图
      new Watcher(this.vm, key, (newValue) => {
        console.log(key, newValue);
        node.textContent = newValue
      })
    }
  }
  // 判断元素属性是否是执行
  isDirective (attrName) {
    return attrName.startsWith('v-')
  }
  // 判断节点是否是本文节点
  isTextNode (node) {
    return node.nodeType === 3
  }
  // 判断节点是否是元素节点
  isElementNode (node) {
    return node.nodeType === 1
  }
}