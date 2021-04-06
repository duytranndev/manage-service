import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import FormAddStaff from '../../organisms/staff/add-staff'

export default function Staff() {
  const [visible, setVisible] = useState<boolean>(false)

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type='primary' onClick={handleShowDrawer}>
        <PlusOutlined /> Thêm nhân viên
      </Button>
      <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormAddStaff />
      </DrawerComponent>
    </>
  )
}
