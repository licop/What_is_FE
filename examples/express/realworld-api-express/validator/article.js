const { body, param } = require('express-validator')
const validate = require('../middleware/validator')
const { Article } = require('../model')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([
  validate.isValidObjectId(['params'], 'articleId')

  // param('articleId').custom(async value => {
  //   if(!mongoose.isValidObjectId(value)) {
  //     Promise.reject('文章id类型错误')
  //   }
  // })
])

exports.updateArticle = [
  validate([
    validate.isValidObjectId(['params'], 'articleId')
  ]),
  // 校验文章是否存在
  async (req, res, next) => {
    const articleId = req.params.articleId
    const article = await Article.findById(articleId)
    req.article = article

    if(!article) {
      return res.status(404).end()
    }
    next()
  },

  // 修改文章的作者是否是当前登录用户
  async (req, res, next) => {
    console.log(req.user, req.article.author, 39)
    if (req.user._id.toString() !== req.article.author.toString()) {
      // 403 没有权限
      return res.status(403).end()
    }
    next()
  }

]

exports.deleteArticle = exports.updateArticle