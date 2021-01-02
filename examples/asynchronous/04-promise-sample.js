// Promise 基本示例

// const promise = new Promise(function (resolve, reject) {
//   // 这里用于“兑现”承诺
//   console.log('promise')
//   resolve(100) // 承诺达成

//   reject(new Error('promise rejected')) // 承诺失败
// })

// promise.then(function (value) {
//   // 即便没有异步操作，then 方法中传入的回调仍然会被放入队列，等待下一轮执行
//   console.log('resolved', value)
// }, function (error) {
//   console.log('rejected', error)
// })

// console.log('end')

// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)


// function timer(str, duration) {
//   return new Promise(function(resolve, reject) {
//      setTimeout(() => resolve(str), duration);
//   })
// }

// timer('hello ', 10)
//   .then(value => timer(`${value}lagou `, 10))
//   .then(value => timer(`${value}I❤U`, 10))
//   .then(console.log)

new Promise(resolve => {
  setTimeout(() => {
    resolve('hello ')
  }, 1000)
}).then(value => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${value}lagou `)
    }, 1000)
  })
}).then(value => {
  setTimeout(() => {
    console.log(`${value}I❤U`)
  }, 1000);
})


