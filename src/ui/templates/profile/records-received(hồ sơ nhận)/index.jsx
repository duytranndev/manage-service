import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../../molecules/drawer'
import ManagementRecordsReceived from '../../../organisms/records-received(hồ sơ nhận)/list-records-received'
import SearchComponent from '../../../organisms/search'


export default function RecordsReceived() {
  const [visible, setVisible] = useState(false)

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <h1>tét</h1>
      <SearchComponent />
      {/* <Button type='primary' onClick={handleShowDrawer}>
        <PlusOutlined /> Người gửi
      </Button> */}
      <ManagementRecordsReceived />
      {/* <DrawerComponent title='Hồ sơ nhận' visible={visible} onClose={handleCloseDrawer} width={680}>
      </DrawerComponent> */}
    </>
  )
}
