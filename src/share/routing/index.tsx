import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/home'
import ManagementDepartment from '../../ui/organisms/department/management'

export default function AppRouting() {
  const routeList = [
    {
      component: <Route path='/' component={HomePage} exact />
    },
    {
      component: <Route path='/department' component={ManagementDepartment} exact />
    }
  ]
  return (
    <Switch>
      {routeList.map((item) => item.component)}
      {/* <Route path='*' component={NotFound}/> */}
    </Switch>
  )
}
