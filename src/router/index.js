import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Volunteer from '@/components/Volunteer'
import Profile from '@/components/Profile'
import Dashboard from '@/components/Dashboard'
import AddData from '@/components/AddData'
import Faq from '@/components/Faq'
import AddGauge from '@/components/AddGauge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/volunteer',
      name: 'Volunteer',
      component: Volunteer
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add-data',
      name: 'AddData',
      component: AddData
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/add-gauge',
      name: 'AddGauge',
      component: AddGauge
    }
  ]
})