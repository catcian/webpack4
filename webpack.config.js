const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    hotOnly: true
  },
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|git)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images',
              limit: 20480,
            }
          }
        ]
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
}