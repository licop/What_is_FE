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





