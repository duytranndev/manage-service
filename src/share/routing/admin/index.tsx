import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AdminPage from '../../../pages/admin'
import ManagementDepartment from '../../../ui/organisms/department/form-management'
import HeaderAdmin from '../../../ui/organisms/header/index'
import MenuAdmin from '../../../ui/organisms/menu'
import './admin.scss'

const { Header, Sider, Content } = Layout

export default function AdminRouting() {
  const match = useRouteMatch()
  console.log('math` :>> ', match)

  const routeList = [
    {
      component: <Route key='1' path={`/admin/department`} component={ManagementDepartment} />
    },
    {
      component: <Route key='2' path={`/admin`} component={AdminPage} exact />
    }
  ]

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible>
          <div className='logo' />
          <MenuAdmin />
        </Sider>
        <Layout className='site-layout'>
          <HeaderAdmin />
          {/* <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle
            })}
          </Header> */}
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              backgroundColor: '#dfe6e9'
            }}>
            <Switch>{routeList.map((item) => item.component)}</Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
