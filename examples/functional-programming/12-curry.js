const _ = require('lodash');

function getSum(a, b, c) {
    return a + b + c;
}

const curried = curry(getSum);
console.log(curried(1, 2, 4));
console.log(curried(1, 2)(4));
console.log(curried(1)(2)(4));

function curry(fn) {
    return function curriedFn(...args) {
        console.log(args, fn, fn.length)
        // 判断实参和形参的个数
        if(args.length < fn.length) {
            return function () {
                console.log(arguments, 18)
                return curriedFn(...args.concat(Array.from(arguments)));
            }
        } 
        return fn(...args);

    }
}
