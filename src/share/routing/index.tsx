import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/home'

export default function AppRouting() {
  const routeList = [
    {
      component: <Route path='/' component={HomePage} exact />
    }
  ]
  return (
    <Switch>
      {routeList.map((item) => item.component)}
      {/* <Route path='*' component={NotFound}/> */}
    </Switch>
  )
}
