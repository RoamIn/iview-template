/**
 * 将数组转换成键值对
 * @param arr 待转换的数组
 * @param key 键
 * @returns {Object}
 */
export function arrayToMap (arr = [], key = 'id') {
    const map = {}

    arr.forEach((item) => {
        map[item[key]] = item
    })

    return map
}

/**
 * 将 tree 结构的数据转换成键值对
 * @param tree 待转换的 tree
 * @param keys 键映射
 * @param path 用于存储层级关系，非必填
 * @returns {Object}
 */
export function treeToMap (tree, keys, path = []) {
    const map = {}

    tree.forEach((item) => {
        const value = item[ keys.value ]
        const label = item[ keys.label ]
        const children = item[ keys.children ]

        map[value] = {
            id: value,
            name: label,
            path: path.concat([label])
        }

        if (children && children.length > 0) {
            Object.assign(map, treeToMap(children, keys, path.concat([label])))
        }
    })

    return map
}

/**
 * 将 tree 结构的数组转换成 Cascader 所需要的结构
 * @param tree 待转换的 tree
 * @param keys 键映射
 * @returns {Array}
 */
export function treeToCascader (tree, keys) {
    const result = []

    // 遍历 tree
    tree.forEach((item) => {
        // 读取 map 的键值映射
        const value = item[ keys.value ]
        const label = item[ keys.label ]
        let children = item[ keys.children ]

        // 如果有子节点，递归
        if (children) {
            children = treeToCascader(children, keys)
        }

        result.push({
            value,
            label,
            children
        })
    })

    return result
}

/**
 * 获取数组最后一项
 * @param arr 被取值的数组
 * @returns {*}
 */
export function getArrayLastOne (arr = []) {
    return arr[arr.length - 1]
}
