import 'antd/dist/antd.css'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AdminPage from '../../../pages/admin/AdminPage'
import ManagementDepartment from '../../../ui/organisms/department/list-department'
import Filed from '../../../ui/templates/filed'
import ManageNews from '../../../ui/templates/manage-news'
import Profile from '../../../ui/templates/profile'
import RecordsReceived from '../../../ui/templates/profile/records-received(hồ sơ nhận)'
import Sender from '../../../ui/templates/sender(người gửi)'
import Service from '../../../ui/templates/service'
import Staff from '../../../ui/templates/staff'
import Unit from '../../../ui/templates/unit'
// import './index.scss'

export default function AdminRouting() {
  const match = useRouteMatch()

  const routeList = [
    {
      component: <Route key='1' path={`${match.path}/department`} component={ManagementDepartment} exact />
    },
    {
      component: <Route key='2' path={`/admin`} component={AdminPage} exact />
    },
    {
      component: <Route key='3' path={`${match.path}/staff`} component={Staff} exact />
    },
    {
      component: <Route key='4' path={`${match.path}/news`} component={ManageNews} exact />
    },
    {
      component: <Route key='5' path={`${match.path}/field`} component={Filed} exact />
    },
    {
      component: <Route key='6' path={`${match.path}/service`} component={Service} exact />
    },
    {
      component: <Route key='7' path={`${match.path}/sender`} component={Sender} exact />
    },
    {
      component: <Route key='8' path={`${match.path}/profile`} component={Profile} exact />
    },
    {
      component: <Route key='9' path={`${match.path}/unit`} component={Unit} exact />
    },
    {
      component: <Route key='10' path={`${match.path}/profile/records_received`} component={RecordsReceived} exact />
    },
    // trùng key
  ]

  return (
    <>
      <Switch>{routeList.map((item) => item.component)}</Switch>
    </>
  )
}
