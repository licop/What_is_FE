const express = require('express')

const router = express.Router()

// 获取文章标签列表
router.get('/', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

module.exports = router
