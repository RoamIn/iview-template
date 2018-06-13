import axios from 'axios'
import { Message, LoadingBar } from 'iview'

import API from '@/api'
import router from '@/router'
import authority from './authority'

// 基础配置
const ajax = axios.create({
    baseURL: API.baseURL,
    timeout: 10000
})

// 全局 loading
const loading = {
    count: 0,
    show () {
        if (this.count === 0) {
            this.start()
        }

        this.count++
    },
    tryHide () {
        if (this.count <= 0) {
            return
        }

        this.count--

        if (this.count === 0) {
            this.end()
        }
    },
    start () {
        LoadingBar.start()
    },
    end () {
        LoadingBar.finish()
    }
}

/**
 * 混入全局参数 token
 * @param params
 * @returns {{} & {} & {token: *}}
 */
function mixinGlobalParams (params = {}) {
    const token = authority.getAuthority()

    return Object.assign({}, params, {
        token
    })
}

// Add a request interceptor
ajax.interceptors.request.use((config) => {
    // 混入公共参数
    switch (config.method) {
        case 'put':
        case 'post':
        case 'patch':
            // 这些情况，请求参数放在 params
            config.data = mixinGlobalParams(config.data)

            break
        default:
            // 默认，请求参数放在 params
            config.params = mixinGlobalParams(config.data)
    }

    if (config.needLoading) {
        loading.show()
    }

    return config
},
(error) => {
    Message.error(error.message)
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
ajax.interceptors.response.use((response) => {
    // Do something with response data
    const res = response.data

    if (response.config.needLoading) {
        loading.tryHide()
    }

    if (res.code !== 'OK') {
        return Promise.reject(new Error(res.data))
    }

    return res
},
(error) => {
    // Do something with response error
    if (typeof error.response === 'undefined') {
        Message.error(error.message)

        return Promise.reject(error)
    }

    switch (error.response.status) {
        case 403:
            Message.error('无权限')
            authority.logout()
            router.go({
                name: 'login',
                query: {
                    redirect: router.history.current.path
                }
            })

            break
        default:
            Message.error('网络错误')
    }

    return Promise.reject(error)
})

export default function (Vue) {
    Vue.prototype.$ajax = function (apiName, data = {}, needLoading = true) {
        const {url, method} = API[apiName]

        return ajax({
            url,
            method,
            data,
            needLoading
        })
    }
}
