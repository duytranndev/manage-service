import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import AdminPage from '../../../pages/admin'
import ManagementDepartment from '../../../ui/organisms/department/form-management'
import Header from '../../../ui/organisms/header'
import MenuAdmin from '../../../ui/organisms/menu'

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
      <Header />
      <div className='container-fluid main'>
        <div className='row'>
          <div className='col-lg-3 menu'>
            <MenuAdmin />
          </div>
          <div className='col-lg-9 content'>
            <Switch>{routeList.map((item, index) => item.component)}</Switch>
          </div>
        </div>
      </div>
    </>
  )
}
