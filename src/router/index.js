import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Seek from '@/pages/seek/Seek'
import Login from '@/pages/login/Login'
import TopDetail from '@/pages/detail/TopDetail'
import CjDetail from '@/pages/cjdetail/CjDetail'
import TyDetail from '@/pages/tydetail/TyDetail'
import YlDetail from '@/pages/yldetail/YlDetail'
import JsDetail from '@/pages/Jsdetail/JsDetail'
import SwiperDetail from '@/pages/Swiperdetail/SwiperDetail'
import TopNews from '@/pages/home/components/TopNews'
import TyNews from '@/pages/home/components/TyNews'
import YlNews from '@/pages/home/components/YlNews'
import CjNews from '@/pages/home/components/CjNews'
import JsNews from '@/pages/home/components/JsNews'

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
          path: '/TyNews',
          name: 'TyNews',
          component: TyNews
        }, {
          path: '/YlNews',
          name: 'YlNews',
          component: YlNews
        }, {
          path: '/CjNews',
          name: 'CjNews',
          component: CjNews
        }, {
          path: '/JsNews',
          name: 'JsNews',
          component: JsNews
        }],
    }, {
      path: '/Seek',
      name: 'Seek',
      component: Seek
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/TopDetail/:index',
      name: 'TopDetail',
      component: TopDetail
    }, {
      path: '/CjDetail/:index',
      name: 'CjDetail',
      component: CjDetail
    }, {
      path: '/TyDetail/:index',
      name: 'TyDetail',
      component: TyDetail
    }, {
      path: '/YlDetail/:index',
      name: 'YlDetail',
      component: YlDetail
    }, {
      path: '/JsDetail/:index',
      name: 'JsDetail',
      component: JsDetail
    }, {
      path: '/SwiperDetail/:index',
      name: 'SwiperDetail',
      component: SwiperDetail
    }
  ]
})
