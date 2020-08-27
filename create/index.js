const path = require('path')
const mkdirp = require('mkdirp')

module.exports = function (name) {
  console.log(path.join(process.cwd(), name))
  mkdirp(path.join(process.cwd(), name)).then(res => {
    if (res) {
      console.log('创建成功')
    }
  })
}