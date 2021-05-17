import { Button } from 'antd'
import Form from 'antd/lib/form/Form'
import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/actions/user.action'
import { AppState } from '../../store/types'
import './css/animate.css'
import './css/main.css'
import './css/util.css'

type UserProps = {
  username?: string
  password?: string
}

let user = JSON.parse(localStorage.getItem('user') as string)

const LoginPage = (): JSX.Element => {
  const [login, setLogin] = useState<UserProps>()
  const loggingIn = useSelector<AppState>((state) => state.authentication.loggingIn)
  const dispatch = useDispatch()
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  // useEffect(() => {
  //   if (user) {
  //     // window.location.href = `${window.location.href}admin`
  //     // history.push('/admin')
  //   }
  // }, [user])

  const handleOnLogin = () => {
    if (login?.username && login.password) {
      dispatch(userActions.login(login.username, login.password))
    }
  }
  return (
    <div className='limiter'>
      <div className='container-login100'>
        <div className='wrap-login100'>
          <div className='login100-pic js-tilt' data-tilt>
            <img src='images/img-01.png' alt='IMG' />
          </div>
          <Form className='login100-form validate-form' onSubmitCapture={handleOnLogin}>
            <span className='login100-form-title' style={{ fontWeight: 500 }}>
              Member Login
            </span>
            <div className='wrap-input100 validate-input' data-validate='Valid email is required: ex@abc.xyz'>
              <input
                className='input100'
                required
                type='text'
                name='username'
                onChange={handleOnChange}
                placeholder='Username'
              />
              <span className='focus-input100' />
              <span className='symbol-input100'>
                <i className='fa fa-envelope' aria-hidden='true' />
              </span>
            </div>
            <div className='wrap-input100 validate-input' data-validate='Password is required'>
              <input
                className='input100'
                required
                type='password'
                onChange={handleOnChange}
                name='password'
                placeholder='Password'
              />
              <span className='focus-input100' />
              <span className='symbol-input100'>
                <i className='fa fa-lock' aria-hidden='true' />
              </span>
            </div>
            <div className='container-login100-form-btn'>
              <Button htmlType='submit' className='login100-form-btn'>
                Login
              </Button>
            </div>
            <div className='text-center p-t-136'>
              <span className='txt1'>Forgot </span>
              <a className='txt2' href='#'>
                Username / Password?
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
