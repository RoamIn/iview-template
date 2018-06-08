export default {
    path: '/dashboard',
    component: {template: '<router-view></router-view>'},
    meta: {
        name: '面板'
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
                name: '欢迎'
            },
            component: () => import('@/views/dashboard/hello-world')
        }
    ]
}
