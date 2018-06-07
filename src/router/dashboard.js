export default {
    path: '/dashboard',
    component: {template: '<router-view></router-view>'},
    meta: {
        name: '面板',
        icon: 'menu'
    },
    children: [
        {
            path: '/',
            redirect: {name: 'hello'}
        },
        {
            path: 'hello',
            name: 'hello',
            component: () => import('@/views/dashboard/hello-world')
        }
    ]
}
