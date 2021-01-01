// lodash 和 lodash/fp 模块中map方法的区别

const _ = require('lodash');

console.log(_.map(['23', '8', '10', '12'], parseInt)); // [ 23, NaN, 2 ]

// parseInt('23', 0, array);
// parserInt('8', 1, array)
// parserInt('10', 2, array)


// fp.map只给函数传递一个参数
const fp = require('lodash/fp');
console.log(fp.map(parseInt)(['23', '8', '10', '12']))