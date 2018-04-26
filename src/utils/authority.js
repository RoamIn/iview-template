export function getAuthority() {
  return localStorage.getItem('token')
}

export function loggedIn() {
  return typeof getAuthority() !== 'undefined'
}
