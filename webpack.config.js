const path = require('path')
const HTMLWebapckPlugin = require('html-webpack-plugin')
const CleanWebapckPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// use: [
//   'babel-loader',
//   'eslint-loader',
// ],
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  devServer: {
    index: 'index.html',
    contentBase: './dist',
    port: 3000,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    overlay: true,
    proxy: [{
      context: ['/auth', '/react/api'],
      target: 'http://www.dell-lee.com',
      secure: false,
      pathRewrite: {
        'header.json': 'demo.json',
      },
      bypass(req, res, proxyOptions) {
        // 可以通过请求体、响应体、代理配置、返回 false 跳过代理
        return false
      },
    }],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
            // force: 'pre', not match the API schema
          },
        ],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebapckPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CleanWebapckPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
