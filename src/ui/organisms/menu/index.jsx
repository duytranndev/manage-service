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
    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
      <SubMenu key='sub1' icon={<ApartmentOutlined />} title='Phòng Ban'>
        <Menu.Item key='5'>
          <Link to={`${match.path}/department`}>Option 5</Link>
        </Menu.Item>
        <Menu.Item key='6'>
          <Link to={`${match.path}`}>Option 6</Link>
        </Menu.Item>
        <Menu.Item key='7'>Option 7</Menu.Item>
        <Menu.Item key='8'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub2' icon={<TeamOutlined />} title='Nhân viên'>
        <Menu.Item key='9'>Option 9</Menu.Item>
        <Menu.Item key='10'>Option 10</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key='sub3' icon={<GlobalOutlined />} title='Lĩnh Vực'>
        <Menu.Item key='13'>Option 5</Menu.Item>
        <Menu.Item key='14'>Option 6</Menu.Item>
        <Menu.Item key='15'>Option 7</Menu.Item>
        <Menu.Item key='16'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub4' icon={<ReadOutlined />} title='Dịch Vụ Dân Sự'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub5' icon={<FolderOutlined />} title='Hồ Sơ Dân Sự'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub6' icon={<FolderOutlined />} title='Hồ Sơ Tiếp Nhận'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub7' icon={<FolderOutlined />} title='Hồ Sơ Duyệt'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub8' icon={<CompassOutlined />} title='Tin Tức'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub9' icon={<WhatsAppOutlined />} title='Người Gửi'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub10' icon={<LineChartOutlined />} title='Thống Kê'>
        <Menu.Item key='17'>Option 5</Menu.Item>
        <Menu.Item key='18'>Option 6</Menu.Item>
        <Menu.Item key='19'>Option 7</Menu.Item>
        <Menu.Item key='20'>Option 8</Menu.Item>
      </SubMenu>
    </Menu>
  )
}
