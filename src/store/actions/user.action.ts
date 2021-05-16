import { userService } from '../../share/services/user.service'

export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE'

export const LOGOUT = 'USERS_LOGOUT'

export const GETALL_REQUEST = 'USERS_GETALL_REQUEST'
export const GETALL_SUCCESS = 'USERS_GETALL_SUCCESS'
export const GETALL_FAILURE = 'USERS_GETALL_FAILURE'

export const DELETE_REQUEST = 'USERS_DELETE_REQUEST'
export const DELETE_SUCCESS = 'USERS_DELETE_SUCCESS'
export const DELETE_FAILURE = 'USERS_DELETE_FAILURE'

export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE'

export const userActions = {
  login: (username: string, password: string) => {
    return (dispatch: (arg0: { type: string; user?: any; error?: any }) => void) => {
      dispatch(request({ username }))
      userService.login(username, password).then(
        (user: any) => {
          // history.push('/admin')
          dispatch(success(user))
          window.location.reload()
          // window.location.href = `${window.location.href}admin`
        },
        (error) => {
          alert('Đăng nhập thất bại!. Xin vui lòng kiểm tra lại tài khoản hoặc mật khẩu.')
          dispatch(failure(error.toString()))
          //   dispatch(alertActions.error(error.toString()))
        }
      )
    }
    function request(user: object) {
      return { type: LOGIN_REQUEST, payload: user }
    }
    function success(user: object) {
      return { type: LOGIN_SUCCESS, payload: user }
    }
    function failure(error: object) {
      return { type: LOGIN_FAILURE, error: error }
    }
  }
}
