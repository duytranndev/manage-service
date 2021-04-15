import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import AdminRouting from '../../../share/routing/admin'
import { fetchDepartments } from '../../../store/recuders/department.reducer'
import HeaderAdmin from '../../../ui/organisms/header'
import MenuAdmin from '../../../ui/organisms/menu'
// import './index.scss'

const { Sider, Content } = Layout

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const loadDepartment = async () => {
      await dispatch(fetchDepartments())
    }
    loadDepartment()
  }, [])
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      <Layout>
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
          <Link to='/admin'>
            <div className='logo'>This is Logo</div>
          </Link>

          <MenuAdmin />
        </Sider>

        <Layout className='site-layout'>
          <HeaderAdmin />
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle
            })}
          </Header>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}>
            <AdminRouting />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
