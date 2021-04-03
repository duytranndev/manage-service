import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../../pages/home'

export default function FrontRouting() {
  const routeList = [
    {
      component: <Route key='1' path='' component={HomePage} />
    },
    {
      component: <Route key='2' path='/contact' component={HomePage} exact />
    },
    {
      component: <Route key='3' path='/about' component={HomePage} exact />
    }
  ]
  return (
    <>
      <Switch>{routeList.map((item) => item.component)}</Switch>
    </>
  )
}
