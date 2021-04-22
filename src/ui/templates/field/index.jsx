import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import { Button, Empty } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DrawerComponent from '../../molecules/drawer'
import FormAddField from '../../organisms/field/add-field/index'
import ManagementField from '../../organisms/field/list-field'

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

export default function Field() {
  const [visible, setVisible] = useState(false)
  const classes = useStyles()

  const fields = useSelector((state) => state.field.data)

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      {fields.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
          <Fab color='primary' aria-label='edit' className={classes.btn_update_action}>
            <EditIcon />
          </Fab>
          <div className='content'>
            <ManagementField data={fields} />
          </div>
          <DrawerComponent title='Thêm lĩnh vực' visible={visible} onClose={handleCloseDrawer} width={680}>
            <FormAddField />
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
            description={<span>Danh sách lĩnh vực hiện đang trống</span>}>
            <Button type='primary' onClick={handleShowDrawer}>
              Thêm lĩnh vực
            </Button>
          </Empty>
          <DrawerComponent title='Thêm lĩnh vực' visible={visible} onClose={handleCloseDrawer} width={800}>
            <FormAddField />
          </DrawerComponent>
        </>
      )}

      {/* <ManagementStaff data={staffs} /> */}
    </>
  )
}
