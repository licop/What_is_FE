# Promise 源码实现

用了`Promise`这么久，应该对`Promise`使用方法和相关属性很熟悉了，本文将一步一步编写`Promise`的源码，实现其基本功能。

## Promise 类核心逻辑实现

在写代码先看一下 Promise 的一些基础特性：

- `Promise` 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
- `Promise`中有三种状态 分别为 成功 `fulfilled` 失败 `rejected` 等待 `pending`
  其中状态只能从 `pending` -> `fulfilled` 或 `pending` -> `rejected` 一旦状态确定就不可更改
- `resolve` 和 `reject` 函数是用来更改状态的
- `then` 方法内部做的事情就判断状态 如果状态是成功 调用成功的回调函数 如果状态是失败 调用失败回调函数 then 方法是被定义在原型对象中的
- `then` 成功回调有一个参数 表示成功之后的值 then 失败回调有一个参数 表示失败后的原因
- 同一个 `promise` 对象下面的 `then` 方法是可以被调用多次的
- `then` 方法是可以被链式调用的, 后面 `then` 方法的回调函数拿到值的是上一个 `then` 方法的回调函数的返回值

由以上特性实现 `Promise` 类的核心逻辑, 除了`then` 方法链式调用功能

```
const PENDING = 'pending'; // 等待
const FULFILLED = 'fullilled' // 成功
const REJECTED = 'rejected' // 失败

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  // promise 状态
  status = PENDING;
  // 成功之后的值
  value = undefined;
  // 失败之后的值
  reason = undefined;


  resolve = (value) => {
    if(this.status !== PENDING) return;
    // 将状态更改为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value
  }

  reject = (reason) => {
    if(this.status !== PENDING) return;
    // 将状态更改为失败
    this.status = REJECTED;
    this.reason = reason;
  }

  then = (successCallback, failCallback) => {
    // 判断状态
    if(this.status === FULFILLED) {
      successCallback(this.value);
    } else if(this.status === REJECTED) {
      failCallback(this.reason);
    }
  }
}

```

## 加入异步逻辑

可以发现以上代码当`executor`内包含异步代码是有问题的，`then`方法开始执行后，`resolve`方法调用还没改变状态，所以异步函数没有调用。

`then` 方法加入异步逻辑,等异步任务执行完在执行回调函数，将回调函数在 `pending` 状态下存储起来，等待成功或失败之后再调用。

```
class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败之后的值
    reason = undefined
    // 成功回调
    successCallback = undefined;
    // 失败回调
    failCallback = undefined;

    resolve = (value) => {
        if(this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value
        // 判断成功回调是否存在，如果存在调用
        this.successCallback && this.successCallback(this.value)
    }

    reject = (reason) => {
        if(this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        this.reason = reason;
        // 判断失败回调是否存在，如果存在调用
        this.failCallback && this.failCallback(this.value)
    }

    then = (successCallback, failCallback) => {
        // 判断状态
        if(this.status === FULFILLED) {
            successCallback(this.value);
        } else if(this.status === REJECTED) {
            failCallback(this.reason);
        } else {
            // 等待
            // 将成功回调和失败回调存储起来
            this.successCallback = successCallback;
            this.failCallback = failCallback;
        }
    }
}

```

## then 添加多个处理函数

目前`Promise`只支持一个 then 方法。

实现 `then` 添加多个处理函数，将 `this.successCallback`, `this.failCallback` 变成数组

```
class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败之后的值
    reason = undefined
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];

    resolve = (value) => {
        if(this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value
        // 判断成功回调是否存在，如果存在调用
        while(this.successCallback.length) this.successCallback.shift()(this.value);
    }

    reject = (reason) => {
        if(this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        this.reason = reason;
        // 判断失败回调是否存在，如果存在调用
        while(this.failCallback.length) this.failCallback.shift()(this.reason);

    }

    then = (successCallback, failCallback) => {
        // 判断状态
        if(this.status === FULFILLED) {
            successCallback(this.value);
        } else if(this.status === REJECTED) {
            failCallback(this.reason);
        } else {
            // 等待
            // 将成功回调和失败回调存储起来
            this.successCallback.push(successCallback);
            this.failCallback.push(failCallback);
        }
    }
}
```

## then 方法的链式调用

实现 `then` 方法的链式调用，并将 `then` 方法的返回值传递给下一个 `then` 方法

- 将 `then`返回一个 promise 对象，判断回调函数返回的是普通值还是 promise 对象
- 当 `promise.then` 返回和自身相同的 `promise` 抛出错误

```
class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败之后的值
    reason = undefined
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];

    resolve = (value) => {
        if(this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value
        // 判断成功回调是否存在，如果存在调用
        while(this.successCallback.length) this.successCallback.shift()(this.value);
    }

    reject = (reason) => {
        if(this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        this.reason = reason;
        // 判断失败回调是否存在，如果存在调用
        while(this.failCallback.length) this.failCallback.shift()(this.reason);

    }

    then = (successCallback, failCallback) => {
        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if(this.status === FULFILLED) {
                // 变成异步代码，等promise2主流程执行完后再调用，可获取promise2
                setTimeout(() => {
                    let x = successCallback(this.value);
                    // 判断x的值是普通值还是promise对象
                    // 如果是普通值 直接调用resolve
                    // 如果是promise对象 查看promise对象的返回结果
                    // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                    resolvePromise(promise2, x, resolve, reject)
                }, 0);

            } else if(this.status === REJECTED) {
                failCallback(this.reason);
            } else {
                // 等待
                // 将成功回调和失败回调存储起来
                this.successCallback.push(successCallback);
                this.failCallback.push(failCallback);
            }
        })

        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 当promise.then 返回和自身相同promise报错
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        // 普通值
        resolve(x)
    }
}
```

## 捕获错误 & then 方法完善

- 在执行器和回调函数添加 try catch 异常捕获，当发成错误是则直接调用 reject
- 将 then 方法的参数变成可选参数
  - promise.then().then().then(value => console.log(value)) 最后的`then`方法的 value 可以接收到 promise 的返回值

```
class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch(e) {
            this.reject(e)
        }
    }

    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败之后的值
    reason = undefined
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];

    resolve = (value) => {
        if(this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value
        // 判断成功回调是否存在，如果存在调用
        while(this.successCallback.length) this.successCallback.shift()();
    }

    reject = (reason) => {
        if(this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        this.reason = reason;
        // 判断失败回调是否存在，如果存在调用
        while(this.failCallback.length) this.failCallback.shift()();

    }

    then = (successCallback, failCallback) => {
        successCallback = successCallback || (value => value);
        failCallback = failCallback || (reason => {throw reason});

        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if(this.status === FULFILLED) {
                // 变成异步代码，等promise2主流程执行完后再调用，可获取promise2
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value);
                        // 判断x的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象的返回结果
                        // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }

                }, 0);

            } else if(this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason);
                        // 判断x的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象的返回结果
                        // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }

                }, 0);

            } else {
                // 等待
                // 将成功回调和失败回调存储起来
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value);
                            // 判断x的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象的返回结果
                            // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }

                    }, 0);
                });
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason);
                            // 判断x的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象的返回结果
                            // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }

                    }, 0);
                });
            }
        })

        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 当promise.then 返回和自身相同promise报错
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    if(x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        // 普通值
        resolve(x)
    }
}
```

## 添加方法，完善 promise 功能

给 MyPromise 类添加`all`和`resolve`静态方法，和`catch`和`finally`方法，完善 promise 功能，使其更接近真实的 Promise 类，这样我们自己 Promise 类就大功告成了

```
const PENDING = 'pending'; // 等待
const FULFILLED = 'fullilled' // 成功
const REJECTED = 'rejected' // 失败

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch(e) {
            this.reject(e)
        }
    }

    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败之后的值
    reason = undefined
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];

    resolve = (value) => {
        if(this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value
        // 判断成功回调是否存在，如果存在调用
        while(this.successCallback.length) this.successCallback.shift()();
    }

    reject = (reason) => {
        if(this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        this.reason = reason;
        // 判断失败回调是否存在，如果存在调用
        while(this.failCallback.length) this.failCallback.shift()();

    }

    then = (successCallback, failCallback) => {
        successCallback = successCallback || (value => value);
        failCallback = failCallback || (reason => {throw reason});

        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if(this.status === FULFILLED) {
                // 变成异步代码，等promise2主流程执行完后再调用，可获取promise2
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value);
                        // 判断x的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象的返回结果
                        // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }

                }, 0);

            } else if(this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason);
                        // 判断x的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象的返回结果
                        // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }

                }, 0);

            } else {
                // 等待
                // 将成功回调和失败回调存储起来
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value);
                            // 判断x的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象的返回结果
                            // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }

                    }, 0);
                });
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason);
                            // 判断x的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象的返回结果
                            // 再根据promise对象的返回据结果决定调用resolve还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }

                    }, 0);
                });
            }
        })

        return promise2;
    }
    // 无论结果返回成功还是失败都要调用一次
    finally(callback) {
        // 通过then方法得到当前promise的状态
        return this.then(value => {
            return MyPromise.resolve(callback()).then(() => value)
        }, reason => {
            return MyPromise.resolve(callback()).then(() => {throw reason})
        })
    }

    catch(failCallback) {
        return this.then(undefined, failCallback)
    }

    static all(array) {
        let result = [];
        let index = 0

        return new MyPromise((resolve, reject) => {
            function addData(key, value) {
                result[key] = value
                index++
                if(index === array.length) {
                    resolve(result);
                }
            }

            for(let i = 0; i < array.length; i++) {
                let current = array[i];
                if(current instanceof MyPromise) {
                    // promise对象
                    current.then(value => addData(i, value), reason => reject(reason))
                } else {
                    // 普通值
                    addData(i, array[i])
                }
            }
        })
    }

    static resolve(value) {
        if(value instanceof MyPromise) return value;
        return new MyPromise(resolve => resolve(value))
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 当promise.then 返回和自身相同promise报错
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        // 普通值
        resolve(x)
    }
}

```
