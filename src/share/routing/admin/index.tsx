// import Loadable from 'react-loadable'
import 'antd/dist/antd.css'
import React, { lazy, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import RecordsReceived from '../../../ui/templates/profile/records-received(hồ sơ nhận)'

export const lazyOptions = {
  fallback: (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100vh',
        width: '100%',
        fontSize: '200px'
      }}>
      <div>xin cho mot ti...</div>
    </div>
  )
}
const Department = lazy(() => import('../../../ui/templates/department'))
const News = lazy(() => import('../../../ui/templates/news'))
const AdminPage = lazy(() => import('../../../pages/admin/AdminPage'))
const Staff = lazy(() => import('../../../ui/templates/staff'))
const Service = lazy(() => import('../../../ui/templates/service'))
const Sender = lazy(() => import('../../../ui/templates/sender'))
const Unit = lazy(() => import('../../../ui/templates/unit'))
const Profile = lazy(() => import('../../../ui/templates/profile'))
const Filed = lazy(() => import('../../../ui/templates/filed'))

export default function AdminRouting() {
  const match = useRouteMatch()

  const routeList = [
    {
      component: <Route key='1' path={`${match.path}/department`} component={Department} exact />
    },
    {
      component: <Route key='2' path={`/admin`} component={AdminPage} exact />
    },
    {
      component: <Route key='3' path={`${match.path}/staff`} component={Staff} exact />
    },
    {
      component: <Route key='4' path={`${match.path}/news`} component={News} exact />
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
    }

    // trùng key
  ]

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>{routeList.map((item) => item.component)}</Switch>
      </Suspense>
    </>
  )
}
