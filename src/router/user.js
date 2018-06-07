export default {
    path: '/user',
    component: {template: '<router-view></router-view>'},
    meta: {
        name: '用户管理',
        icon: 'people'
    },
    children: [
        {
            path: '',
            redirect: {name: 'userList'}
        },
        {
            path: 'list',
            name: 'userList',
            component: () => import('@/views/user/list')
        }
    ]
}
