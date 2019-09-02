const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const betaConfig = {
  mode: 'production',
  devtool: 'source-map',
}

module.exports = () => {
  return merge(baseConfig, betaConfig)
}
