import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link, useHistory } from 'react-router-dom'
import LoginPage from '../../../pages/login/LoginPage'
import { STAFF_URL } from '../../../share/common/api/api.constants'
import { moduleApi } from '../../../share/handle/fetchData'
import AdminRouting from '../../../share/routing/admin'
import { AppState } from '../../../store/types'
import MenuAdmin from '../../../ui/organisms/menu'
import HeaderAdmin from '../../organisms/header-admin'
// import './index.scss'

const { Sider, Content } = Layout
let user = JSON.parse(sessionStorage.getItem('user') as any)

export default function AdminLayout() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const AuthStr = `Bearer ${user?.access_token}`
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const staff = useSelector<AppState>((state) => state.authentication.data)

  useEffect(() => {
    user &&
      moduleApi
        .getDetail(STAFF_URL, user?._id)
        .then((res) => dispatch({ type: 'USERS_LOGIN_REQUEST', payload: res.data.data }))
  }, [user])

  useEffect(() => {
    if (!user) {
      history.push('/login')
    }
  }, [user])

  console.log('staff :>> ', staff)

  return (
    <>
      {user ? (
        <BrowserRouter>
          <Layout>
            <Sider
              theme='light'
              trigger={null}
              collapsible
              style={{ width: 217, position: 'fixed', overflowY: 'scroll', height: '100%' }}>
              <Link to='/admin'>
                <img
                  src='https://dichvucong.gov.vn/p/home/theme/img/header/logo.png'
                  style={{ width: '100%', zIndex: 1, height: '100%' }}
                  alt=''
                />
              </Link>
              <MenuAdmin />
            </Sider>

            <Layout className='site-layout'>
              <HeaderAdmin />
              <Content
                className='site-layout-background'
                style={{
                  margin: '24px 16px',
                  padding: '10px 24px',
                  minHeight: 280
                }}>
                <AdminRouting />
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </>
  )
}
