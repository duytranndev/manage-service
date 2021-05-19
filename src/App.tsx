import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Router, Switch } from 'react-router'
import { history } from '../src/helpers/history'
import './App.scss'
import { PrivateRoute } from './components/PrivateRoute'
import LoginPage from './pages/login/LoginPage'
import AdminLayout from './ui/templates/admin-layout'

function App() {
  const disPatch = useDispatch()

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      console.log('object')
      // dispatch(alertActions.clear())
    })
  }, [])
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <PrivateRoute roles exact path='/' component={AdminLayout} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/admin' component={AdminLayout} />
        </Switch>
      </Router>
      {/* <AdminLayout /> */}
      {/* <Route path='/' exact>
            <LoginPage />
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route> */}
    </div>
  )
}

export default App
