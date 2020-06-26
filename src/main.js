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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
