<template>
  <div id="app">
  
    <CesiumMenu></CesiumMenu>
    <VectorLayer></VectorLayer>
  
  </div>
</template>

<script>

import CesiumMenu from './views/CesiumMenu.vue'
import VectorLayer from './views/layers/VectorLayer.vue'


export default {
  components: {
    'VectorLayer': VectorLayer,
    'CesiumMenu': CesiumMenu
  },
  data() {
    return {

    }
  },

  methods: {
    startHacking() {

    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

#cesiumContainer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
