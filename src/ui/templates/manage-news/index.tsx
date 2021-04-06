import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import FormAddNews from '../../organisms/news/add-news/index'
export default function ManageNews() {
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
        <PlusOutlined /> Thêm bài viết
      </Button>
      <DrawerComponent title='Thêm bài viết' visible={visible} onClose={handleCloseDrawer} width={720}>
        <FormAddNews />
      </DrawerComponent>
    </>
  )
}
