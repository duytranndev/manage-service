import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import { Button, Empty } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FieldInterface } from '../../../share/interface/field.interface'
import { UnitInterface } from '../../../share/interface/unit.interface'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddUnit from '../../organisms/Unit(đơn vị)/add-Unit'
import ManagementUnit from '../../organisms/Unit(đơn vị)/list-Unit'

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

export default function Unit() {
  const classes = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  units.map((unit) => {
    const field = fields.find((item) => item._id === unit.fieldId)
    return (unit['fieldName'] = field?.name)
  })
  const dispatch = useDispatch()

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      {units.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
          <Fab color='primary' aria-label='edit' className={classes.btn_update_action}>
            <EditIcon />
          </Fab>
          <div className='content'>
            <ManagementUnit data={units} />
          </div>
          <DrawerComponent title='Thêm đơn vị' visible={visible} onClose={handleCloseDrawer} width={680}>
            <FormAddUnit />
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
            description={<span>Danh sách đơn vị hiện đang trống</span>}>
            <Button type='primary' onClick={handleShowDrawer}>
              Thêm đơn vị
            </Button>
          </Empty>
          <DrawerComponent title='Thêm đơn vị' visible={visible} onClose={handleCloseDrawer} width={800}>
            <FormAddUnit />
          </DrawerComponent>
        </>
      )}
    </>
  )
}
