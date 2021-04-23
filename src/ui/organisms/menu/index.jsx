import {
  ApartmentOutlined,
  CompassOutlined,
  GlobalOutlined,
  LineChartOutlined,
  ReadOutlined,
  TeamOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './index.scss'

const { SubMenu } = Menu
export default function MenuAdmin() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState('light')
  const match = useRouteMatch()

  const changeTheme = (value) => {
    setTheme((theme) => (value ? 'dark' : 'light'))
  }
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      {/* <Switch checked={theme === 'dark'} onChange={changeTheme} checkedChildren='Dark' unCheckedChildren='Light' /> */}

      <Menu theme={theme} mode='inline' defaultSelectedKeys={['sub1']}>
        <Menu.Item key='1' icon={<ApartmentOutlined />}>
          <NavLink to={`${match.path}/department`}>Phòng Ban</NavLink>
        </Menu.Item>
        <Menu.Item key='2' icon={<TeamOutlined />}>
          <NavLink to={`${match.path}/staff`}>Nhân Viên</NavLink>
        </Menu.Item>
        <Menu.Item key='3' icon={<GlobalOutlined />}>
          <NavLink to={`${match.path}/field`}>Lĩnh Vực</NavLink>
        </Menu.Item>
        <Menu.Item key='4' icon={<ReadOutlined />}>
          <NavLink to={`${match.path}/unit`}>Đơn Vị</NavLink>
        </Menu.Item>
        <Menu.Item key='5' icon={<ReadOutlined />}>
          <NavLink to={`${match.path}/service`}>Dịch Vụ</NavLink>
        </Menu.Item>

        <SubMenu
          key='sub1'
          icon={<ReadOutlined />}
          title={<NavLink to={`${match.path}/profile`}>Quản Lý Hồ Sơ</NavLink>}>
          <Menu.Item key='8'>Danh sách hồ sơ</Menu.Item>
          <Menu.Item key='9'>
            <NavLink to={`${match.path}/profile/records_received`}>Hồ sơ nhận</NavLink>
          </Menu.Item>
          <Menu.Item key='10'>Hồ sơ duyệt</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<ReadOutlined />} title={<NavLink to={`${match.path}/profile`}>Phân Công</NavLink>}>
          <Menu.Item key='11'>Tạo mới phân công</Menu.Item>
          <Menu.Item key='12'>Đã phân công</Menu.Item>
        </SubMenu>
        <Menu.Item key='6' icon={<CompassOutlined />}>
          <NavLink to={`${match.path}/news`}>Tin Tức</NavLink>
        </Menu.Item>
        <Menu.Item key='7' icon={<WhatsAppOutlined />}>
          <NavLink to={`${match.path}/sender`}>Người Gửi</NavLink>
        </Menu.Item>
        <SubMenu key='sub3' icon={<LineChartOutlined />} title={<NavLink to={`${match.path}`}>Thống Kê</NavLink>}>
          <Menu.Item key='13'>Option 5</Menu.Item>
          <Menu.Item key='14'>Option 6</Menu.Item>
          <Menu.Item key='15'>Option 7</Menu.Item>
          <Menu.Item key='16'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}
