# JavaScript 类型系统

## 强类型与弱类型(类型安全)

**强类型**语言层面限制函数的实参类型必须与形参类型相同。

```js
class Main {
    static void foo(int num) {
        System.out.println(num)
    }
    publish static void main(String[] args) {
        Main.foo(100)  // ok
        Main.foo('100') // error '100' is a string
        Main.foo(Inerger.parseInt('100')) // ok
    }
}
```

**弱类型**语言层面层面不会限制实参的类型。

```js
function foo(num) {
  console.log(num);
}

foo(100); // ok
foo("100"); // ok
foo(parseInt("100")); // ok
```

**强类型**有更强的类型约束，而**弱类型**中几乎没有约束

**强类型**语言中不允许任意的隐式类型转换，而**弱类型**语言中则允许任意的数据隐式类型转换

## 静态类型与动态类型(类型检查)

**静态类型**一个变量声明时他的类型就是明确的，声明过后，它的类型就不允许修改了

**动态类型**运行阶段才能够明确变量类型，而且变量的类型可以随时发生变化, 动态类型语言中变量是没有类型的，变量中存放的值是有类型的

```js
var foo = 100;
foo = "bar";

console.log(foo);
```

![](/syntax&API/language_type.png)

## JavaScript 类型系统特征

JavaScript 是门灵活多变的弱类型和动态类型的语言，且缺失类型系统的可靠性。

为什么会这样？因为 JavaScript 早前的应用简单，且没有编译环节。

目前随着 JavsScript 的应用规模越来越大，这种灵活多变的“优势”就变成了短板。

## JavaScript 弱类型系统产生的问题

### 1. 异常需要等到运行时才能发现

```js
const obj = {};

// obj.foo()

setTimeout(() => {
  obj.foo();
}, 1000000);
```

### 2. 函数功能可能发生改变

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(100, 100));
console.log(sum(100, "100")); // "100100"
```

### 3. 对象索引器的错误用法

对象的属性值自动转换为字符串

```js
const obj = {};

obj[true] = 100; // 属性名会自动转换为字符串

console.log(obj["true"]); // 100
```

## 强类型的优势

1. 错误可以更早的暴露
2. 代码更智能，编辑器提示更完善，编码更准确
3. 重构更牢靠，更改代码，会提示报错
4. 减少不必要的类型判断
