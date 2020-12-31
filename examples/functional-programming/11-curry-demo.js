// 柯里化案例
const _ = require('lodash');

const match = _.curry(function (reg, str) {
    return str.match(reg);
})

const haveSpace = match(/\s+/g);
const haveNumber = match(/\d+/g);

console.log(haveSpace('heve space'));
console.log(haveNumber('abc'));

const filter = _.curry(function (fn, arr) {
    return arr.filter(fn);
})

console.log(filter(haveSpace, ['licop', 'lic op']));

const findSpace = filter(haveSpace);
const finNumber = filter(haveNumber);

console.log(findSpace(['licop', 'lic op']));