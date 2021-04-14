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
import { Link, useRouteMatch } from 'react-router-dom'
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
          <Link to={`${match.path}/department`}>Phòng Ban</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<TeamOutlined />}>
          <Link to={`${match.path}/staff`}>Nhân Viên</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<GlobalOutlined />}>
          <Link to={`${match.path}/field`}>Lĩnh Vực</Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<ReadOutlined />}>
          <Link to={`${match.path}/unit`}>Đơn Vị</Link>
        </Menu.Item>
        <Menu.Item key='5' icon={<ReadOutlined />}>
          <Link to={`${match.path}/service`}>Dịch Vụ</Link>
        </Menu.Item>

        <SubMenu key='sub1' icon={<ReadOutlined />} title={<Link to={`${match.path}/profile`}>Quản Lý Hồ Sơ</Link>}>
          <Menu.Item key='8'>Danh sách hồ sơ</Menu.Item>
          <Menu.Item key='9'><Link to={`${match.path}/profile/records_received`}>Hồ sơ nhận</Link></Menu.Item>
          <Menu.Item key='10'>Hồ sơ duyệt</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<ReadOutlined />} title={<Link to={`${match.path}/profile`}>Phân Công</Link>}>
          <Menu.Item key='11'>Tạo mới phân công</Menu.Item>
          <Menu.Item key='12'>Đã phân công</Menu.Item>
        </SubMenu>
        <Menu.Item key='6' icon={<CompassOutlined />}>
          <Link to={`${match.path}/news`}>Tin Tức</Link>
        </Menu.Item>
        <Menu.Item key='7' icon={<WhatsAppOutlined />}>
          <Link to={`${match.path}/sender`}>Người Gửi</Link>
        </Menu.Item>
        <SubMenu key='sub3' icon={<LineChartOutlined />} title={<Link to={`${match.path}`}>Thống Kê</Link>}>
          <Menu.Item key='13'>Option 5</Menu.Item>
          <Menu.Item key='14'>Option 6</Menu.Item>
          <Menu.Item key='15'>Option 7</Menu.Item>
          <Menu.Item key='16'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}
