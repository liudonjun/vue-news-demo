import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Seek from '@/pages/seek/Seek'
import Login from '@/pages/login/Login'
import TopNews from '@/pages/home/components/TopNews'
import ShNews from '@/pages/home/components/ShNews'
import YlNews from '@/pages/home/components/YlNews'
import CjNews from '@/pages/home/components/CjNews'
import SsNews from '@/pages/home/components/SsNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/TopNews',
      children: [
        {
          path: '/TopNews',
          name: 'TopNews',
          component: TopNews
        }, {
          path: '/ShNews',
          name: 'ShNews',
          component: ShNews
        }, {
          path: '/YlNews',
          name: 'YlNews',
          component: YlNews
        }, {
          path: '/CjNews',
          name: 'CjNews',
          component: CjNews
        }, {
          path: '/SsNews',
          name: 'SsNews',
          component: SsNews
        }],
    }, {
      path: '/Seek',
      name: 'Seek',
      component: Seek
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
