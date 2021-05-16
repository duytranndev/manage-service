import React from 'react'
import './App.scss'
import AdminLayout from './ui/templates/admin-layout'

function App() {
  return (
    <div className='App'>
      <AdminLayout />
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
