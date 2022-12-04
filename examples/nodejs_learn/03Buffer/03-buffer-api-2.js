
let b1 = Buffer.from('前端')
let b2 = Buffer.from('大牛')

let b = Buffer.concat([b1, b2], 9)
let b4 = Buffer.concat([b1, b2], 15)
console.log(b)
// 一个汉字占据三个字节
console.log(b.toString()) // 拉勾教
console.log(b4)
console.log(b4.toString()) // 拉勾教育

// isBuffer
let b3 = '123'
console.log(Buffer.isBuffer(b3))
