// 用户相关验证
const { body } = require('express-validator');
const validate = require('../middleware/validator')
const { User } = require('../model')
const md5 = require('../util/md5')

exports.register = validate([
  body('user.username')
    .notEmpty().withMessage('用户名不能为空')
    .custom(async value => {
      const user = await User.findOne({username: value})
      if(user) {
        return Promise.reject('用户名已存在')
      }
    }),

  body('user.password').notEmpty().withMessage('密码不能为空'),

  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail()
    .custom(async value => {
      const user = await User.findOne({ email: value })
      if(user) {
        return Promise.reject('邮箱已存在')
      }
    })
])

exports.login = [
  validate([
    body('user.password').notEmpty().withMessage('密码不能为空'),
  
    body('user.email')
      .notEmpty().withMessage('邮箱不能为空')
      .isEmail().withMessage('邮箱格式不正确')
  ]),
  validate([  
    body('user.email').custom(async (value, { req }) => {
      const user = await User.findOne({ email: value })
        .select(['email', 'username', 'bio', 'image', 'password'])
        
      if(!user) {
        return Promise.reject('用户不存在')
      }

      // 将数据加载在请求对象中，后续的中间件可以使用
      req.user = user
      console.log(req.user, 49)
    })  
  ]),
  validate([  
    body('user.password').custom(async (value, { req }) => {
      if(md5(value) !== req.user.password) {
        return Promise.reject('密码错误')
      }
    })  
  ])
]