// 高阶函数-函数作为参数
function forEach(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

let array = [1, 4, 5, 6, 7];

// forEach(array, (item) => {
//     console.log(item);
// })

function filter(array, fn) {
    let results = []
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            results.push(array[i])
        }
    }
    return results;
}
console.log(filter(array, (item) => {return item % 2 === 0}))

