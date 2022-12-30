const { User } = require('../model')

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 获取请求数据
    console.log(req.body)
    // 数据验证
    // 基本数据验证
    // 业务数据验证
    
    // 验证通过，将数据保存到数据库
    const user = new User(req.body.user)

    // 保存到数据库
    await user.save()

    // 发送成功响应
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
    // 处理请求
    res.send('post login')
  } catch (error) {
    next(error)
  }
}

exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post login')
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

