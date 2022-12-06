// 将fs的异步调用方法转换为Promise, async/await,使得代码变得可读性好
const fs = require('fs')
const path = require('path')

// 将一个异步方法转换成 Promise
function promisify(fn) {
  return function (...args) {
      return new Promise((resolve, reject) => {
          fn.call(null, ...args, (err, data) => err ? reject(err) : resolve(data))
      });
  }
}

const readFile = promisify(fs.readFile)

readFile(path.resolve('data.txt'), 'utf-8').then(data => {
  console.log(data)
})



// fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
//   console.log(err) 
//   if (!null) {
//     console.log(data)
//   }
// }) 
