export default {
  path: '/echart',
  name: 'echart',
  component: {template: '<router-view></router-view>'},
  meta: {
    name: '图表',
    icon: 'menu'
  },
  children: [
    {
      path: '',
      redirect: {name: 'gl'}
    },
    {
      path: 'gl',
      name: 'gl',
      component: () => import('@/views/echart/gl')
    }
  ]
}
