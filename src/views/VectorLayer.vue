<template>
  
</template>

<script>

export default {
  data() {
    return {
      msg: 'Use Vue 2.0 Today!'
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


    }
  }
}
</script>

<style>

</style>
