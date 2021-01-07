/**
 * 深拷贝
 */

 const obj1 = {
    age: 20,
    name: 'licop',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}
const obj2 = obj1;
obj2.address.city = 'shanghai'
console.log(obj1.address.city)

/**
 * deepclone
 */

function deepclone(obj = {}) {
    // 不是对象或数组直接返回
    if(typeof obj !== 'object' || obj == null) {
        return obj
    }
    // 初始化返回结果
    let result;
    if(obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    
    for(let key in obj) {
        // 保证key不是原型属性
        if(obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepclone(obj[key])
        }
    }

    return result;
}

