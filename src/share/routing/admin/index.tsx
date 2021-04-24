// import Loadable from 'react-loadable'
import 'antd/dist/antd.css'
import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AdminPage from '../../../pages/admin/AdminPage'
import NotFoundPage from '../../../pages/not-found'
import Department from '../../../ui/templates/department'
import Field from '../../../ui/templates/field'
import News from '../../../ui/templates/news'
import Profile from '../../../ui/templates/profile'
import RecordsReceived from '../../../ui/templates/profile/records-received(hồ sơ nhận)'
import Sender from '../../../ui/templates/sender'
import Service from '../../../ui/templates/service'
import Staff from '../../../ui/templates/staff'
import Unit from '../../../ui/templates/unit'

// const Department = lazy(() => import('../../../ui/templates/department'))
// const News = lazy(() => import('../../../ui/templates/news'))
// const AdminPage = lazy(() => import('../../../pages/admin/AdminPage'))
// const Staff = lazy(() => import('../../../ui/templates/staff'))
// const Service = lazy(() => import('../../../ui/templates/service'))
// const Sender = lazy(() => import('../../../ui/templates/sender'))
// const Unit = lazy(() => import('../../../ui/templates/unit/index'))
// const Profile = lazy(() => import('../../../ui/templates/profile'))
// const Field = lazy(() => import('../../../ui/templates/field'))

export default function AdminRouting() {
  const match = useRouteMatch()
  console.log('match :>> ', match)

  const routeList = [
    {
      component: <Route key='1' path={`/admin/department`} component={Department} exact />
    },
    {
      component: <Route key='2' path={`/admin`} component={AdminPage} exact />
    },
    {
      component: <Route key='3' path={`/admin/staff`} component={Staff} exact />
    },
    {
      component: <Route key='4' path={`/admin/news`} component={News} exact />
    },
    {
      component: <Route key='5' path={`/admin/field`} component={Field} exact />
    },
    {
      component: <Route key='6' path={`/admin/service`} component={Service} exact />
    },
    {
      component: <Route key='7' path={`/admin/sender`} component={Sender} exact />
    },
    {
      component: <Route key='8' path={`/admin/profile`} component={Profile} exact />
    },
    {
      component: <Route key='9' path={`/admin/unit`} component={Unit} exact />
    },
    {
      component: <Route key='10' path={`/admin/profile/records_received`} component={RecordsReceived} exact />
    }

    // trùng key
  ]

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routeList.map((item) => item.component)}
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  )
}
