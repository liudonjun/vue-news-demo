import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Seek from '@/pages/seek/Seek'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/seek',
      name: 'Seek',
      component: Seek
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
