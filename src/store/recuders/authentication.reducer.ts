import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../actions/user.action'

let user = JSON.parse(localStorage.getItem('user') as string)
const initialState = user ? { loggedIn: true, user } : {}

export function authentication(state = initialState, action: any) {
  // console.log('action :>> ', action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      }
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      console.log(action)

      return {}
    case LOGOUT:
      return {}
    default:
      return state
  }
}
