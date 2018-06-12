export default {
    path: '/user',
    component: {template: '<router-view></router-view>'},
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
                icon: 'ios-people'
            },
            component: () => import('@/views/user/list')
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
