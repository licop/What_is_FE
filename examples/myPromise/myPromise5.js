/**
 * 捕获错误
 * then 链式调用其他状态代码补充
 * 将then方法的参数变成可选参数
 */

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

module.exports = MyPromise;