const _ = require('lodash');
const arr = ['jack', 'tom', 'licop', 'kate'];

console.log(_.first(arr))
console.log(_.last(arr))
console.log(_.toUpper(arr))
console.log(_.reverse(arr))
console.log(_.reverse(arr))

_.each(arr, (item, index) => {
    console.log(item, index)
})

