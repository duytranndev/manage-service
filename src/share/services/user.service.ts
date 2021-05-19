import axios from 'axios'
import { BASE_URL } from '../common/api/api.constants'

export const userService = {
  login: (username?: string, password?: string) => {
    return axios({
      method: 'POST',
      url: `${BASE_URL}/auth/login`,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ username, password })
    }).then((response) => {
      if (response.data.message == 'success') {
        console.log(`object`, response.data.data)
        sessionStorage.setItem('user', JSON.stringify(response.data.data))
        return response
      }
    })
  }
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

// function handleResponse(response: { data: any; status: number; message: any }) {
//   const { data } = response
//   // const data = text && JSON.parse(text)
//   if (!data) {
//     if (response.message === 'success') {
//       console.log(`data`, data)
//       // auto logout if 401 response returned from api
//       logout()
//       window.location.reload(true)
//     }

//     const error = (data && data.message) || response.message
//     return Promise.reject(error)
//   }

//   return data
// }
