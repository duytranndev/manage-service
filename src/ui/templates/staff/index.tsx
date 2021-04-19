import { PlusOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core'
import { Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StaffInterface } from '../../../share/interface/staff.interface'
import { fetchStaffs } from '../../../store/recuders/staff.reducer'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import SearchComponent from '../../organisms/search'
import FormAddStaff from '../../organisms/staff/add-staff'
import ManagementStaff from '../../organisms/staff/list-staff'

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rbga(0, 0, 0, 0.05)',
    borderRadius: '4px'
  }
})

export default function Staff() {
  const classes = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadStaff = async () => {
      await dispatch(fetchStaffs())
    }
    loadStaff()
  }, [])

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
      <div>
        {staffs.length > 0 ? (
          <ManagementStaff data={staffs} />
        ) : (
          <div className={classes.root}>
            <Spin size='large' />
          </div>
        )}
      </div>
      {/* <ManagementStaff data={staffs} /> */}
      <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={800}>
        <FormAddStaff />
      </DrawerComponent>
    </>
  )
}
