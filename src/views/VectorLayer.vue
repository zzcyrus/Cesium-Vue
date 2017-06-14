<template>
  <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow">
    <div class="layout" slot="drawer">
      <el-checkbox v-model="tmsCheck">TMS图层</el-checkbox>
      <el-checkbox v-model="pngCheck">图片图层</el-checkbox>
      <el-checkbox v-model="arcgisCheck">Arcgis图层</el-checkbox>
      <el-checkbox v-model="wmsCheck">WMS图层</el-checkbox>
    </div>
  </drawer>
</template>

<script>

import drawer from '../components/drawer.vue'

export default {
  components: {
    'drawer': drawer
  },
  data() {
    return {
      drawerShow: true,
      pos: 'left',
      tran: 'overlay',
      tmsCheck: false,
      pngCheck: false,
      arcgisCheck: false,
      wmsCheckL: false,
    }
  },

  mounted: function () {
    this.loadMaps();
    this.$nextTick(function () {
    })
  },

  methods: {
    loadMaps() {

      let viewer = this.viewer;
      //地形锁定,这是一个和模型相关的重要参数，请先保持开启
      viewer.scene.globe.depthTestAgainstTerrain = true;
      //logo隐藏
      viewer._cesiumWidget._creditContainer.style.display = "none";

      let layers = viewer.scene.imageryLayers;

      //Arcgis图层
      var imageryLayers = viewer.imageryLayers;
      imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://nationalmap.gov.au/proxy/http://services.ga.gov.au/site_3/rest/services/Electricity_Infrastructure/MapServer'
      }));

      // Start off looking at Australia.
      viewer.camera.setView({
        destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
      });

      //TMS图层
      let blackMarble = layers.addImageryProvider(new Cesium.createTileMapServiceImageryProvider({
        url: 'https://cesiumjs.org/blackmarble',
        credit: 'Black Marble imagery courtesy NASA Earth Observatory',
        flipXY: true // Only old gdal2tile.py generated tilesets need this flag.
      }));
      blackMarble.alpha = 0.5;
      blackMarble.brightness = 2.0;

      //图片图层
      layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
        url: 'src/assets/images/Cesium_Logo_Color_Overlay.png',
        rectangle: Cesium.Rectangle.fromDegrees(-75.0, 28.0, -67.0, 29.75)
      }));

      // Add a WMS imagery layer
      var imageryLayers = viewer.imageryLayers;
      imageryLayers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
        url: 'https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
        layers: 'Hydrography:bores',
        parameters: {
          transparent: true,
          format: 'image/png'
        }
      }));

      // Start off looking at Australia.
      viewer.camera.setView({
        destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
      });


    },

    changeDrawerShow(state) {
      this.drawerShow = state;
    }
  }
}
</script>

<style>
.el-checkbox {
  width: 100px;
}
</style>
