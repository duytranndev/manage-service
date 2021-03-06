import {
  ApartmentOutlined,
  CompassOutlined,
  GlobalOutlined,
  LineChartOutlined,
  ReadOutlined,
  TeamOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const { SubMenu } = Menu

let user = JSON.parse(sessionStorage.getItem('user'))

export default function MenuAdmin() {
  const [index, setIndex] = useState('1')

  return (
    <>
      {/* <Switch checked={theme === 'dark'} onChange={changeTheme} checkedChildren='Dark' unCheckedChildren='Light' /> */}

      <Menu theme={'dark'} mode='inline' theme='dark' defaultOpenKeys={['sub1']}>
        <Menu.Item key='1' icon={<ApartmentOutlined />}>
          <NavLink to={`/admin/department`}>Phòng Ban</NavLink>
        </Menu.Item>
        <Menu.Item key='2' icon={<TeamOutlined />}>
          <NavLink to={`/admin/staff`}>Nhân Viên</NavLink>
        </Menu.Item>
        <Menu.Item key='3' icon={<GlobalOutlined />}>
          <NavLink to={`/admin/field`}>Lĩnh Vực</NavLink>
        </Menu.Item>
        <Menu.Item key='4' icon={<ReadOutlined />}>
          <NavLink to={`/admin/unit`}>Đơn Vị</NavLink>
        </Menu.Item>
        <Menu.Item key='5' icon={<ReadOutlined />}>
          <NavLink to={`/admin/service`}>Dịch Vụ</NavLink>
        </Menu.Item>

        {user?.role === 'ADMIN' && (
          <SubMenu key='sub1' icon={<ReadOutlined />} title='Quản Lý Hồ Sơ'>
            <Menu.Item key='7' icon={<ReadOutlined />}>
              <NavLink to={`/admin/profile`}>Hồ sơ đã nhận</NavLink>
            </Menu.Item>
            <Menu.Item key='8' icon={<ReadOutlined />}>
              <NavLink to={`/admin/approved-profile`}>Hồ sơ đã duyệt</NavLink>
            </Menu.Item>
            <Menu.Item key='9' icon={<ReadOutlined />}>
              <NavLink to={`/admin/assignment`}>Đã phân công</NavLink>
            </Menu.Item>
          </SubMenu>
        )}
        {user?.role === 'MEMBER' && (
          <SubMenu key='sub1' icon={<ReadOutlined />} title='Hồ sơ của tôi'>
            <Menu.Item key='10' icon={<ReadOutlined />}>
              <NavLink to={`/admin/my-profile`}>Phân công của tôi</NavLink>
            </Menu.Item>
            <Menu.Item key='11' icon={<ReadOutlined />}>
              <NavLink to={`/admin/approved-profile`}>Hồ sơ đã duyệt</NavLink>
            </Menu.Item>
          </SubMenu>
        )}
        <Menu.Item key='6' icon={<CompassOutlined />}>
          <NavLink to={`/admin/news`}>Tin Tức</NavLink>
        </Menu.Item>
        <Menu.Item key='12' icon={<LineChartOutlined />}>
          <NavLink to={`/admin/statistical`}>Thống Kê</NavLink>
        </Menu.Item>
      </Menu>
    </>
  )
}
