import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!sessionStorage.getItem('user')) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } else {
          return <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />
        }

        // logged in so return component
        return <Component {...props} />
      }}
    />
  )
}

export { PrivateRoute }
