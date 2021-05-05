const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const merge = require('webpack-merge')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
  ],
}
