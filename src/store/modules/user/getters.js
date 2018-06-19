import { arrayToMap } from '@/utils/data-converter'

export const userList = ({userList}) => {
    return JSON.parse(JSON.stringify(userList))
}

export const userMap = ({userList}) => {
    return arrayToMap(userList)
}
