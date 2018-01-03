const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = {
    entry: {
        main: process.cwd() + '/'
    }
}
console.log(__dirname)
    // console.log(process.cwd())