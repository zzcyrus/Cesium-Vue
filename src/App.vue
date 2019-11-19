<template>
  <div id="app">
    <div id="cesiumContainer"></div>
    <router-view class="router-view" />
  </div>
</template>

<script>
import * as Cesium from 'cesium/Cesium'

export default {
  mounted() {
    this.$nextTick(() => {
      new Cesium.Viewer('cesiumContainer')
    })
  }
}
</script>

<style lang="scss">
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.router-view {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
