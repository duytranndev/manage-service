import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import SearchComponent from '../../organisms/search'
import ManagementSender from '../../organisms/sender(người gửi)/list-sender/index'

export default function Sender() {
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
      <ManagementSender/>
    </>
  )
}
