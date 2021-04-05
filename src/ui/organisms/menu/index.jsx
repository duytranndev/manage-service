import {
  ApartmentOutlined,
  CompassOutlined,
  FolderOutlined,
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
        <SubMenu key='sub1' icon={<ApartmentOutlined />} title={<Link to={`${match.path}/department`}>Phòng Ban</Link>}>
          <Menu.Item key='5'>
            <Link to={`${match.path}/department`}>Option 5</Link>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link to={`${match.path}`}>Option 6</Link>
          </Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<TeamOutlined />} title={<Link to={`${match.path}/staff`}>Nhân viên</Link>}>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub3' icon={<GlobalOutlined />} title={<Link to={`${match.path}`}>Lĩnh Vực</Link>}>
          <Menu.Item key='13'>Option 5</Menu.Item>
          <Menu.Item key='14'>Option 6</Menu.Item>
          <Menu.Item key='15'>Option 7</Menu.Item>
          <Menu.Item key='16'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<ReadOutlined />} title={<Link to={`${match.path}`}>Dịch Vụ Dân Sự</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub5' icon={<FolderOutlined />} title={<Link to={`${match.path}`}>Hồ Sơ Dân Sự</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub6' icon={<FolderOutlined />} title={<Link to={`${match.path}`}>Hồ Sơ Tiếp Nhận</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub7' icon={<FolderOutlined />} title={<Link to={`${match.path}`}>Hồ Sơ Duyệt</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub8' icon={<CompassOutlined />} title={<Link to={`${match.path}/news`}>Tin Tức</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub9' icon={<WhatsAppOutlined />} title={<Link to={`${match.path}/sender`}>Người Gửi</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub10' icon={<LineChartOutlined />} title={<Link to={`${match.path}`}>Thống Kê</Link>}>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}
