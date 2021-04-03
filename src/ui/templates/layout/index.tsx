import React, { ReactNode } from 'react'
import { AppRouting } from '../../../share/routing'

type AppLayoutProps = {
  children?: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppRouting />
    </>
  )
}
