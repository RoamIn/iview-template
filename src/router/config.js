export default {
    path: '/config',
    component: () => import('@/views/config'),
    meta: {
        title: '配置管理'
    },
    children: [
        {
            path: '',
            redirect: {name: 'configList'},
            meta: {
                hidden: true
            }
        },
        {
            path: 'list',
            name: 'configList',
            meta: {
                title: '配置列表',
                icon: 'settings',
                keepAlive: true
            },
            component: () => import('@/views/config/list')
        },
        {
            path: 'create',
            name: 'createConfig',
            meta: {
                title: '创建配置',
                hidden: true
            },
            component: () => import('@/views/config/create')
        },
        {
            path: 'edit/:id',
            name: 'editConfig',
            meta: {
                title: '配置编辑',
                hidden: true
            },
            component: () => import('@/views/config/edit')
        }
    ]
}
