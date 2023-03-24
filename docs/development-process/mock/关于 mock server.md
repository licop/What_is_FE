# 关于 mock server

## 使用 json server 搭建 mock server

**json-server** 是基于 Express 开发的 Mock Server 搭建工具，可以轻易搭建拥有完整 REST API 的轻量级后端服务。

[json-server github 地址](https://github.com/typicode/json-server)

下面是使用`json-server`搭建的完整移动端外卖 app 的 Mock 服务,语法和目录结构和用 Express 开发后端应用类似

[vue-waimai-server](https://github.com/licop/vue-waimai-server)

## mock.js

Mock.js 是一个用于生成随机数据的 JavaScript 库。它可以模拟后端 API 接口返回的数据，以便前端开发人员在没有真实数据的情况下进行开发和测试。Mock.js 提供了丰富的 API，可以生成各种类型的数据，例如数字、字符串、日期、布尔值、数组、对象等等。

Mock.js 的使用非常简单，只需要在项目中引入 Mock.js 库，然后调用相应的 API 即可生成随机数据。以下是一个简单的示例：

```js
import Mock from "mockjs";

// 使用 Mock.mock() 方法模拟数据
Mock.mock("/api/data", {
  "list|10": [
    {
      "id|+1": 1,
      name: "@cname",
      "age|18-30": 1,
      "gender|1": ["男", "女"],
      email: "@EMAIL",
    },
  ],
});
```

这段代码会模拟一个名为 /api/data 的接口，返回一个包含 10 条数据的数组，每条数据包含 id、name、age、gender、email 等字段，这些字段的值都是随机生成的。例如，可能生成的一条数据如下：

```json
{
  "id": 1,
  "name": "张三",
  "age": 22,
  "gender": "男",
  "email": "zhangsan@example.com"
}
```

除了生成随机数据，Mock.js 还提供了一些其他的功能，例如拦截 Ajax 请求、延迟响应、设置响应状态码等等，这些功能可以帮助开发人员更好地模拟真实的 API 接口。

### 拦截 Ajax 请求

Mock.js 可以拦截浏览器的 Ajax 请求，模拟真实的 API 接口返回数据。例如：

```json
Mock.mock("/api/user", "get", {
  "name": "@cname",
  "age|18-30": 1,
  "gender|1": ["男", "女"],
  "email": "@EMAIL"
})
```

这段代码会拦截一个 GET 请求，请求地址为 /api/user，返回一个包含 name、age、gender、email 等字段的对象，这些字段的值都是随机生成的。

### 延迟响应

Mock.js 可以模拟 API 接口的延迟响应，以便测试前端页面的加载状态。例如：

```json
Mock.mock(
  "/api/data",
  {
    "list|10": [
      {
        "id|+1": 1,
        "name": "@cname",
        "age|18-30": 1,
        "gender|1": ["男", "女"],
        "email": "@EMAIL"
      }
    ]
  },
  {
    "delay": 1000 // 延迟 1 秒钟返回数据
  }
)
```

这段代码会模拟一个名为 /api/data 的接口，返回一个包含 10 条数据的数组，每条数据包含 id、name、age、gender、email 等字段，这些字段的值都是随机生成的。同时，设置了一个延迟 1 秒钟的响应时间，以便测试页面的加载状态。

### 随机数据

Mock.js 可以生成各种类型的随机数据，包括数字、字符串、日期、布尔值、数组、对象等等。例如：

```json
Mock.mock({
  "number1|1-100": 1, // 生成一个 1 到 100 之间的整数
  "number2|+1": 100, // 从 100 开始，每次加 1
  "string1|3-5": "hello", // 生成一个 3 到 5 个字符的字符串，内容为 hello
  "string2|1-3": "world", // 生成一个 1 到 3 个字符的字符串，内容为 world
  "date1": "@date(\"yyyy-MM-dd\")", // 生成一个格式为 yyyy-MM-dd 的日期字符串
  "date2": "@datetime(\"yyyy-MM-dd HH:mm:ss\")", // 生成一个格式为 yyyy-MM-dd HH:mm:ss 的日期时间字符串
  "bool1|1": true, // 生成一个 true 或 false 的布尔值
  "bool2|1-2": true, // 生成一个 true 或 false 的布尔值，true 的概率为 1/3
  "array1|3": [1, 2, 3], // 生成一个包含 3 个元素的数组，元素为 1、2、3
  "array2|1-3": [1, 2, 3], // 生成一个包含 1 到 3 个元素的数组，元素为 1、2、3
  "object1|2": {
    // 生成一个包含 2 个属性的对象，属性名为 name、age，属性值为随机生成的值
    "name": "@cname",
    "age|18-30": 1
  },
  "object2|2-4": {
    // 生成一个包含 2 到 4 个属性的对象，属性名为 name、age、gender、email，属性值为随机生成的值
    "name": "@cname",
    "age|18-30": 1,
    "gender|1": ["男", "女"],
    "email": "@EMAIL"
  }
})
```

> 注：以上关于 mockjs 的文档和案例均由 chatgpt 生成

## 在线 mock 平台

本人使用较多的就是 [fastmock](https://designer.mocky.io/design/confirmation)，简单好用的在线接口 MOCK 平台。

**fastmock**内置了 mock.js

以下使用 **fastmock** 作为在线 Mock 平台开发的前端项目，作为参考。

使用 vue 开发公司管理后台[vue-manager-fe](https://github.com/licop/vue-manager-fe/blob/main/src/config/index.js)
