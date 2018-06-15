export default {
    searchApplicationList: {
        method: 'POST',
        url: '/applicationController/query'
    },
    getApplicationInfo: {
        method: 'GET',
        url: '/applicationController/getInfo'
    },
    createApplication: {
        method: 'POST',
        url: '/applicationController/create'
    },
    updateApplication: {
        method: 'POST',
        url: '/applicationController/update'
    }
}
