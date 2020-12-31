// 记忆函数
const _ = require('lodash');

function getArea(r) {
    console.log('r:', r)
    return Math.PI*r*r;
}

// let getAreaWithMemoize = _.memoize(getArea);
// console.log(getAreaWithMemoize(4));
// console.log(getAreaWithMemoize(5));
// console.log(getAreaWithMemoize(4));

// 模拟memorize
function memoize(fn) {
    let cache = {};
    
    return function () {
        let key = JSON.stringify(arguments);
        cache[key] = cache[key] || fn.apply(fn, arguments);

        return cache[key]
    }
}
let getAreaWithMemoize = memoize(getArea);
console.log(getAreaWithMemoize(4));
console.log(getAreaWithMemoize(5));
console.log(getAreaWithMemoize(4));
