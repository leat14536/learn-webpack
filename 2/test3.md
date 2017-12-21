# http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/

CommonsChunkPlugin: 需要注意children 和 async

需要注意children: true 抽取异步模块的公共模块到bundle

async: true 将上边抽取出的模块抽出, 需要时异步加载

chunks: ['main', 'main1'] 表示只有main 和 main1共同引用的才会打包

deepchildren: true 抽出异步模块的子公共模块

minChunks: function(module, count) 精细操控需要打包成chunk的模块

module.context：表示存储文件的路径，比如'/my_project/node_modules/example-dependency'

module.resource：表示被处理的文件名称，比如 '/my_project/node_modules/example-dependency/index.js'

```
// 如果想把应用的 css/scss 和 vendor 的 css（第三方类库的 css）
// 抽取到一个独立的文件中，那么可以使用下面的 minChunk() 函数，
// 同时配合 ExtractTextPlugin 来完成。
new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  minChunks: function (module) {
    // This prevents stylesheet resources with the .css or .scss extension
    // from being moved from their original chunk to the vendor chunk
    if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
      return false;
    }
    return module.context && module.context.indexOf("node_modules") !== -1;
  }
})
```

在抽取 node_modules 下的模块的时候做了一个限制，即明确指定 node_modules 下的 scss/css 文件不会被抽取，所以最后生成的 vendor.js 不会包含第三方类库的 css/scss 文件，而只包含其中的 js 部分。 同时通过配置 ExtractTextPlugin 就可以将应用的 css 和第三方应用的 css 抽取到一个独立的 css 文件中，从而达到 css 和 js 分离。