import { treeToMap, treeToCascader } from '@/utils/data-converter'

// 部门 tree
export const departmentTree = ({departmentTree}) => {
    return JSON.parse(JSON.stringify(departmentTree))
}

// 部门 Cascader tree
export const departmentCascaderTree = ({departmentTree}) => {
    return treeToCascader(departmentTree, {value: 'id', label: 'name', children: 'departments'})
}

export const departmentMap = ({departmentTree}) => {
    const map = treeToMap(departmentTree, {value: 'id', label: 'name', children: 'departments'})

    return map
}
