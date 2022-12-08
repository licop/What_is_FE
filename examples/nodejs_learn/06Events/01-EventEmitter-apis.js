const EventEmitter = require('events')

const ev = new EventEmitter()

// on 
// ev.on('事件1', () => {
//   console.log('事件1执行了---2')
// })

// ev.on('事件1', () => {
//   console.log('事件1执行了')
// })

// // emit
// ev.emit('事件1')
// ev.emit('事件1')

// once 
// ev.once('事件1', () => {
//   console.log('事件1执行了')
// })
// ev.once('事件1', () => {
//   console.log('事件1执行了--2')
// })

// ev.emit('事件1')
// ev.emit('事件1')

// off
// let cbFn = (...args) => {
//   console.log(args)
// }
// ev.on('事件1', cbFn) 

// ev.emit('事件1')
// ev.off('事件1', cbFn)
// // 传入参数
// ev.emit('事件1', 1, 2, 3)


// 观察this
// ev.on('事件1', function () {
//   console.log(this)
// })
// ev.on('事件1', function () {
//   console.log(2222)
// })

// ev.on('事件2', function () {
//   console.log(333)
// })

// ev.emit('事件1')


// 内置核心模块继承了Eventmitter
// const fs = require('fs')

// const crt = fs.createReadStream()
// crt.on('data')

// 在 Stream 模块中的实现
// const EE = require('events');
// const util = require('util');

// function Stream() {
//   EE.call(this);
// }
// util.inherits(Stream, EE);



ev.on("起床", function(time) {
    console.log(`早上 ${time} 开始起床，新的一天加油！`)
    //console.log(`关注公众号Nodejs技术栈，早上 ${time} 点开始起床阅读，从 Node.js 技术栈`);
});

ev.emit("起床", "6:00");
