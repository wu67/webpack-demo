const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
// 该插件会把source-map一起混淆
const TerserJSPlugin = require('terser-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'none',
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      // new OptimizeCSSAssetsPlugin({})
    ],
  },
  module: {
    // rules: [
    //   {
    //     test: /\.(sa|sc|c)ss$/,
    //     use: [
    //       MiniCssExtractPlugin.loader,
    //       'css-loader',
    //       'sass-loader',
    //     ],
    //   },
    // ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].[hash].css',
    //   chunkFilename: '[id].[hash].css',
    // }),
  ],
}

module.exports = () => {
  return merge(baseConfig, prodConfig)
}
