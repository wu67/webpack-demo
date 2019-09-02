const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '../src') },
    // import的时候可以不带这些后缀名
    extensions: ['.vue', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        // 不用vue的话，可以把vue-style-loader 替换成style-loader
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e)?g|gif)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, '../static'),
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
}
