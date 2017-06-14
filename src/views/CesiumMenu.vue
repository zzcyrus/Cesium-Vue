<template>
    <el-menu :default-active="activeIndex" class="el-menu-cesium" mode="horizontal">
        <el-menu-item index="1" @click='goBackHome'>返回地球</el-menu-item>
        <el-submenu index="2">
            <template slot="title">图层功能</template>
            <el-menu-item index="2-1">二维图层</el-menu-item>
            <el-menu-item index="2-2">三维图层</el-menu-item>
            <el-menu-item index="2-3">图层控制</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">模型功能</template>
            <el-menu-item index="3-1">GLTF</el-menu-item>
            <el-menu-item index="3-2">3Dtile</el-menu-item>
            <el-menu-item index="3-3">图层控制</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">量算功能</template>
            <el-menu-item index="4-1">GLTF</el-menu-item>
            <el-menu-item index="4-2">3Dtile</el-menu-item>
            <el-menu-item index="4-3">图层控制</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">取点功能</template>
            <el-menu-item index="5-1">GLTF</el-menu-item>
            <el-menu-item index="5-2">3Dtile</el-menu-item>
            <el-menu-item index="5-3">图层控制</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
            <template slot="title">模拟仿真</template>
            <el-menu-item index="6-1">GLTF</el-menu-item>
            <el-menu-item index="6-2">3Dtile</el-menu-item>
            <el-menu-item index="6-3">图层控制</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script >

export default {
    data() {
        return {
            activeIndex: '1',
        }
    },
    watch: {

    },
    mounted() {
        this.$nextTick(function () {
        })
    },
    methods: {
        goBackHome() {
            let viewer = this.viewer;
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(109.78, 28.36, 15000000)
            });
        }
    }
}
</script>

<style >
.el-menu-cesium {
    z-index: 999;
}
</style>