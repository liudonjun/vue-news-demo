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
import Register from '../pages/register/Register'
import Enroll from '../pages/enroll/Enroll'
import Forget from '../pages/forget/Forget'
import Feedback from '../pages/feedback/Feedback'
import Information from '../pages/information/Information'
import Feedbacktable from '../pages/feedbacktable/Feedbacktable'
import Collect from '../pages/collect/Collect'
import Collectdetail from '../pages/collectdetail/Collectdetail'

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
      component: Login,
      meta: {auth: true}
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
      path: '/SwiperDetail/:keyword/:index',
      name: 'SwiperDetail',
      component: SwiperDetail
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    }, {
      path: '/forget',
      name: 'Forget',
      component: Forget
    }, {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    }, {
      path: '/information',
      name: 'Information',
      component: Information
    }, {
      path: '/feedbacktable',
      name: 'Feedbacktable',
      component: Feedbacktable
    }, {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },{
      path: '/collectdetail',
      name: 'Collectdetail',
      component: Collectdetail
    }
  ]
})
