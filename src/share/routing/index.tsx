import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { fetchDepartments } from '../../store/recuders/department.reducer'
import { fetchFields } from '../../store/recuders/field.reducer'
import AdminLayout from '../../ui/templates/admin-layout'
import FrontRouting from './front'

export const AppRouting = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    const loadDepartment = async () => {
      await dispatch(fetchDepartments())
    }
    loadDepartment()
  }, [])

  useEffect(() => {
    const loadField = async () => {
      await dispatch(fetchFields())
    }
    loadField()
  }, [])

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
