export default {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
        hidden: true
    },
    component: () => import('@/views/login')
}
