// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery'
import 'bootstrap3/dist/js/bootstrap.js'
import 'bootstrap3/dist/css/bootstrap.css'
import 'swiper/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import axios from 'axios'
import Bmob from 'hydrogen-js-sdk'
import Vuex from 'vuex'

// 初始化
Bmob.initialize('5baa52ee149cc61c', '123456')
// 挂载到全局使用
Vue.prototype.Bmob = Bmob
// 挂载到全局使用
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

router.beforeEach((to, from, next) => {
  if (to.meta.auth) { // 如果路由元信息meta中的auth为ture，进行拦截
   if (localStorage.getItem('user')) {
     next()// 如果已经登录可直接进入页面
   } else { // 否则跳入登录页，并记住要跳入的页面，以方便登录完成后直接竟然该页面
     next({
       path: '/register',
       query: {
         redirect: to.fullPath // 把要跳的路径作为参数传到登录页面
       }
     })
   }
  } else {
    next() // 直接进入页面
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

