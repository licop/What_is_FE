const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 获取用户关注的作者文章列表
router.get('/feed', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 获取文章
router.get('/:articleId', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 创建文章
router.post('/', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 更新文章
router.put('/:articleId',async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 删除文章
router.delete('/:articleId', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 添加文章评论
router.post('/:articleId/comments', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 获取文章评论列表
router.get('/:articleId/comments', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 删除文章评论
router.delete('/:articleId/comments/:id', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 文章点赞
router.post('/:articleId/favorite', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

// 取消文章点赞
router.delete('/:articleId/favorite', async (req, res, next) => {
  try {
    res.send('/profile/:usename/follow')
  } catch (error) {
    next(error)
  }
})

module.exports = router
