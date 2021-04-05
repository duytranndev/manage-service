import { StarTwoTone } from '@ant-design/icons'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import ProfileReceived from '../../ui/organisms/profile/form-management'
import ProgressChart from '../../ui/organisms/progress'
import './admin.scss'
export default function AdminPage() {
  const match = useRouteMatch()
  const data: any = [
    {
      name: 'dan su',
      code: 123123123123123123123,
      slug: 'awdawdawd',
      check: true
    },
    {
      name: 'dan su',
      code: 123123123123123123123,
      slug: 'awdawdawd',
      check: true
    },
    {
      name: 'dan su',
      code: 123123123123123123123,
      slug: 'awdawdawd',
      check: true
    },
    {
      name: 'dan su',
      code: 123123123123123123123,
      slug: 'awdawdawd',
      check: false
    },
    {
      name: 'dan su',
      code: 123123123123123123123,
      slug: 'awdawdawd',
      check: false
    }
  ]

  const check = (data: any) => {
    const number = data.filter((item: any) => item.check === true)
    return (number.length / data.length) * 100
  }

  const value = check(data)

  return (
    <>
      <div className='row row-toolbar'>
        <div className='col-lg-12 toolbar'>
          <Link to={`${match.path}/department`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Phòng Ban</p>
          </Link>
          <Link to={`${match.path}/staff`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Nhân Viên</p>
          </Link>
          <Link to={`${match.path}`} className='box-icon'>
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
      <div className='row row-document'>
        <div className='col-lg-12 document-received'>
          <h4 style={{ color: 'red' }}>Hồ sơ đến</h4>
          <div className='row title'>
            <ProfileReceived data={data} />
          </div>
        </div>
      </div>
      <div className='row row-message'>
        <div className='col-lg-12 message-received'>
          <h4 style={{ color: 'red' }}>Tin Nhắn Đến</h4>

          <div className='row title' style={{ display: 'flex' }}>
            <div className='col-lg-9'>
              <ProfileReceived data={data} />
            </div>
            <div className='col-lg-3'>
              <ProgressChart value={value} />
            </div>
          </div>
        </div>
      </div>
      <div className='row row-progress'>
        <div className='row title'>
          <h1 style={{ color: 'white' }}>Tin Nhắn Đến</h1>
        </div>
      </div>
    </>
  )
}
