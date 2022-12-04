let buf = Buffer.alloc(6)

// 一个汉字占三个字节

// fill: 使用数据填充Buffer
// console.log(`------------fill`)
// buf.fill('123')
// console.log(buf)
// console.log(buf.toString()) // 123123 填不满会自重复补充填满

// write： 向buffer中写入数据
// buf.write('123', 1, 2) // 1, 4是写入的初始位置和结束位置
// console.log(buf)
// console.log(buf.toString()) // 不会重复写入

// toString： 从buffer中提取数据
// buf = Buffer.from('前端大牛')
// console.log(buf)
// console.log(buf.toString('utf-8', 3, 9)) // 端大

// slice 截取buffer
// buf = Buffer.from('前端大牛')
// let b1 = buf.slice(3) 
// console.log(b1)
// console.log(b1.toString()) // 端大牛  
 
// indexOf 在buffer中查找数据是否存在
/* buf = Buffer.from('zce爱前端，爱拉勾教育，爱大家，我爱所有')
console.log(buf)
console.log(buf.indexOf('爱qc', 4)) */

// copy 拷贝buffer中的数据

console.log(`------------------copy`)
let b3 = Buffer.alloc(6)
let b4 = Buffer.from('前端')

b4.copy(b3, 3, 3, 6)
console.log(b3.toString(), b3)
console.log(b4.toString(), b4)