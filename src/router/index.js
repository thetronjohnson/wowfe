import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Volunteer from '@/components/Volunteer'
import Profile from '@/components/Profile'
import Dashboard from '@/components/Dashboard'
import Add from '@/components/Add'
import Faq from '@/components/Faq'

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
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ]
})