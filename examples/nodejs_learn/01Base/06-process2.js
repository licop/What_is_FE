// 事件
// process.on('exit', (code) => {
//   // 只能执行同步代码
//   console.log('exit ' + code)
// })

// process.on('beforeExit', (code) => {
//   console.log('boforeExit ' + code)
// })

// // process.exit()

// console.log('done')

// 标准输入，输出， 错误
// console.log = function(data) {
//   // 可写流
//   process.stdout.write('----' + data + '\n')
// }

// console.log(11)
// console.log(22)

// const fs = require('fs')

// fs.createReadStream('test.txt')
//   .pipe(process.stdout)

// process.stdin.pipe(process.stdout)


const spawn = require('child_process').spawn;
const child = spawn('echo', ["简单的命令行交互"]);
child.stdout.pipe(process.stdout); // 将子进程的输出做为当前进程的输入，打印在控制台