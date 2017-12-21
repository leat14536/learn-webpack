const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: process.cwd() + '/1/main.js'
  },
  output: {
    path: process.cwd() + '/1/dist2',
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'Foo'
  },
  externals: {
    'jquery': 'jQuery'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'chunk',
      minChunks: 2
    }),
    new HtmlWebpackPlugin()
  ]
}