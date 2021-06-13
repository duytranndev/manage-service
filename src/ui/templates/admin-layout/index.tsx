import { Fab, makeStyles } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import { BackTop, Layout } from 'antd'
import 'antd/dist/antd.css'
import Modal from 'antd/lib/modal/Modal'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link, useHistory } from 'react-router-dom'
import LoginPage from '../../../pages/login/LoginPage'
import { ASSIGNMENT_URL, PROFILE_URL, STAFF_URL } from '../../../share/common/api/api.constants'
import { moduleApi } from '../../../share/handle/fetchData'
import { ProfileInterface } from '../../../share/interface/profile.interface'
import { StaffInterface } from '../../../share/interface/staff.interface'
import AdminRouting from '../../../share/routing/admin'
import { AppState } from '../../../store/types'
import MenuAdmin from '../../../ui/organisms/menu'
import HeaderAdmin from '../../organisms/header-admin'
import './index.scss'

const { Sider, Content } = Layout
let user = JSON.parse(sessionStorage.getItem('user') as any)

const useStyles = makeStyles({
  btn_add_action: {
    position: 'fixed',
    bottom: '5%',
    right: '1%',
    zIndex: 1
  }
})

export default function AdminLayout() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const classes = useStyles()

  const history = useHistory()
  const dispatch = useDispatch()
  const AuthStr = `Bearer ${user?.access_token}`
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const userLogin = useSelector<AppState, StaffInterface>((state) => state.authentication.data)

  const [profiles, setProfiles] = useState<ProfileInterface[]>([])

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    if (user?.role === 'ADMIN') {
      const params = {
        browsed: false,
        assignment: false
      }
      moduleApi.get(PROFILE_URL, params).then((res) => {
        if (res.data.data) {
          return setProfiles(res.data.data)
        }
      })
    } else if (user?.role === 'MEMBER') {
      if (userLogin?._id) {
        const params = {
          staffId: userLogin?._id,
          status: false
        }
        moduleApi.get(ASSIGNMENT_URL, params).then((res) => {
          if (res.data.data) {
            return setProfiles(res.data.data)
          }
        })
      }
    }
  }, [userLogin, user])

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

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    marginLeft: '50px',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14
  }

  return (
    <>
      {user ? (
        <BrowserRouter>
          <Layout>
            <Sider
              theme='light'
              trigger={null}
              collapsible
              className='menu'
              style={{
                width: 217,
                position: 'fixed',
                overflowY: 'scroll',
                height: '100%',
                backgroundColor: '#001529'
              }}>
              <Link to='/admin' style={{ width: 217 }}>
                <img
                  src='https://dichvucong.gov.vn/p/home/theme/img/header/logo.png'
                  style={{ width: '100%', zIndex: 1, height: '48px' }}
                  alt=''
                />
              </Link>
              <MenuAdmin />
            </Sider>

            <Layout className='site-layout' style={{ marginLeft: '185px' }}>
              <HeaderAdmin />
              <Content
                className='site-layout-background'
                style={{
                  margin: '10px 16px',
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
      <BackTop style={{ marginBottom: '4%' }}>
        <div style={style as any}>
          <ArrowUpwardIcon style={{ marginTop: '6px' }} />
        </div>
      </BackTop>
      {profiles.length > 0 && (
        <>
          <div className='btn-notification'>
            <Fab color='primary' aria-label='add' onClick={showModal} className={classes.btn_add_action}>
              <NotificationsActiveIcon />
            </Fab>
          </div>

          <Modal
            title={user?.role === 'ADMIN' ? 'DANH SÁCH HỒ SƠ CHƯA PHÂN CÔNG' : 'DANH SÁCH HỒ SƠ CHƯA DUYỆT'}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            className='modal-list'>
            {user?.role === 'ADMIN' ? (
              <table>
                <tr>
                  <th>Mã hồ sơ</th>
                  <th>Ngày gửi</th>
                </tr>
                {profiles.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <a href={`/admin/profile/${item.profileCode}`}>{item.profileCode}</a>
                    </td>
                    <td>{item.insertTime}</td>
                  </tr>
                ))}
              </table>
            ) : (
              <table>
                <tr>
                  <th>Mã hồ sơ</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày kết thúc</th>
                </tr>
                {profiles.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <a href={`/admin/profile/${item.profileCode}`}>{item.profileCode}</a>
                    </td>
                    <td>{item.timeStart}</td>
                    <td>{item.timeEnd}</td>
                  </tr>
                ))}
              </table>
            )}
          </Modal>
        </>
      )}
    </>
  )
}
