import { Button, Drawer } from 'antd'
import React, { ReactNode } from 'react'

type DrawerProps = {
  visible: boolean
  onClose: () => void
  children?: ReactNode
  title?: string
  width?: number
}

export default function DrawerComponent({ width, title, visible, onClose, children }: DrawerProps) {
  return (
    <Drawer
      title={title}
      width={width}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right'
          }}>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
        </div>
      }>
      {children}
    </Drawer>
  )
}
