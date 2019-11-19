import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/layer',
      name: 'layer',
      component: () =>
        import(/* webpackChunkName: "layer" */ './views/Layer/index.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () =>
        import(/* webpackChunkName: "model" */ './views/Model/index.vue')
    },
    {
      path: '/three',
      name: 'three',
      component: () =>
        import(/* webpackChunkName: "three" */ './views/Three/index.vue')
    },
    {
      path: '/typhoon',
      name: 'typhoon',
      component: () =>
        import(/* webpackChunkName: "typhoon" */ './views/Typhoon/index.vue')
    }
  ]
})
