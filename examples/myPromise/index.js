/*
  1. Promise 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
  2. Promise 中有三种状态 分别为 成功 fulfilled 失败 rejected 等待 pending
    pending -> fulfilled
    pending -> rejected
    一旦状态确定就不可更改
  3. resolve和reject函数是用来更改状态的
    resolve: fulfilled
    reject: rejected
  4. then方法内部做的事情就判断状态 如果状态是成功 调用成功的回调函数 如果状态是失败 调用失败回调函数 then方法是被定义在原型对象中的
  5. then成功回调有一个参数 表示成功之后的值 then失败回调有一个参数 表示失败后的原因
  6. 同一个promise对象下面的then方法是可以被调用多次的
  7. then方法是可以被链式调用的, 后面then方法的回调函数拿到值的是上一个then方法的回调函数的返回值
*/

const MyPromise = require('./myPromise6');
let promise = new MyPromise((resolve, reject) => {
  // throw new Error('excutor error')

  resolve('成功');
  // setTimeout(() => {
  //   resolve('成功.....');
  // }, 2000);
  // reject('失败')
})

// promise.then(value => {
//   console.log(value); 
// })

// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve('other')
//   })
// }

// promise.then(value => {
//   console.log(value)
//   return other();
// }).then((data) => {
//   console.log(data);
// })

// promise.then(value => {
//   console.log(value)
//   return 'aaaaa'
// }, reason => {
//   console.log(reason)
//   return 10000
// }).then((data) => {
//   console.log(data);
// })

// promise.then().then().then(value => console.log(value), reason => console.log(reason));


// 调用自身报错
// let p1 = promise.then(value => {
//   console.log(value)
//   return p1;
// })
// p1.then((data) => {
//   console.log(data);
// }, reason => {
//   console.log(reason.message)
// })

// promise.then(value => {
//   throw new Error('promise error')
// }, reason => {
//   console.log(reason)
// }).then(value => {
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })

// function p1 () {
//   return new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('p1')
//     }, 2000)
//   })
// }
// function p2 () {
//   return new MyPromise(function (resolve, reject) {
//     reject('失败')
//     // resolve('成功');  
//   })
// }

// p2()
//   .then(value => console.log(value))
//   .catch(reason => console.log(reason))

function p1 () {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1 resolve')
    }, 2000)
  })
}

function p2 () {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p2 resolve')
    }, 1000)
  })
}

MyPromise.all(['a', 'b', p1(), p2(), 'c']).then(result => {
  console.log(result, 110)
})

MyPromise.race(['a', p1(), p2()]).then(result => {
  console.log(result, 110)
})

// MyPromise.resolve(100).then(value => console.log(value))
// MyPromise.resolve(p1()).then(value => console.log(value))

// MyPromise.reject(100).then(null, function (s) {
//   console.log(s)
// });
// Promise.reject(p1()).then(null, function (s) {
//   console.log(s)
// });
// MyPromise.reject('出错了')
// .catch(e => {
//   console.log(e === '出错了')
// })
// p2().finally(() => {
//   console.log('finally')
//   return p1();
// }).then(value => {
//   console.log(value, 120)
// }, reason => {
//   console.log(reason)
// })

// p2().then(value => {
//   console.log(value)
// }).catch(reason => {
//   console.log(reason)
// })

