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
              <StarTwoTone className='icon' />
              <p className='title'>Phòng Ban</p>
            </Link>
            <Link to={`${match.path}/user`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Nhân Viên</p>
            </Link>
            <Link to={`${match.path}/field`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Lĩnh Vực</p>
            </Link>
            <Link to={`${match.path}`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Dân Sự</p>
            </Link>
            <Link to={`${match.path}`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Hồ Sơ</p>
            </Link>
            <Link to={`${match.path}`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Hồ Sơ Nhận</p>
            </Link>
            <Link to={`${match.path}`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Hồ Sơ Duyệt</p>
            </Link>
            <Link to={`${match.path}/news`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Tin Tức</p>
            </Link>
            <Link to={`${match.path}/sender`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Người Gửi</p>
            </Link>
            <Link to={`${match.path}`} className='box-icon'>
              <StarTwoTone className='icon' />
              <p className='title'>Thống Kê</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
