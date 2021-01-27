# Vue 源码解析--一些工具方法

在 Vue 中有一些通用的工具方法函数，写的十分简洁，不管在编写类库和业务项目都会用到类似方法，在这里将它们提取总结出来。

## 类型校验

```js
// 类型校验: 验证是否存在、值为true or false
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
```

```js
// 类型校验: 判断一个值是否是原始值类型
function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}
```

```js
// 类型校验: 判断一个值是否是引用类型，广泛意义上的对象，对象、数组、函数等
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
```

```js
const _toString = Object.prototype.toString;
// 从[object Object]获取对象的具体类型
function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
// 判断是否是普通对象
function isPlainObject(obj) {
  return _toString.call(obj) === "[object Object]";
}
// 判断是否是正则
function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}
```

```js
// 类型校验: 判断是否是Promise对象
function isPromise(val) {
  return (
    isDef(val) &&
    typeof val.then === "function" &&
    typeof val.catch === "function"
  );
}
```

## 类型转化

```js
// 类型转化: 将其他类型转化为字符串类型
const _toString = Object.prototype.toString;
function toString(val) {
  return val == null
    ? ""
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
    ? JSON.stringify(val, null, 2)
    : String(val);
}
```

```js
// 类型转化：如果val是字符串类型的数字，转化为number类型，如果不是返回原值
// 和Number的区别是,Number如果不是数字返回NaN
function toNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}
```

```js
// 方法：使用concat将二维数组转化为一维数组
function simpleNormalizeChildren(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return Array.prototype.concat.apply([], arr);
    }
  }
  return arr;
}
```

## 类型的操作

```js
// 对象中是否函数某个属性
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj: Object | Array<*>, key: string): boolean {
  return hasOwnProperty.call(obj, key);
}
```

```js
// 查找节点列表数组中有没有重复的key
function checkDuplicateKeys(children) {
  const seenKeys = {};
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    const key = node.key;
    if (isDef(key)) {
      if (seenKeys[key]) {
        warn(`Duplicate keys detected: '${key}'. `);
      } else {
        seenKeys[key] = true;
      }
    }
  }
}
```

```js
// 合并对象
function extend(to: Object, _from: ?Object): Object {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}
```

```js
// 判断两个值是否相等
function looseEqual(a: any, b: any): boolean {
  if (a === b) return true;
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every((e, i) => {
            return looseEqual(e, b[i]);
          })
        );
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return (
          keysA.length === keysB.length &&
          keysA.every((key) => {
            return looseEqual(a[key], b[key]);
          })
        );
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
```

## 其他

```js
// 浏览器类型侦测
const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
const isEdge = UA && UA.indexOf("edge/") > 0;
const isAndroid = UA && UA.indexOf("android") > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);
```
