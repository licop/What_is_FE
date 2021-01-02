/**
 * 加入异步逻辑,等异步任务执行完在执行回调函数，将回调函数在pending状态下存储起来，等待成功或失败之后再调用
 */

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

module.exports = MyPromise;