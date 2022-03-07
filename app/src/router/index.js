//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
//使用插件
Vue.use(VueRouter)

//先把VueRouter原型对象的push，存一份下来
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

//重写push replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

//配置路由
export default new VueRouter({
  //配置路由
  routes,

  scrollBehavior(to, from, savePosition) {
    return { y: 0 }
  },
})
