// 柯里化
// function  checkAge(min, age) {
//     return age >= min;
// }


// function  checkAge(min) {
//     return function (age) {
//         return age >= min;
//     }
// }

let checkAge = min => (age => age >= min)

let checkage18 = checkAge(18);
let checkage20 = checkAge(20);

console.log(checkage18(10));




