const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = {
  entry: {
    main: process.cwd() + '/1/main.js',
    main1: process.cwd() + '/1/main1.js',
    common1: ['jquery'],
    common2: ['vue']
  },
  output: {
    path: process.cwd() + '/1/dist',
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['chunk', 'common1', 'common2'],
      minChunks: 2
    })
  ]
}

console.log(process.cwd())