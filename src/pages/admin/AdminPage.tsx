import { StarTwoTone } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { DEPARTMENT_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { Department } from '../../share/interface/department.interface'
import TransferPaper from '../../ui/organisms/household/transfer-paper'
import ProfileReceived from '../../ui/organisms/profile/list-profile'
import ProgressChart from '../../ui/organisms/progress'
import './admin.scss'
export default function AdminPage() {
  const match = useRouteMatch()
  const [department, setDepartment] = useState<Department[]>([])

  useEffect(() => {
    // const params = {
    //   departmentCode: 'TC'
    // }
    moduleApi
      .get(DEPARTMENT_URL)
      .then((res) => setDepartment(res.data.data))
      .catch((error) => console.log('error :>> ', error))
  }, [])

  console.log('department :>> ', department)

  const data: any = [
    {
      name: 'dan su 1',
      code: 12131123,
      slug: 'awdawdaawd',
      check: true
    },
    {
      name: 'dan su 2',
      code: 1223123,
      slug: 'awdawdsawd',
      check: true
    },
    {
      name: 'dan su 3',
      code: 1231323,
      slug: 'awdadwdawd',
      check: true
    },
    {
      name: 'dan su 4',
      code: 1231232,
      slug: 'awdawdgawd',
      check: false
    },
    {
      name: 'dan su 5',
      code: 1231231,
      slug: 'awdawdddawd',
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
      <div className='row row-document'>
        <div className='col-lg-12 document-received'>
          <h4 style={{ color: 'red' }}>Hồ sơ đến</h4>
          <div className='row title' style={{ display: 'flex' }}>
            <div className='col-lg-9'>
              <ProfileReceived data={data} />
            </div>
            <div className='col-lg-3' style={{ textAlign: 'center' }}>
              <div className='sum' style={{ textAlign: 'center' }}>
                <h6>Tổng hồ sơ đã duyệt</h6>
              </div>
              <ProgressChart value={value} />
            </div>
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
              <div className='sum'>
                <h1>Tin nhắn đã xem</h1>
              </div>
              <ProgressChart value={value} />
            </div>
          </div>
        </div>
      </div>
      <TransferPaper />
    </>
  )
}
