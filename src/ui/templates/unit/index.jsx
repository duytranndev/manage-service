import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import SearchComponent from '../../organisms/search'
import FormAddUnit from '../../organisms/Unit(đơn vị)/add-Unit'
import ManagementUnit from '../../organisms/Unit(đơn vị)/list-Unit'

export default function Unit() {
  const [visible, setVisible] = useState(false)

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
        <PlusOutlined /> Thêm đơn vị
      </Button>
      <ManagementUnit/>
      <DrawerComponent title='Thêm đơn vị' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormAddUnit/>
      </DrawerComponent>
    </>
  )
}
