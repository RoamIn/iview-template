export default {
    path: '/department',
    component: {template: '<router-view></router-view>'},
    meta: {
        title: '部门管理'
    },
    children: [
        {
            path: '',
            redirect: {name: 'departmentList'},
            meta: {
                hidden: true
            }
        },
        {
            path: 'list',
            name: 'departmentList',
            meta: {
                title: '部门列表',
                icon: 'ios-people',
                keepAlive: true
            },
            component: () => import('@/views/department/list')
        },
        {
            path: 'create',
            name: 'createDepartment',
            meta: {
                title: '创建部门',
                hidden: true
            },
            component: () => import('@/views/department/create')
        },
        {
            path: 'edit/:id',
            name: 'editDepartment',
            meta: {
                title: '部门编辑',
                hidden: true
            },
            component: () => import('@/views/department/edit')
        },
        {
            path: 'view/:id',
            name: 'viewDepartment',
            meta: {
                title: '部门查看',
                hidden: true
            },
            component: () => import('@/views/department/view')
        }
    ]
}
