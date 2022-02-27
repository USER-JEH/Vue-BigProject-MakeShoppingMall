import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
//第一个参数，全局组件的名字 第二个参数，哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'

import '@/mock/mockServe'

import 'swiper/css/swiper.css'

import { repGetSearchInfo } from '@/api'
console.log(repGetSearchInfo({}))
new Vue({
  render: (h) => h(App),

  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由
  router,
  //注册仓库
  store,
}).$mount('#app')
