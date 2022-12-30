const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 验证通过，将数据保存到数据库
    let user = new User(req.body.user)
    // 保存到数据库
    await user.save()
    
    user = user.toJSON()
    delete user.password

    // 处理请求
    res.status(201).json({
      user
    })
  } catch (error) {
    next(error)
  }
}

// 用户登录
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON()
    // 生成token
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, { expiresIn: 60 * 60 * 24 })

    delete user.password

    res.status(200).json({
      ...user,
      token
    })
  } catch (error) {
    next(error)
  }
}

exports.getCurrentUser = async (req, res, next) => {
  try {    
    res.status(200).json({
      user: req.user
    })
  } catch (error) {
    next(error)
  }
}

exports.updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post login')
  } catch (error) {
    next(error)
  }
}

