const isObject = val => val !== null && typeof val === 'object'
const convert = target => isObject(target) ? reactive(target) : target
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (target, key) => hasOwnProperty.call(target, key)

// reactive 方法
export function reactive (target) {
  if(!isObject(target)) return target

  const handler = {
    get (target, key, receiver) {
      // 收集依赖
      track(target, key)
      const result = Reflect.get(target, key, receiver)
      return convert(result)
    },
    set (target, key, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver)
      let result = true
      if( oldValue !== value) {
        result = Reflect.set(target, key, value, receiver)
        // 触发更新
        trigger(target, key)
      }
      return result
    },
    deleteProperty (target, key) {
      const hasKey = hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key)
      if (hasKey && result) {
        // 触发更新
        trigger(target, key)
      }
      return result
    }
  }
  return new Proxy(target, handler)
}

let activeEffect = null
export function effect (callback) {
  activeEffect = callback
  callback() // 访问响应式对象属性，收集依赖
  activeEffect = null
}

let targetMap = new WeakMap()

// 用于收集依赖
export function track(target, key) {
  if(!activeEffect) return
  // targetMap用来记录目标对象和depsMap，使用弱引用，当目标失去引用可以销毁
  let depsMap= targetMap.get(target)
  if(!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  // depsMap记录目标对象的属性名称和dep
  // dep是一个set集合，记录该属性的多个effect
  let dep = depsMap.get(key)
  if(!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(activeEffect)
}

// 触发更新
export function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if(!depsMap) return
  const dep = depsMap.get(key)
  if(dep) {
    dep.forEach(effect => {
      effect()
    })
  }
}

// ref 方法
export function ref(raw) {
  // 判断raw是否是ref创建的对象，如果是的话直接返回
  if(isObject(raw) && raw.__v_isRef) return
  let value = convert(raw)
  const r = {
    __v_isRef: true,
    get value () {
      track(r, 'value')
      return value
    },
    set value (newValue) {
      if(newValue !== value) {
        raw = newValue
        value = convert(raw)
        trigger(r, 'value')
      }
    }
  }
  return r
}
// toRefs把proxy的所有属性都转化为一个响应式对象，使得解构的数据依然是响应式的
export function toRefs(proxy) {
  const ret = proxy instanceof Array ? new Array(proxy.length) : {}

  for (const key in proxy) {
    ret[key] = toProxyRef(proxy, key)
  }

  return ret
}

function toProxyRef(proxy, key) {
  const r = {
    __v_isRef: true,
    get value () {
      return proxy[key]
    },
    set value (newValue) {
      proxy[key] = newValue
    }
  }

  return r
}

// 计算属性
export function computed(getter) {
  const result = ref()

  effect(() => (result.value = getter()))

  return result
}
