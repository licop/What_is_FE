// 纯函数和不纯函数
// slice是纯函数/splice是不纯函数

let array = [1, 3, 4, 6, 7];

console.log(array.slice(0, 1)) // [ 1 ]
console.log(array) // [ 1, 3, 4, 6, 7 ]
// console.log(array.splice(0, 1)); // [ 1 ]
// console.log(array); // [ 3, 4, 6, 7 ]



