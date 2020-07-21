const path = require('path')
const resolvePath = dir => path.resolve(__dirname, dir)

// console.log('======= process ========')
// console.log(process.env)

const port = process.env.port || process.env.npm_config_port || 8080 // dev port
const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'vue admin template' // page title

// config detail see https://cli.vuejs.org/config/#vue-config-js
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development', // 开发模式开启eslint检查
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   // '/api': {
    //   //     target: '<url>',
    //   //     ws: true,
    //   //     changeOrigin: true   // 开启跨域反向代理
    //   // },
    //   // '/foo': {
    //   //     target: '<other_url>'
    //   // },
    //   //   '/download': {
    //   //     target: `http://swj-test.oss-cn-hangzhou.aliyuncs.com/`,
    //   //     changeOrigin: true,
    //   //     pathRewrite: {
    //   //       '^/download': ''
    //   //     }
    //   //   },
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://localhost:5000/`,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: '' // 前面加^配出来后就是http://base.hnabc.cn/api/xxx/xxx,不会出现随意规定的app字段
    //     }
    //   }
    // }
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolvePath('src')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // <link rel="preload"> 用来指定页面加载后很快会被用到的资源
    config.plugins.delete('prefetch') // 移除 prefetch 插件

    // sourcemap
    config.when(process.env.NODE_ENV === 'development', config =>
      config.devtool('cheap-source-map')
    )

    // svg-sprite-loader将多个svg图标合并. 使用时只需根据合并的symbol的id
    config.module
      .rule('svg')
      .exclude.add(resolvePath('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolvePath('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
