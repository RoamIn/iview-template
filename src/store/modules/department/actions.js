import { ajax } from '@/utils/ajax'

// 获取 部门 列表
export const getDepartmentTree = ({commit}) => {
    return ajax('getDepartmentTree').then(({data}) => {
        commit('setDepartmentTree', data)
    })
}
