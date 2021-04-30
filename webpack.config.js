const path = require('path')

module.exports = {
  // 打包入口文件
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  }
}