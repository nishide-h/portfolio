import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Skills from '@/pages/Skills'
import Developed from '@/pages/Developed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/developed',
      name: 'Developed',
      component: Developed
    }
  ]
})
