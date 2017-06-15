<template>
  <div id="vectorLayer">
    <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow">
      <div class="layout" slot="drawer">
        <el-checkbox v-model="tmsCheck" @change="changeShow('tms')">TMS图层</el-checkbox>
        <el-checkbox v-model="imgCheck" @change="changeShow('img')">图片图层</el-checkbox>
        <el-checkbox v-model="arcgisCheck" @change="changeShow('arcgis')">Arcgis图层</el-checkbox>
        <el-checkbox v-model="wmsCheck" @change="changeShow('wms')">WMS图层</el-checkbox>
      </div>
    </drawer>
  </div>
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
      imgCheck: false,
      arcgisCheck: false,
      wmsCheck: false,
      tmsLyr: null,
      imgLyr: null,
      arcgisLyr: null,
      wmsLyr: null,
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.loadMaps();
    })
  },

  methods: {

    //图层控制有别的方式，这里先采用最原始的方式控制

    loadMaps() {

      let viewer = this.viewer;
      //地形锁定,这是一个和模型相关的重要参数，请先保持开启
      viewer.scene.globe.depthTestAgainstTerrain = true;
      //logo隐藏
      viewer._cesiumWidget._creditContainer.style.display = "none";

      let layers = viewer.imageryLayers;

      //Arcgis图层
      this.arcgisLyr = layers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
        credit: "arcgisLyr",
        url: 'https://nationalmap.gov.au/proxy/http://services.ga.gov.au/site_3/rest/services/Electricity_Infrastructure/MapServer'
      }));
      this.arcgisLyr.show = false;

      //TMS图层
      this.tmsLyr = layers.addImageryProvider(new Cesium.createTileMapServiceImageryProvider({
        url: 'https://cesiumjs.org/blackmarble',
        credit: 'Black Marble imagery courtesy NASA Earth Observatory',
        flipXY: true
      }));
      this.tmsLyr.alpha = 0.5;
      this.tmsLyr.brightness = 2.0;
      this.tmsLyr.show = false;

      //图片图层
      this.imgLyr = layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
        url: 'src/assets/images/Cesium_Logo_Color_Overlay.png',
        rectangle: Cesium.Rectangle.fromDegrees(-75.0, 28.0, -67.0, 29.75)
      }));
      this.imgLyr.show = false;


      //WMS图层，记住必须加上的parameters属性
      this.wmsLyr = layers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
        url: 'https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
        layers: 'Hydrography:bores',
        parameters: {
          transparent: true,
          format: 'image/png'
        }
      }));
      this.wmsLyr.show = false;



    },

    changeDrawerShow(state) {
      this.drawerShow = state;
    },

    changeShow(type) {
      let viewer=this.viewer;
      switch (type) {
        case 'arcgis': this.arcgisLyr.show = this.arcgisCheck;
         if (this.arcgisCheck) {
            viewer.camera.setView({
              destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
            });
          }
          break;
        case 'tms': this.tmsLyr.show = this.tmsCheck;

          break;
        case 'img': this.imgLyr.show = this.imgCheck;
          break;
        case 'wms':
          this.wmsLyr.show = this.wmsCheck;
          if (this.wmsCheck) {
            viewer.camera.setView({
              destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
            });
          }
          break;
        default: break;
      }
    }


  }
}
</script>

<style>
#vectorLayer .el-checkbox {
  width: 100px;
  margin: 30px 40px;
}
</style>
