const path = require('path')
const HTMLWebapckPlugin = require('html-webpack-plugin')
const CleanWebapckPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    hotOnly: true,
    proxy: {
      '/react/api': 'http://www.dell-lee.com',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebapckPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CleanWebapckPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
}