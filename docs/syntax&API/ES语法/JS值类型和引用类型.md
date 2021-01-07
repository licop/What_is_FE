# JS 值类型和引用类型

## 值类型和引用类型

**值类型(基本类型)：** 数值(number)、布尔值(boolean)、undefined、string、symbol。

举例：

```
  let a = 100;
  let b = a;
  a = 200;
  console.log(b) // 100
```

下图为值类型的存储

![](/syntax&API/值类型.png)

**引用类型：** 对象、数组、函数、null(特殊引用类型，指针指向为空地址)。

举例：

```
  let a = {age: 20};
  let b = a;
  b.age = 21;
  console.log(a.age) // 21
```

下图为引用类型的存储，引用类型的存储需要内存的**栈区**和**堆区**（堆区是指内存里的堆内存）共同完成，**栈区**内存保存变量标识符和指向堆内存中该对象的指针，也可以说是该对象在堆内存的地址。

![](/syntax&API/引用类型.png)

## typeof 运算符

- 识别所有**值类型**

```
let a;                 typeof a   // 'undefined'
const str = 'abc';     typeof str // 'string'
const n = 100;         typeof n   // 'number'
const b= true;         typeof b   //  'boolean'
const s = Symbol('s')  typeof s   //  'symbol'

```

- 识别函数

```
typeof console.log    //"function"

typeof function() {}  //"function"
```

- 判断是否是引用类型（不可在细分）

```
typeof null          // "object"
typeof ['a', 'b']    // "object"
typeof {x: 100}      // "object"
```

## 类型转换

### 字符串拼接

```
 const a = 100 + 10    // 100
 const b = 100 + '10'  // '10010'
 const c = true + '10' // 'true10'
```

### == 运算符

```
100 == '100'  // true
0 == ''       // true
0 == false    // true
false == ''   // true
null == undefined // true
```

**除了 == null 之外，其他都一律用===**

```
const obj = {x: 100}
if(obj.a == null) {}
// 相当于
if(obj.a === null || obj.b === undefined) {}
```

### if 语句和逻辑运算符

- `truely` 变量： !!a === true 变量
- `falsely` 变量： !!a === false 变量

```
  // 以下是falsely变量。除此之外都是truly变量
  !!0 === false;
  !!NaN === false;
  !!'' === false;
  !!null === false;
  !!undefined === false
  !!false === false
```

javacript 语言 if 语句判断的是`truely`和`falsely`变量

## 深拷贝和浅拷贝

**浅拷贝**: 对于字符串类型，浅拷贝是对值的复制，对于对象来说，浅拷贝是对对象地址的复制, 也就是拷贝的结果是两个对象指向同一个地址

**深拷贝**: 深拷贝开辟一个新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

```
// 深拷贝
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
```
