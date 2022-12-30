const express = require('express')
const userCtrl = require('../controller/user')
const { body, validationResult } = require('express-validator');
const { User } = require('../model')

const router = express.Router()

// user 用户相关路由
router.post('/users/login', userCtrl.login)

// 用户注册
router.post('/users', [
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
      const user = await User.findOne({email: value})
      if(user) {
        return Promise.reject('邮箱已存在')
      }
    })
], (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
}, userCtrl.register)

// 获取用户
router.get('/user/', userCtrl.getCurrentUser)

// 更新当前登录用户
router.put('/user', userCtrl.updateCurrentUser)

module.exports = router
