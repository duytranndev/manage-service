import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import FormAddField from '../../organisms/field/add-field/index'
import ManagementField from '../../organisms/field/list-field'

export default function Filed() {
  const [visible, setVisible] = useState(false)

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type='primary' onClick={handleShowDrawer}>
        <PlusOutlined /> Thêm lĩnh vực
      </Button>
      <ManagementField/>
      <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormAddField />
      </DrawerComponent>
    </>
  )
}
