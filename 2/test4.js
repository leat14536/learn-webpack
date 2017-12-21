const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main1: process.cwd() + '/2/main1.js',
    main2: process.cwd() + '/2/main2.js'
  },
  output: {
    path: process.cwd() + '/2/dist1',
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'chunk',
      children: true,
      minChunks: 2,
      async: true
    }),
    new HtmlWebpackPlugin({
      filename: './index1.html',
      chunks: ['main1']
    }),
    new HtmlWebpackPlugin({
      filename: './index2.html',
      chunks: ['main2']
    })
  ]
}