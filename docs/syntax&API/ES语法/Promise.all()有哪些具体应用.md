# Promise.all()有哪些具体应用

**Promise.all(iterable)** 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 promise 的结果。

它通常在启动多个异步任务**并发运行**并为其结果创建承诺之后使用，以便人们可以等待所有任务完成。

## 参数

**iterable:** 一个可迭代的对象，比如**Array**和**String**

## 实现 promise.all

**核心思路**

- 接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
- 这个方法返回一个新的 promise 对象，
- 遍历传入的参数，用 Promise.resolve()将参数"包一层"，使其变成一个 promise 对象
- 参数所有回调成功才是成功，返回值数组与参数顺序一致
- 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

```
  // 实现promise.all
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`)
        }
        let result = [];
        let count = 0;
        for(let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((value) => {
                count++
                result[i] = value;
                if(count === promises.length) {
                    resolve(result)
                }
            }, (error) => {
                return reject(error)
            })
        }
    })
}
```

## 应用场景 1：多个请求结果合并在一起

> 具体描述：一个页面，有多个请求，我们需求所有的请求都返回数据后再一起处理渲染

思考：如果并发请求的话，每个请求的 loading 状态要单独设置，多个的话可能多个 loading 重合，页面显示的内容 根据请求返回数据的快慢 有所差异，具体表现在渲染的过程，为提升用户体验，我们可以采用 所有请求返回数据后，再一起渲染，此时我们关闭请求的单独 loading 设置，通过 Promise.all 汇总请求结果，从开始到结束，我们只设置一个 loading 即可

```
   //1.获取轮播数据列表
function getBannerList(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('轮播数据')
        },300)
    })
}

//2.获取店铺列表
function getStoreList(){
   return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('店铺数据')
        },500)
    })
}

//3.获取分类列表
function getCategoryList(){
   return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('分类数据')
        },700)
    })
}

function initLoad() {
      // loading.show() //加载loading
    Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{
        console.log(res)
        // loading.hide() //关闭loading
    }).catch(err=>{
        console.log(err)
        // loading.hide()//关闭loading
    })
}

//数据初始化
initLoad()
```

## 应用场景 2：合并请求结果并处理错误

> 描述：我们需求单独处理一个请求的数据渲染和错误处理逻辑，有多个请求，我们就需要在多个地方写

思考：我们能否把多个请求合并在一起，哪怕有的请求失败了，也返回给我们，我们只需要在一个地方处理这些数据和错误的逻辑即可。

```
   //1.获取轮播图数据列表
function getBannerList(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            // resolve('轮播图数据')
            reject('获取轮播图数据失败啦')
        },300)
    })
}

//2.获取店铺列表
function getStoreList(){
   return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('店铺数据')
        },500)
    })
}

//3.获取分类列表
function getCategoryList(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('分类数据')
        },700)
    })
}

function initLoad(){
    // loading.show()
    Promise.all([
        getBannerList().catch(err=>err),
        getStoreList().catch(err=>err),
        getCategoryList().catch(err=>err)
    ]).then(res=>{
        console.log(res) // ["获取轮播图数据失败啦", "店铺数据", "分类数据"]

        if(res[0] == '轮播图数据'){
            //渲染
        }else{
            //获取 轮播图数据 失败的逻辑
        }
        if(res[1] == '店铺数据'){
            //渲染
        }else{
            //获取 店铺列表数据 失败的逻辑
        }
        if(res[2] == '分类数据'){
            //渲染
        }else{
             //获取 分类列表数据 失败的逻辑
        }

        // loading.hide()
    })
}

initLoad()

```

有时候页面挂掉了，可能因为接口异常导致，或许只是一个无关紧要的接口挂掉了。那么一个接口挂掉了为什么会导致整个页面无数据呢？Promise.all 告诉我们，如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），就不再执行 then 方法回调，以上用例 正好可以解决此种问题

## 应用场景 3：验证多个请求结果是否都是满足条件

> 描述：在一个微信小程序项目中，做一个表单的输入内容安全验证，调用的是云函数写的方法，表单有多 7 个字段需要验证，都是调用的一个 内容安全校验接口，全部验证通过则 可以 进行正常的提交

```
  function verify1(content){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(true)
        },200)
    })
}

function verify2(content){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(true)
        },700)
    })
}

function verify3(content){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(true)
        },300)
    })
}

Promise.all([verify1('校验字段1的内容'),verify2('校验字段2的内容'),verify3('校验字段3的内容')]).then(result=>{
    console.log(result)//[true, true, true]

    let verifyResult = result.every(item=>item)
    //验证结果
    console.log(verifyResult?'通过验证':'未通过验证')// 通过验证
}).catch(err=>{
    console.log(err)
})

```
