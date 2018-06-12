export default {
    path: '/echart',
    component: {template: '<router-view></router-view>'},
    meta: {
        title: 'Echart',
        icon: 'stats-bars'
    },
    children: [
        {
            path: '',
            redirect: {name: 'gl'},
            meta: {
                hidden: true
            }
        },
        {
            path: 'gl',
            name: 'gl',
            meta: {
                title: 'Echart GL'
            },
            component: () => import('@/views/echart/gl')
        }
    ]
}
