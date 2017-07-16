<template>
    <div id="images">
        <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow">
            <div class="layout" slot="drawer">
                <el-radio v-model="sktCheck" @change="loadTerrain('skt')">在线地形</el-radio>
                <el-radio v-model="localCheck" @change="loadTerrain('local')">本地地形</el-radio>
            </div>
        </drawer>
    </div>
</template>

<script >
import drawer from 'components/drawer.vue'

export default {
    components: {
        'drawer': drawer
    },
    data() {
        return {
            pos: 'left',
            tran: 'overlay',
            drawerShow: false,
            sktCheck: false,
            localCheck: false,
            sktTerrain: null,
            localTerrain: null,
        }
    },
    watch: {

    },
    mounted() {
        this.$nextTick(function () {
            this.defineTerrain()
        })
    },
    methods: {
        defineTerrain() {
            this.sktTerrain = new Cesium.CesiumTerrainProvider({
                url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles'
            });

            this.localTerrain = new Cesium.CesiumTerrainProvider({
                url: 'http://local/'
            })

        },

        // cesium中只允许同时加载一种地形，如果你有需求尽量加载面积大的地形服务
        loadTerrain(type) {
            let viewer = this.viewer
            if (type === 'skt') {
                viewer.terrainProvider = this.sktTerrain;

            } else if (type === 'local') {
                viewer.terrainProvider = this.localTerrain;
            }
        },

        changeDrawerShow(state) {
            this.drawerShow = state
        },
    }
}
</script>

<style >

</style>