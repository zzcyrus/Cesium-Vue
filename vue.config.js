const { cesiumSource, plugins } = require('./config/webpack.base')
const path = require('path')

module.exports = {
  configureWebpack: {
    output: {
      sourcePrefix: ''
    },
    amd: {
      toUrlUndefined: true
    },
    node: {
      fs: 'empty'
    },
    resolve: {
      alias: {
        cesium: path.resolve(__dirname, cesiumSource)
      }
    },
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false
    },
    plugins: plugins
  }
}
