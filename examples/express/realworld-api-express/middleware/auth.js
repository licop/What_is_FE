const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model') 

module.exports = async (req, res, next) => {
  // 从请求头获取token数据
  let token = req.headers['authorization']
  token = token ? token.split('Bearer ')[1] : null
  console.log(token, 8)
  if(!token) {
    return res.status(401).end()
  }
  // 验证token是否有效
  // 无效 -> 响应401状态码
  // 有效 -> 把用户用户信息读取出来挂载在req请求对象上
  try {
    const decodedToken = await jwt.verify(token, jwtSecret)
    req.user = await User.findById(decodedToken.userId)
    next()
  } catch (error) {
    return res.status(401).end()
  }
}