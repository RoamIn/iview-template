import { ajax } from '@/utils/ajax'

// 获取 用户 列表
export const getUserList = function ({commit}) {
    return ajax('getUserList').then(({data}) => {
        commit('setUserList', data)
    })
}
