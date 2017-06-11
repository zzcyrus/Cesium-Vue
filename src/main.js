import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

window.CESIUM_BASE_URL = "/static/Cesium";
// require("cesium/Build/Cesium/Widgets/widgets.css");
// require("cesium/Build/CesiumUnminified/Cesium.js");
require("../static/Cesium/Widgets/widgets.css");
require("../static/Cesium/Cesium.js");
var Cesium = window.Cesium;
const viewer = new Cesium.Viewer("cesiumContainer");


new Vue({
  el: '#app',
  render: h => h(App)
})