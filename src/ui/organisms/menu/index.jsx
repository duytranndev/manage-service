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
import { Link, NavLink, useRouteMatch } from 'react-router-dom'
import './index.scss'
const { SubMenu } = Menu

let user = JSON.parse(sessionStorage.getItem('user'))

export default function MenuAdmin() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState('light')
  const match = useRouteMatch()

  const changeTheme = (value) => {
    setTheme((theme) => (value ? '' : 'light'))
  }
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      {/* <Switch checked={theme === 'dark'} onChange={changeTheme} checkedChildren='Dark' unCheckedChildren='Light' /> */}

      <Menu
        style={{ width: 217, position: 'fixed', overflowY: 'scroll', height: '100%' }}
        theme={'dark'}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'>
        <Menu.Item>
          <Link to='/admin'>
            <img
              src='https://dichvucong.gov.vn/p/home/theme/img/header/logo.png'
              style={{ width: '100%', zIndex: 1, height: '100%' }}
              alt=''
            />
          </Link>
        </Menu.Item>

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
          <SubMenu key='10' icon={<ReadOutlined />} title='Quản Lý Hồ Sơ'>
            <Menu.Item key='9' icon={<ReadOutlined />}>
              <NavLink to={`/admin/profile`}>Hồ sơ đã nhận</NavLink>
            </Menu.Item>
            <Menu.Item key='10' icon={<ReadOutlined />}>
              <NavLink to={`/admin/approved-profile`}>Hồ sơ đã duyệt</NavLink>
            </Menu.Item>
            <Menu.Item key='11' icon={<ReadOutlined />}>
              <NavLink to={`/admin/assignment`}>Đã phân công</NavLink>
            </Menu.Item>
          </SubMenu>
        )}
        <Menu.Item key='6' icon={<CompassOutlined />}>
          <NavLink to={`/admin/news`}>Tin Tức</NavLink>
        </Menu.Item>
        <SubMenu key='sub3' icon={<LineChartOutlined />} title={<NavLink to={`/admin`}>Thống Kê</NavLink>}>
          <Menu.Item key='13'>Option 5</Menu.Item>
          <Menu.Item key='14'>Option 6</Menu.Item>
          <Menu.Item key='15'>Option 7</Menu.Item>
          <Menu.Item key='16'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}
