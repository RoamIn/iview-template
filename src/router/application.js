export default {
    path: '/application',
    component: {template: '<router-view></router-view>'},
    meta: {
        title: '申请管理'
    },
    children: [
        {
            path: '',
            redirect: {name: 'applicationList'},
            meta: {
                hidden: true
            }
        },
        {
            path: 'list',
            name: 'applicationList',
            meta: {
                title: '申请列表',
                icon: 'ios-paper',
                keepAlive: true
            },
            component: () => import('@/views/application/list')
        },
        {
            path: 'create',
            name: 'createApplication',
            meta: {
                title: '创建申请',
                hidden: true
            },
            component: () => import('@/views/application/create')
        },
        {
            path: 'edit/:id',
            name: 'editApplication',
            meta: {
                title: '申请编辑',
                hidden: true
            },
            component: () => import('@/views/application/edit')
        },
        {
            path: 'view/:id',
            name: 'viewApplication',
            meta: {
                title: '申请查看',
                hidden: true
            },
            component: () => import('@/views/application/view')
        }
    ]
}
