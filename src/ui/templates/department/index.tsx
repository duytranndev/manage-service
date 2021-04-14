import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import DrawerComponent from '../../molecules/drawer'
import FormAddDepartment from '../../organisms/department/add-department'
import ManagementDepartment from '../../organisms/department/list-department'

export default function Department() {
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
                <PlusOutlined /> Thêm Phòng Ban
      </Button>
            <ManagementDepartment />
            <DrawerComponent title='Thêm phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddDepartment />
            </DrawerComponent></>
    )
}
