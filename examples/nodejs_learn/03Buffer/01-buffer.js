/**
 * buffer的创建
 */

const b1 = Buffer.alloc(10)
const b2 = Buffer.allocUnsafe(10)

console.log(b1)
console.log(b2)

// from 


console.log(`-------from--------`)
// from可以接收数据源
const b3 = Buffer.from('中')
console.log(b3) 

const b4 = Buffer.from([0xe4, 0xb8, 0xad])
const b5 = Buffer.from([0x60, 0b1001, 12])
console.log(b4) 
console.log(b4.toString()) 
const b6 = Buffer.from('中')
console.log(b6)
console.log(b6.toString()) // 中

const b7 = Buffer.alloc(3)
const b8 = Buffer.from(b7)

console.log(b7)
console.log(b8)

b7[0] = 1
console.log(b7) // <Buffer 01 00 00>
console.log(b8) // <Buffer 00 00 00>
