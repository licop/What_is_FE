const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
const app = express()
require('./model')

const PORT = process.env.PORT || 3002

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// 挂载路由
app.use('/api', router)

// 挂载统一错误的中间件
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

