import cookie from 'js-cookie'

export default {
    getAuthority () {
        return cookie.get('token')
    },
    hasLoggedIn () {
        return typeof this.getAuthority() !== 'undefined'
    },
    login (data) {
        return new Promise((resolve) => {
            setTimeout((token = 'token', expire = 18000) => {
                cookie.set('token', token, {
                    expire
                })

                resolve()
            })
        })
    }
}
