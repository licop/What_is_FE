// Functor 函子

// 一个容器，包裹一个值
class Container {
    // of 静态方法，可以省略 new 关键字创建对象
    static of (value) {
        return new Container(value)
    }
    
    
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return Container.of(fn(this._value))
    }
}

let r = Container.of(5)
    .map(x => x + 2)
    .map(x => x * x)

console.log(r);