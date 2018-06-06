import cookie from './cookie'

export default {
  getAuthority () {
    return cookie.get('token')
  },
  hasLoggedIn () {
    return !!this.getAuthority()
  },
  login (data) {
    return new Promise((resolve) => {
      setTimeout((token='token', expire=60*60*5) => {
        cookie.set('token', token, expire)
        resolve()
      })
    })
  }
}
