// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import router from './router'
import ajax from '@/utils/ajax'

// 注册全局组件
import Status from '@/components/status'

Vue.component('Status', Status)

Vue.use(iView)
Vue.use(ajax)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>'
})
