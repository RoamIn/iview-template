import { ajax } from '@/utils/ajax'

// 获取 理由 列表
export const getReasonList = ({commit}) => {
    return ajax('getReasonList').then(({data}) => {
        commit('setReasonList', data)
    })
}

// 获取 申请状态 列表
export const getApplicationStatusMap = ({commit}) => {
    return ajax('getApplicationStatus').then(({data}) => {
        commit('setApplicationStatusMap', data)
    })
}
