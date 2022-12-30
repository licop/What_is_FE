const express = require('express')

const router = express.Router()

// 获取用户资料
router.get('/profile/:username', async (req, res, next) => {
  try {
    res.send('/profile/:usename')
  } catch (error) {
    next(error)
  }
})

// 关注用户
router.post('/profile/:username/follow', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 取消关注用户
router.delete('/profile/:username/follow', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})




module.exports = router
