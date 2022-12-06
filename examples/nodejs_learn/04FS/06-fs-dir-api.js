const fs = require('fs')

// 一、access 
// 查看文件和目录是否有操作权限
fs.access('a/b', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('有操作权限')
  }
})

// 二、stat 
// 获取文件和目录信息
fs.stat('a.txt', (err, statObj) => {
  // console.log(statObj)
  console.log(statObj.size)
  console.log(statObj.isFile()) // true
  console.log(statObj.isDirectory()) // false
})


// 三、mkdir 新建文件夹目录
// recursive 可以支持创造嵌套的文件的
// fs.mkdir('a/b/c', {recursive: true}, (err) => {
//   if (!err) {
//     console.log('创建成功')
//   }else{
//     console.log(err)
//   }
// })

// 四、rmdir 删除目录
// 
// fs.rmdir('a', {recursive: true}, (err) => {
//   if (!err) {
//     console.log('删除成功')
//   } else {
//     console.log(err)
//   }
// })

// 五、readdir 读取目录，获取目录中的内容
// fs.readdir('a', (err, files) => {
//   console.log(files)
// }) 

// 六、unlink 删除指定文件
fs.unlink('a/a.txt', (err) => {
  if (!err) {
    console.log('删除成功')
  }
})