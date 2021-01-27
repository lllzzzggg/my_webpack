/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Date: 2020-08-04 17:37:29
 * @LastEditors: lzg
 * @LastEditTime: 2021-01-20 12:45:55
 */
'use strict'
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    hello: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module:{
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    port: 1024
  }
}