import { AppstoreOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Menu, Switch } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'

const { SubMenu } = Menu
export default function MenuAdmin() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState('light')

  const changeTheme = (value) => {
    setTheme((theme) => (value ? 'dark' : 'light'))
  }
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div style={{ width: 256 }}>
      <Button type='primary' onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Switch
        style={{ marginLeft: '10px' }}
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren='Dark'
        unCheckedChildren='Light'
      />
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme={theme}
        inlineCollapsed={collapsed}>
        <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub3' icon={<MailOutlined />} title='Navigation One'>
          <Menu.Item key='13'>Option 5</Menu.Item>
          <Menu.Item key='14'>Option 6</Menu.Item>
          <Menu.Item key='15'>Option 7</Menu.Item>
          <Menu.Item key='16'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<MailOutlined />} title='Navigation One'>
          <Menu.Item key='17'>Option 5</Menu.Item>
          <Menu.Item key='18'>Option 6</Menu.Item>
          <Menu.Item key='19'>Option 7</Menu.Item>
          <Menu.Item key='20'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}
