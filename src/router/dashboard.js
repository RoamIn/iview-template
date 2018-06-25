export default {
    path: '/dashboard',
    component: () => import('@/views/dashboard'),
    meta: {
        title: '面板'
    },
    children: [
        {
            path: '/',
            redirect: {name: 'hello'},
            meta: {
                hidden: true
            }
        },
        {
            path: 'hello',
            name: 'hello',
            meta: {
                title: '欢迎',
                icon: 'star'
            },
            component: () => import('@/views/dashboard/hello-world')
        },
        {
            path: 'test',
            name: 'test',
            meta: {
                title: '测试',
                icon: 'stats'
            },
            component: () => import('@/views/dashboard/component-test')
        }
    ]
}
