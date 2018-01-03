const path = require('path')

module.exports = {
    entry: {
        app: [path.resolve(__dirname, 'src/main.js')]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
        filename: 'bundle.js'
    }
}