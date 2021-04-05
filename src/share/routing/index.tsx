import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AdminLayout from '../../ui/templates/admin-layout'
import FrontRouting from './front'

export const AppRouting = (): JSX.Element => {
  const routeList = [
    {
      component: <Route key='1' path='/' component={FrontRouting} exact />
    },
    {
      component: <Route key='2' path='/admin' component={AdminLayout} />
    }
  ]
  return (
    <>
      <Switch>
        <Redirect path='/home' to='/' exact />
        {routeList.map((item) => item.component)}
      </Switch>
    </>
  )
}
