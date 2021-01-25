# Vue 源码解析--一些工具方法

```js
// 方法：使用concat将二维数组转化为一维数组
export function simpleNormalizeChildren(children: any) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}
```

```js
// 查找数组中有没有重复的key
function checkDuplicateKeys(children) {
  const seenKeys = {};
  for (let i = 0; i < children.length; i++) {
    const vnode = children[i];
    const key = vnode.key;
    if (isDef(key)) {
      if (seenKeys[key]) {
        warn(
          `Duplicate keys detected: '${key}'. This may cause an update error.`,
          vnode.context
        );
      } else {
        seenKeys[key] = true;
      }
    }
  }
}
```
