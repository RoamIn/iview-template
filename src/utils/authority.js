import cookie from 'js-cookie'

export default {
    getAuthority () {
        return cookie.get('token')
    },
    hasLoggedIn () {
        return typeof this.getAuthority() !== 'undefined'
    },
    set ({token, expire}) {
        cookie.set('token', token, {
            expire
        })
    },
    logout () {
        cookie.remove('token')
    }
}
