export default {
    path: '/user',
    component: {template: '<router-view></router-view>'},
    meta: {
        name: '用户管理'
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
                name: '用户列表'
            },
            component: () => import('@/views/user/list')
        }
    ]
}
