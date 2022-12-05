const fs = require('fs')
const path = require('path')

// readFile  读取文件
// fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
//   console.log(err) 
//   if (!null) {
//     console.log(data)
//   }
// }) 



// writeFile 写入
// fs.writeFile('data.txt', 'node.js', {
//   mode: 438, // 设置操作权限
//   flag: 'w+', // 写入方式
//   encoding: 'utf-8'
// }, (err) => {
//   if (!err) {
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       console.log(data)
//     })
//   }
// })

// appendFile 写入 添加非覆盖
// fs.appendFile('data.txt', 'hello node.js',{},  (err) => {
//   console.log('写入成功')
// }) 

// copyFile  拷贝文件
// fs.copyFile('data.txt', 'test1.txt', () => {
//   console.log('拷贝成功')
// }) 

// watchFile 文件监控操作
fs.watchFile('data.txt', {
  interval: 20 // 20ms监控一次
}, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})
