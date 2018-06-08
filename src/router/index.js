/**
 * 如果要做路由动态加载，how & when
 */

import Vue from 'vue'
import Router from 'vue-router'

// 权限验证
import authority from '../utils/authority'

// views
import dashboard from './dashboard'
import user from './user'
import echart from './echart'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            meta: {
                hidden: true
            },
            component: () => import('@/views/app/index'),
            children: [
                {
                    path: '',
                    redirect: {name: 'hello'},
                    meta: {
                        hidden: true
                    }
                },
                dashboard,
                echart,
                user
            ]
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                hidden: true
            },
            component: () => import('@/views/login')
        },
        {
            path: '*',
            name: '404',
            meta: {
                hidden: true
            },
            component: () => import('@/views/404')
        }
    ]
})

// Navigation Guards
router.beforeEach((to, from, next) => {
    if (authority.hasLoggedIn() && to.path === '/login') {
        next({path: '/'})
    } else if (!authority.hasLoggedIn() && to.path !== '/login') {
        // sessionStorage.setItem('redirect', to.path);
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})

export default router
