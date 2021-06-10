import toast from 'react-hot-toast'
import { userService } from '../../share/services/user.service'

export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE'

export const USER_LOGOUT = 'USERS_LOGOUT'
export const USER_LOGIN = 'USER_LOGIN'

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
  login: (username: string, password: string, from: any) => {
    return async (dispatch: (arg0: { type: string; user?: any; error?: any }) => void) => {
      const isLogin = userService.login(username, password)
      toast.promise(
        isLogin,
        {
          loading: 'Loading',
          success: (data) => 'Đăng nhập thành công!!',
          error: (err) => `Đăng nhập thất bại!. Xin vui lòng kiểm tra lại tài khoản hoặc mật khẩu.`
        },
        {
          style: {
            minWidth: '250px'
          },
          success: {
            duration: 5000,
            icon: '🔥'
          }
        }
      )
      const data = await isLogin.then((res) => res?.data.data)
      if (data) {
        window.location.href = `${window.location.origin}/admin`
      }
      // userService.login(username, password).then(
      //   (user: any) => {
      //     // moduleApi.getDetail(STAFF_URL, AuthStr).then((res) => dispatch(success(res.data.data)))
      //     // console.log(`user`, user)
      //     // window.location.reload()
      //     // console.log(`window.location`, window.location)
      //   },
      //   (error) => {
      //     alert('Đăng nhập thất bại!. Xin vui lòng kiểm tra lại tài khoản hoặc mật khẩu.')
      //     //   dispatch(alertActions.error(error.toString()))
      //   }
      // )
    }
  }
}
