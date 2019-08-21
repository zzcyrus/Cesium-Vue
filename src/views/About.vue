<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="cesiumContainer" />
  </div>
</template>

<script>
import Cesium from 'cesium/Cesium'

export default {
  mounted() {
    this.$nextTick(() => {
      const viewer = new Cesium.Viewer('cesiumContainer')
    })
  }
}
</script>