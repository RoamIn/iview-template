import Vue from 'vue'
import Router from 'vue-router'

import authority from '../utils/authority'

import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(authority.hasLoggedIn())

  if (authority.hasLoggedIn() && to.path === '/login') {
    next({path: '/'})
  } else if (!authority.hasLoggedIn() && to.path !== '/login') {
    // sessionStorage.setItem('redirect', to.path);
    next({path: '/login'})
  } else {
    next()
  }
})

export default router
