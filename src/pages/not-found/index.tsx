import { Button, Result } from 'antd'
import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'

export default function NotFoundPage() {
  const history = useHistory()
  const match = useRouteMatch()
  let path: string
  if (match.url.includes('admin')) {
    path = '/admin'
  } else {
    path = '/home'
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist...'
      extra={
        <Button type='primary' onClick={() => history.push(path)}>
          Back to home page
        </Button>
      }
    />
  )
}
