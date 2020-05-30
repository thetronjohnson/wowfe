import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/volunteer',
    //   name: 'Volunteer',
    //   component: Volunteer
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/profile',
    //   name: 'Profile',
    //   component: Profile
    // },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // }
  ]
})