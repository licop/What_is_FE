# Promise.race()有哪些具体应用

**Promise.race(iterable)** 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

## 参数

**iterable:** 一个可迭代的对象，比如**Array**和**String**

```
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

 Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

描述 race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。

## 实现 promise.race

```
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`)
        }
        for (const p of promises) {
            // 有一个成功就返回成功状态的promise
            // 有一个失败就返回失败状态的promise
            p.then(resolve, reject);
        }
    })
}
```

## 应用场景 1： 图片请求资源超时

```
 //请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
           resolve(img);
        }
        //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的
        img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";
    });
    return p;
}

//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}

Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log(results);
})
.catch(function(reason){
    console.log(reason);
});

```

## 应用场景 2：请求超时提示

> 描述：有些时候，我们前一秒刷着新闻，下一秒进入电梯后，手机页面上就会提示你 “网络不佳”

```
//请求
function request(){
    return new Promise(function(resolve, reject){
       setTimeout(()=>{
            resolve('请求成功')
       },4000)
    })
}

//请求超时提醒
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('网络不佳');
        }, 3000);
    });
    return p;
}

Promise.race([
    request(),
    timeout()
])
.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)//网络不佳
})
```
