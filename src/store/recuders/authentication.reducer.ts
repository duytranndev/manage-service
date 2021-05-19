import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, USER_LOGOUT } from '../actions/user.action'

let user = JSON.parse(localStorage.getItem('user') as string)
const initialState = user ? { loggedIn: true, data: user } : {}

// const initialState = {
//   data: null,
//   loggingIn: false
// }

export const authenticationReducer = (state = initialState, action: any): any => {
  // console.log('action :>> ', action)

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        data: action.payload
      }
    case LOGIN_SUCCESS:
      console.log(`action.payload`, action)

      return {
        ...state,
        loggingIn: true,
        data: action.payload
      }
    case LOGIN_FAILURE:
      return {}
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
