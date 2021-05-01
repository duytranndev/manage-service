import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import { Button, Empty } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DrawerComponent from '../../molecules/drawer'
import FormAddService from '../../organisms/service/add-service'
import ManagementService from '../../organisms/service/list-service'

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

export default function Service() {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)

  const services = useSelector((state) => state.service.data)

  const units = useSelector((state) => state.unit.data)
  // const fields = useSelector((state) => state.field.data)

  services.map(async (service) => {
    const unit = await units.find((item) => item._id === service.unitId)
    return await (service['unitName'] = unit?.name)
  })

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }

  return (
    <>
      {services.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
          <Fab color='primary' aria-label='edit' className={classes.btn_update_action}>
            <EditIcon />
          </Fab>
          <div className='content'>
            <ManagementService data={services} />
          </div>
          <DrawerComponent title='Thêm dịch vụ' visible={visible} onClose={handleCloseDrawer} width={680}>
            <FormAddService />
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
            description={<span>Danh sách dịch vụ hiện đang trống</span>}>
            <Button type='primary' onClick={handleShowDrawer}>
              Thêm dịch vụ
            </Button>
          </Empty>
          <DrawerComponent title='Thêm dịch vụ' visible={visible} onClose={handleCloseDrawer} width={800}>
            <FormAddService />
          </DrawerComponent>
        </>
      )}
    </>
  )
}
