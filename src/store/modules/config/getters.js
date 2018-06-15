// 请款理由 列表
export const reasonList = state => {
    return JSON.parse(JSON.stringify(state.reasonList))
}

// 请款理由 map
export const reasonMap = state => {
    const map = {}

    state.reasonList.forEach((item) => {
        map[item.id] = item
    })

    return map
}

// 申请状态 map
export const applicationStatusMap = state => {
    return state.applicationStatusMap
}
