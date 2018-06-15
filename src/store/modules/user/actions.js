// 获取 用户 列表
export const getUserList = ({commit}) => {
    return this.$ajax('getUserList').then((list) => {
        commit('setUserList', list)
    })
}
