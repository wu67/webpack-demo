const merge = require('webpack-merge')
const webpack = require('webpack')
// 热更新
let hmrPlugin = new webpack.HotModuleReplacementPlugin()

let devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: './dist',
    port: process.env.port ? process.env.port : 8888,
  },
  plugins: [
    hmrPlugin,
  ],
}

module.exports = () => {
  return merge(devConfig, require('./webpack.base.js'))
}
