import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Button, Empty } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DepartmentInterface } from '../../../share/interface/department.interface'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddDepartment from '../../organisms/department/add-department'
import ManagementDepartment from '../../organisms/department/list-department'

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
  }
})

export default function Department() {
  const [visible, setVisible] = useState(false)
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const classes = useStyles()

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      {departments.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
          <div className='content'>
            <ManagementDepartment data={departments} />
          </div>
          <DrawerComponent title='Thêm phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
            <FormAddDepartment />
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
            description={<span>Danh sách phòng ban hiện đang trống</span>}>
            <Button type='primary' onClick={handleShowDrawer}>
              Thêm phòng ban
            </Button>
          </Empty>
          <DrawerComponent title='Thêm phòng ban' visible={visible} onClose={handleCloseDrawer} width={800}>
            <FormAddDepartment />
          </DrawerComponent>
        </>
      )}
    </>
  )
}
