import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import ManagementDepartment from '../../organisms/department/list-department'
import SearchComponent from '../../organisms/search'
import FormAddStaff from '../../organisms/staff/add-staff'
import ManagementStaff from '../../organisms/staff/list-staff'

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
      <SearchComponent />
      <Button type='primary' onClick={handleShowDrawer}>
        <PlusOutlined /> Thêm nhân viên
      </Button>
      <ManagementStaff/>
      <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={800}>
        <FormAddStaff />
      </DrawerComponent>
    </>
  )
}
