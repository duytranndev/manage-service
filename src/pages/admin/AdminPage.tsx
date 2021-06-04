import { StarTwoTone } from '@ant-design/icons'
import { default as React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { AppState } from '../../store/types'
import './admin.scss'

export default function AdminPage() {
  const match = useRouteMatch()
  const user = useSelector<AppState, any>((state) => state.authentication.data)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // const isLoading = useSelector<AppState, any>((state) => state.authentication.loggingIn)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      setIsLoading(true)
    }
  }, [user])

  // console.log(`user`, user)

  return (
    <>
      {isLoading ? (
        <div className='row row-toolbar'>
          <div className='col-lg-12 toolbar'>
            <Link to={`${match.path}/department`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#1abc9c' }} />
              <p className='title'>Phòng Ban</p>
            </Link>
            <Link to={`${match.path}/staff`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#2ecc71' }} />
              <p className='title'>Nhân Viên</p>
            </Link>
            <Link to={`${match.path}/field`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#3498db' }} />
              <p className='title'>Lĩnh Vực</p>
            </Link>
            <Link to={`${match.path}/unit`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#9b59b6' }} />
              <p className='title'>Đơn vị</p>
            </Link>
            {user?.role === 'ADMIN' && (
              <>
                <Link to={`${match.path}/profile`} className='box-icon'>
                  <StarTwoTone className='icon' style={{ backgroundColor: '#e67e22' }} />
                  <p className='title'>Quản Lý Hồ Sơ</p>
                </Link>
                <Link to={`${match.path}/assignment`} className='box-icon'>
                  <StarTwoTone className='icon' style={{ backgroundColor: '#e67e22' }} />
                  <p className='title'>Quản Lý Phân Công</p>
                </Link>
              </>
            )}

            <Link to={`${match.path}/service`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#f1c40f' }} />
              <p className='title'>Dịch vụ</p>
            </Link>
            {user?.role === 'MEMBER' && (
              <Link to={`${match.path}/my-profile`} className='box-icon'>
                <StarTwoTone className='icon' style={{ backgroundColor: '#e74c3c' }} />
                <p className='title'>Phân Công Của Tôi</p>
              </Link>
            )}
            <Link to={`${match.path}/news`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#1abc9c' }} />
              <p className='title'>Tin Tức</p>
            </Link>

            <Link to={`${match.path}/statistical`} className='box-icon'>
              <StarTwoTone className='icon' style={{ backgroundColor: '#1abc9c' }} />
              <p className='title'>Thống Kê</p>
            </Link>
          </div>
          <iframe
            src='https://dashboard.tawk.to/#/dashboard/60aca562bbd5354c0fdbf1cc'
            name='iframe_a'
            height='600px'
            width='100%'
            title='Iframe Example'></iframe>
        </div>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
