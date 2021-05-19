export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(sessionStorage.getItem('user') as any)

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.access_token }
  } else {
    return {}
  }
}
