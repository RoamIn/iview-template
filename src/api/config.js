export default {
    searchConfig: {
        method: 'GET',
        url: '/configController/query'
    },
    getConfigInfo: {
        method: 'GET',
        url: '/configController/getInfo'
    },
    createConfig: {
        method: 'POST',
        url: '/configController/create'
    },
    updateConfig: {
        method: 'POST',
        url: '/configController/update'
    },
    getApplicationStatus: {
        method: 'GET',
        url: '/configController/getApplicationStatus'
    },
    getReasonList: {
        method: 'GET',
        url: '/configController/getReasonList'
    }
}
