import { PlusOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import React, { useState } from 'react'
import FormAddStaff from '../../organisms/staff/add-staff'

export default function Staff() {
  const [visible, setVisible] = useState<boolean>(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type='primary' onClick={showDrawer}>
        <PlusOutlined /> Thêm nhân viên
      </Button>
      <Drawer
        title='Thêm nhân viên'
        width={680}
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
        <FormAddStaff />
      </Drawer>
    </>
  )
}
