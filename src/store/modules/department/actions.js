// 获取 部门 列表
export const getDepartmentTree = ({commit}) => {
    return this.$ajax('getDepartmentTree').then((tree) => {
        commit('setDepartmentTree', tree)
    })
}
