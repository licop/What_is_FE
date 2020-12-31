const _ = require('lodash');

function getSum(a, b, c) {
    return a + b + c;
}

const curried = _.curry(getSum);
console.log(curried(1, 2, 4));
console.log(curried(1, 2)(4));
console.log(curried(1)(2)(4));


