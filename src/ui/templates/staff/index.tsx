import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import { Button, Empty } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DepartmentInterface } from '../../../share/interface/department.interface'
import { StaffInterface } from '../../../share/interface/staff.interface'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
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
  },
  btn_add_action: {
    position: 'fixed',
    bottom: '9%',
    right: '3%',
    zIndex: 1
  },
  btn_update_action: {
    position: 'fixed',
    bottom: '20%',
    right: '3%',
    zIndex: 1
  }
})

export default function Staff() {
  const classes = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  staffs.map((staff) => {
    const department = departments.find((item) => item._id === staff.departmentId)
    return (staff['department'] = department?.name)
  })

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      {staffs.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
          <Fab color='primary' aria-label='edit' className={classes.btn_update_action}>
            <EditIcon />
          </Fab>
          <div className='content'>
            <ManagementStaff data={staffs} />
          </div>
          <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={680}>
            <FormAddStaff />
          </DrawerComponent>
        </>
      ) : (
        <>
          <Empty
            image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
            imageStyle={{
              height: 100
            }}
            className={classes.root}
            description={<span>Danh sách nhân viên hiện đang trống</span>}>
            <Button type='primary' onClick={handleShowDrawer}>
              Thêm nhân viên
            </Button>
          </Empty>
          <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={800}>
            <FormAddStaff />
          </DrawerComponent>
        </>
      )}

      {/* <ManagementStaff data={staffs} /> */}
    </>
  )
}
