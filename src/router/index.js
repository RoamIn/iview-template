import Vue from 'vue'
import Router from 'vue-router'

import authority from '../utils/authority'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (authority.loggedIn() && to.path === '/login') {
    next({ path: '/' })
  } else if (!authority.loggedIn() && to.path !== '/login') {
    // sessionStorage.setItem('redirect', to.path);
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
