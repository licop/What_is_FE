# 接口设计

### 创建文章

- 请求路径：POST /articles
- 请求参数：Body
  - title
  - description
  - body
  - tagList
- 数据格式：application/json

```json
{
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": ["reactjs", "angularjs", "dragons"]
  }
}
```

返回数据示例：

- 状态码：201
- 响应数据：

```json
{
  "article": {
    "_id": 123,
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z"
  }
}
```

### 获取文章列表

- 请求路径：GET /articles
- 请求参数（Query）
  - \_page：页码
  - \_size：每页大小

响应数据示例：

- 状态码：200
- 响应数据：

```json
{
  "articles": [
    {
      "_id": "how-to-train-your-dragon",
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "It takes a Jacobian",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z"
    },
    {
      "_id": "how-to-train-your-dragon-2",
      "title": "How to train your dragon 2",
      "description": "So toothless",
      "body": "It a dragon",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z"
    }
  ],
  "articlesCount": 2
}
```

### 获取单个文章

- 请求路径：GET /articles/:id
  响应数据示例：
- 状态码：200
- 响应数据：

```json
{
  "article": {
    "_id": "dsa7dsa",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z"
  }
}
```

### 更新文章

- 请求路径：PATCH /artilces/:id
- 请求参数（Body）
  - title
  - description
  - body
  - tagList
    请求体示例：
- 状态码：201
- 响应数据：

```json
{
  "article": {
    "title": "Did you train your dragon?"
  }
}
```

响应示例：

```json
{
  "article": {
    "_id": 123,
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z"
  }
}
```

### 删除文章

- 接口路径：DELETE /articles/:id
  响应数据：
- 状态码：204
- 数据：
