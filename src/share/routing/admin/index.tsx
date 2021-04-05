import 'antd/dist/antd.css'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AdminPage from '../../../pages/admin/AdminPage'
import ManagementDepartment from '../../../ui/organisms/department/list-department'
// import './index.scss'

export default function AdminRouting() {
  const match = useRouteMatch()

  const routeList = [
    {
      component: <Route key='1' path={`${match.path}/department`} component={ManagementDepartment} exact />
    },
    {
      component: <Route key='2' path={`/admin`} component={AdminPage} exact />
    }
  ]

  return <Switch>{routeList.map((item) => item.component)}</Switch>
}
