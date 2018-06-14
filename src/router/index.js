/**
 * 如果要做路由动态加载，how & when
 */

import Vue from 'vue'
import Router from 'vue-router'

// 权限验证
import authority from '../utils/authority'

// views
import login from './login'
import notFound from './not-found'
import dashboard from './dashboard'
import echart from './echart'
import user from './user'
import department from './department'

Vue.use(Router)

const router = new Router({
    routes: [
        login,
        {
            path: '/',
            meta: {
                title: '首页',
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
                user,
                department
            ]
        },
        notFound
    ]
})

// Navigation Guards
router.beforeEach((to, from, next) => {
    if (authority.hasLoggedIn() && to.name === 'login') {
        next({path: '/'})
    } else if (!authority.hasLoggedIn() && to.name !== 'login') {
        // sessionStorage.setItem('redirect', to.path);
        next({
            name: 'login',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})

export default router
