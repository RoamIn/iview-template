import { arrayToMap } from '@/utils/data-converter'

// 请款理由 列表
export const reasonList = ({reasonList}) => {
    return JSON.parse(JSON.stringify(reasonList))
}

// 请款理由 map
export const reasonMap = ({reasonList}) => {
    return arrayToMap(reasonList)
}

// 申请状态 map
export const applicationStatusMap = ({applicationStatusMap}) => {
    return JSON.parse(JSON.stringify(applicationStatusMap))
}
