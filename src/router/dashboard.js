export default {
    path: '/dashboard',
    component: {template: '<router-view></router-view>'},
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
        }
    ]
}
