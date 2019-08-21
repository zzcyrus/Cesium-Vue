const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'

const plugins = [
  new CopyPlugin([
    { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' }
  ]),
  new CopyPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
  new CopyPlugin([{ from: path.join(cesiumSource, 'Widgets'), o: 'Widgets' }]),
  new webpack.DefinePlugin({
    CESIUM_BASE_URL: JSON.stringify('./')
  })
]

module.exports = {
  plugins,
  cesiumSource
}
