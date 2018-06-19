export default {
    path: '/user',
    component: () => import('@/views/user'),
    meta: {
        title: '用户管理'
    },
    children: [
        {
            path: '',
            redirect: {name: 'userList'},
            meta: {
                hidden: true
            }
        },
        {
            path: 'list',
            name: 'userList',
            meta: {
                title: '用户列表',
                icon: 'ios-people',
                keepAlive: true
            },
            component: () => import('@/views/user/list')
        },
        {
            path: 'create',
            name: 'createUser',
            meta: {
                title: '创建用户',
                hidden: true
            },
            component: () => import('@/views/user/create')
        },
        {
            path: 'edit/:id',
            name: 'editUser',
            meta: {
                title: '用户编辑',
                hidden: true
            },
            component: () => import('@/views/user/edit')
        },
        {
            path: 'view/:id',
            name: 'viewUser',
            meta: {
                title: '用户查看',
                hidden: true
            },
            component: () => import('@/views/user/view')
        }
    ]
}
