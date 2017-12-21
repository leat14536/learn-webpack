# weback 分析系列第一篇
### 重点知识记录

process.pwd() 返回当前运行文件的真实路径

CommonsChunkPlugin 提取公共部分
  ```
  new CommonsChunkPlugin({
    // 将入口文件公共部分提出到chunk文件 并把common1 common2 分别提出来
    name: ["chunk",'common1','common2'],
    minChunks:2
    //这个配置表示，如果一个模块的依赖次数至少为 2 次才会被抽取到公共模块中
  })
  ```
最终结果 chunk包含chunk1 和 chunk2 的内容 common1包含jq common2包含vue

  ```
  output: {
    path:process.cwd()+'/dest/example1',
    filename: '[name].js',
    // export itself to a global var
    // 打包结果赋值为 Foo
    // var 表示在全局变量中暴露Foo
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "Foo"
  },
  // externals jquery从外部引用
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  }
  ```