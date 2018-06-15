// 获取 理由 列表
export const getReasonList = ({commit}) => {
    return this.$ajax('getReasonList').then((list) => {
        commit('setReasonList', list)
    })
}

// 获取 申请状态 列表
export const getApplicationStatusMap = ({commit}) => {
    return this.$ajax('getApplicationStatus').then((map) => {
        commit('setApplicationStatusMap', map)
    })
}
