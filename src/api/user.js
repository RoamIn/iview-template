export default {
    searchUserList: {
        method: 'POST',
        url: '/userController/query'
    },
    getUserInfo: {
        method: 'GET',
        url: '/userController/getInfo'
    },
    createUser: {
        method: 'POST',
        url: '/userController/create'
    },
    updateUser: {
        method: 'POST',
        url: '/userController/update'
    },
    getUserList: {
        method: 'GET',
        url: '/userController/getAll'
    }
}
