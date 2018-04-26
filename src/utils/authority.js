export default {
  getAuthority () {
    return localStorage.getItem('token')
  },
  hasLoggedIn () {
    return !!this.getAuthority()
  }
}
