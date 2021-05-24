// import Loadable from 'react-loadable'
import 'antd/dist/antd.css'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminPage from '../../../pages/admin/AdminPage'
import MyAccount from '../../../pages/my-account'
import NotFoundPage from '../../../pages/not-found'
import AssignmentDetail from '../../../ui/organisms/assignment/detail-assignment'
import DepartmentDetail from '../../../ui/organisms/department/detail-department'
import FieldDetail from '../../../ui/organisms/field/detail-field'
import NewsDetail from '../../../ui/organisms/news/detail-news'
import ProfileDetail from '../../../ui/organisms/profile/detail-profile'
import ManagementRecordsBrowsed from '../../../ui/organisms/profile/records-browsed'
import ManagementRecordsReceived from '../../../ui/organisms/profile/records-received'
import ServiceDetail from '../../../ui/organisms/service/detail-service'
import StaffDetail from '../../../ui/organisms/staff/detail-staff'
import UnitDetail from '../../../ui/organisms/Unit(đơn vị)/detail-unit'
import Department from '../../../ui/templates/department'
import Field from '../../../ui/templates/field'
import Assignment from '../../../ui/templates/manage-profile/assignment'
import MyProfile from '../../../ui/templates/manage-profile/my-profile'
import Profile from '../../../ui/templates/manage-profile/profile'
import News from '../../../ui/templates/news'
import Service from '../../../ui/templates/service'
import Staff from '../../../ui/templates/staff'
import Statistical from '../../../ui/templates/statistical'
import Test from '../../../ui/templates/test'
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
  const routeList = [
    {
      component: <Route key='10' path={`/admin/profile/records_received`} component={ManagementRecordsReceived} exact />
    },
    {
      component: <Route key='7' path={`/admin/profile/records_browsed`} component={ManagementRecordsBrowsed} exact />
    },
    {
      component: <Route key='1' path={`/admin/department`} component={Department} exact />
    },
    {
      component: <Route key='12' path={`/admin/department/:slug`} component={DepartmentDetail} exact />
    },
    {
      component: <Route key='2' path={`/admin`} component={AdminPage} exact />
    },
    {
      component: <Route key='3' path={`/admin/staff`} component={Staff} exact />
    },
    {
      component: <Route key='13' path={`/admin/staff/:slug`} component={StaffDetail} exact />
    },
    {
      component: <Route key='4' path={`/admin/news`} component={News} exact />
    },
    {
      component: <Route key='19' path={`/admin/news/:slug`} component={NewsDetail} exact />
    },
    {
      component: <Route key='20' path={`/admin/my-profile`} component={MyProfile} exact />
    },
    {
      component: <Route key='21' path={`/admin/approved-profile`} component={ManagementRecordsBrowsed} exact />
    },
    {
      component: <Route key='22' path={`/admin/test`} component={Test} exact />
    },
    {
      component: <Route key='23' path={`/admin/statistical`} component={Statistical} exact />
    },
    {
      component: <Route key='22' path={`/admin/my-account`} component={MyAccount} exact />
    },
    {
      component: <Route key='5' path={`/admin/field`} component={Field} exact />
    },
    {
      component: <Route key='14' path={`/admin/field/:slug`} component={FieldDetail} exact />
    },
    {
      component: <Route key='6' path={`/admin/service`} component={Service} exact />
    },
    {
      component: <Route key='18' path={`/admin/assignment`} component={Assignment} exact />
    },
    {
      component: <Route key='19' path={`/admin/assignment/:slug`} component={AssignmentDetail} exact />
    },
    {
      component: <Route key='16' path={`/admin/service/:slug`} component={ServiceDetail} exact />
    },
    {
      component: <Route key='8' path={`/admin/profile`} component={Profile} exact />
    },
    {
      component: <Route key='17' path={`/admin/profile/:slug`} component={ProfileDetail} exact />
    },
    {
      component: <Route key='9' path={`/admin/unit`} component={Unit} exact />
    },
    {
      component: <Route key='15' path={`/admin/unit/:slug`} component={UnitDetail} exact />
    },

    {
      component: <Route key='11' path={`/`} component={AdminPage} exact />
    }
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
