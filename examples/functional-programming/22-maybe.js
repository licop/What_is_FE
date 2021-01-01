// MayBe函子
class MayBe {
    static of(value) {
        return new MayBe(value);
    }

    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }
    
    isNothing() {
        return this._value === undefined || this._value === null
    }
}

// let r = MayBe.of('Hello world')
//       .map(x => x.toUpperCase())
// console.log(r)

// let r = MayBe.of(null)
//       .map(x => x.toUpperCase())
// console.log(r)

let r = MayBe.of('Hello world')
      .map(x => x.toUpperCase())
      .map(x => null)
      .map(x => x.split(' '))
console.log(r)

