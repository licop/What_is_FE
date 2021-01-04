// let 声明的成员只会在所声明的块中生效 -------------------------------------------
// if (true) {
//   // var foo = 'zce'
//   let foo = 'zce'
// }
// console.log(foo) //   ReferenceError:

// let 在 for 循环中的表现 ---------------------------------------------------
// for (var i = 0; i < 3; i++) {
//   for (var i = 0; i < 3; i++) {
//     console.log(i)
//   }
//   console.log('内层结束 i = ' + i)
// }

// for (var i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i)
//   }
//   console.log('内层结束 i = ' + i)
// }

// let 应用场景：循环绑定事件，事件处理函数中获取正确索引 -----------------------------------------------------
// 打印的i都是3，i是全局作用域中的, 所以打印的都是循环后累加的3

// var elements = [{}, {}, {}]
// for (var i = 0; i < elements.length; i++) {
//   elements[i].onclick = function () {
//     console.log(i)
//   }
// }
// elements[2].onclick()

// 使用闭包的方法解决
// 借助函数作用域来摆脱全局作用域产生的影响
// var elements = [{}, {}, {}]
// for (var i = 0; i < elements.length; i++) {
//   elements[i].onclick = (function (i) {
//     return function () {
//       console.log(i)
//     }
//   })(i)
// }
// elements[1].onclick()

// var elements = [{}, {}, {}]
// for (let i = 0; i < elements.length; i++) {
//   elements[i].onclick = function () {
//     console.log(i)
//   }
// }
// elements[0].onclick()

// for 循环会产生两层作用域 ----------------------------------
for (let i = 0; i < 3; i++) {
  let i = 'foo'
  console.log(i)
}

// let i = 0

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }

// i++

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }

// i++

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }

// i++


// let 修复了变量声明提升现象 --------------------------------------------

// a = 2
// var a;
// console.log(a)

// console.log(foo)
// var foo = 'zce'

console.log(foo)
let foo = 'zce'

// var a = []
// for(let i = 0; i < 10; i++) {
//     a[i] = function() {
//         console.log(i);
//     }
// }
// a[6]() // 6

// foo();

// let foo = function bar() {
//     console.log(a)
//     var a = 2;
// }



