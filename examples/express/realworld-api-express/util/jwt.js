const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)
exports.decode = promisify(jwt.decode)

// 生成jwt
// const token = jwt.sign({
//   foo: 'bar'
// }, 'ffajgssjfvlicop')

// 异步生成token
// jwt.sign({
//   foo: 'bar'
// }, 'ffajgssjfvlicop', (err, token) => {
//   if(err) {
//     return console.log('生成token失败')
//   }
//   console.log(token)
// })


// 验证jwt
// const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NzIzOTEwNjR9.yTFMLIlVIa0AyST8xPNuBmftT5zlNeB8KKQXYdt8rn8', 'ffajgssjfvlicop')

