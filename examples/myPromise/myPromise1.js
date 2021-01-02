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

module.exports = MyPromise;