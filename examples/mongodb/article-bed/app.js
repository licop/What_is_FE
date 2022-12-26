const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const connectUri = 'mongodb://localhost:27017'

const dbClient = new MongoClient(connectUri)

const app = express()
// 配置解析请求体数据 application/json
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/articles', async (req, res, next) => {
  try {
    // 1. 获取表单的数据
    const { article } = req.body
    // 2. 数据验证
    if(!article || !article.title || !article.description || 
      !article.body) {
      return res.status(422).json({
        error: '请求参数不符合规则要求'
      })
    }
    // 3. 把验证通过的数据插入数据库中
    // 成功 -> 发送成功的响应
    // 失败 -> 发送失败的响应
    await dbClient.connect()
    // 如果第一次创建不存在数据库和集合，会直接帮助创建
    const collection = dbClient.db('myNewDatabase').collection('articles')
    
    const ret = await collection.insertOne(article)
    
    article._id = ret.insertedId 
    
    res.status(201).json({
      ...article,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  } catch (err) {
    // 由错误管理中间件统一处理
    next(err)
   
  }
})

app.get('/articles', async (req, res, next) => {
  try {
    let { _size = 10, _page = 1} = req.query
    _page = Number.parseInt(_page)
    _size = Number.parseInt(_size)

    await dbClient.connect()
    const collection = dbClient.db('myNewDatabase').collection('articles')
    const ret = await collection.find()
      .skip((_page - 1) * _size) // 跳过多少条
      .limit(_size) // 拿多少条
    const articles= await ret.toArray()
    const articleCounts = await collection.countDocuments()
    res.status(200).json({
      articles,
      articleCounts
    })
  } catch (error) {
    next(error)
  }
})

app.get('/articles/:id', async (req, res, next) => {
  try {
    await dbClient.connect()
    const collection = dbClient.db('myNewDatabase').collection('articles')
    console.log(req.params.id, 76)
    const article = await collection.findOne({
      _id: ObjectId(req.params.id)
    })
    res.status(200).json({
      article
    })
  } catch (err) {
    next(err)
  }
})

app.patch('/articles/:id', async (req, res, next) => {
  try {
    await dbClient.connect()
    const collection = dbClient.db('myNewDatabase').collection('articles')
    await collection.updateOne({
      _id: ObjectId(req.params.id)
    }, {
      $set: req.body.article
    })
    console.log(req.body, 97)
    const article = await await collection.findOne({
      _id: ObjectId(req.params.id)
    })

    res.status(200).json({
      article
    })
  } catch (err) {
    next(err)
  }
})

app.delete('/articles/:id', async (req, res, next) => {
  try {
    await dbClient.connect()
    const collection = dbClient.db('myNewDatabase').collection('articles')
    await collection.deleteOne({
      _id: ObjectId(req.params.id)
    })
    res.status(204).json({})
  } catch (err) {
    next(err)
  }
})

// 它之前的所有路由调用next.err就会进入这里
// 注意四个参数缺一不可
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen('3000', () => {
  console.log('app listening at port 3000')
})


