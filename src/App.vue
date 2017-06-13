<template>
  <div id="app">
    <VectorLayer></VectorLayer>
  </div>
</template>

<script>

import VectorLayer from './views/VectorLayer.vue'


export default {
  components:{
    'VectorLayer':VectorLayer
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
