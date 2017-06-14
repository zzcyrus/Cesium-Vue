import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

window.CESIUM_BASE_URL = "/static/Cesium";
require("../static/Cesium/Widgets/widgets.css");
require("../static/Cesium/Cesium.js");
let Cesium = window.Cesium;
let viewer = new Cesium.Viewer("cesiumContainer", {
  //通过初始化的方式加载Arcgis提供的全球底图
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
  }),
  baseLayerPicker: false,
  animation: false,
  navigationHelpButton: false,
  timeline: false,
  geocoder: false,
  fullscreenButton: false,
  vrButton: false,
  sceneModePicker: false,
  infoBox: false,
  scene3DOnly: false,
  homeButton: false,
});

Vue.prototype.viewer = viewer;


new Vue({
  el: '#app',
  render: h => h(App)
})