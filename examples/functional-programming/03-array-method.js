// 模拟常用高阶组件， map、every、some

// map
const map = (array, fn) => {
    let result = [];
    for(let value of array) {
        result.push(fn(value))
    }
    return result;
}

// every
const every = (array, fn) => {
    let result = true
    for(let value of array) {
        result = fn(value)
        if(!result) {
            break;
        }
    }
    return result;
}

// some
const some = (array, fn) => {
    let result = false
    for(let value of array) {
        result = fn(value)
        if(result) {
            break
        }
    }
    return result;
}

// find
const find = (array, fn) => {
    let result = undefined;
    for(let value of array) {
        if(fn(value)) {
            result = value
            break;
        }
    }
    return result;
}
// findIndex
const findIndex = (array, fn) => {
    let result = -1;
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            result = i;
            break;        
        }
    }
    return result
}

// reduce
const reduce = (array, fn, init) => {
    const result = init;
    let i = 0;
    if(result === undefined) {
        result = array[0]
        i = 1
    }

    for(i; i < array.length; i++) {
        result = fn(result, array[i], i, array)
    }
    return result;
}

// sort
// 冒泡实现
const sort = (array, fn) => {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 1; j < array.length; j++) {
            if(fn(array[j], array[j + 1])) {
                const element = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = element
            }
        }
    }
}

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a, b) => b - a);
// console.log(array1);


