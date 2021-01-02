/**
 * 实现then添加多个处理函数，将this.successCallback, this.failCallback变成数组
 * 
 * 
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

module.exports = MyPromise;