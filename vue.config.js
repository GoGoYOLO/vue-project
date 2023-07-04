module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // entry: '07_src_todoList/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/main.js'
  },
  //关闭语法检查
  lintOnSave: false,

  //配置代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }

  //配置代理服务器 方式二
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:4000',
        pathRewrite: { '^/api1': '' },
        ws: true,//支持websocket
        changeOrigin: true
      },
      '/api2': {
        target: 'http://localhost:4001',
        pathRewrite: { '^/api2': '' },
        ws: true,//支持websocket
        changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}