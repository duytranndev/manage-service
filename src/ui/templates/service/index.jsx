import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import SearchComponent from '../../organisms/search'
import FormAddService from '../../organisms/service/add-service'

export default function Service() {
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
        <PlusOutlined /> Thêm dịch vụ
      </Button>
      <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormAddService />
      </DrawerComponent>
    </>
  )
}
