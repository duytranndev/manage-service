import { Fab, makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ServiceInterface } from '../../../../share/interface/service.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { UnitInterface } from '../../../../share/interface/unit.interface'
import { fetchServices } from '../../../../store/recuders/service.reducer'
import { fetchUnits } from '../../../../store/recuders/unit.reducer'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import FormUpdateService from '../update-service'

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rbga(0, 0, 0, 0.05)',
    borderRadius: '4px'
  },
  btn_edit_action: {
    position: 'fixed',
    bottom: '9%',
    right: '3%',
    zIndex: 1
  }
})

const ServiceDetail = (): JSX.Element => {
  const [visible, setVisible] = useState(false)
  const services = useSelector<AppState, ServiceInterface[]>((state) => state.service.data)
  const [service, setService] = useState<ServiceInterface>()
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const dispatch = useDispatch()

  const { slug } = useParams<any>()
  const classes = useStyles()

  useEffect(() => {
    setService(services.find((item) => item.slug === slug))
  }, [slug, services])

  useEffect(() => {
    if (units.length === 0) {
      dispatch(fetchUnits())
    }
  }, [])

  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchServices())
    }
  }, [])

  const handleShowDrawer = () => {
    if (user?.role !== 'ADMIN') {
      toast.error('Không đủ phân quyền!')
      // alert('chu tuoi gi')
      return null
    }
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }

  return (
    <>
      <Descriptions labelStyle={{ fontSize: '110%' }} layout='vertical' bordered title='Chi tiết dịch vụ' size='small'>
        <Descriptions.Item label='Tên dịch vụ'>{service?.name}</Descriptions.Item>
        <Descriptions.Item label='Mã dịch vụ'>{service?.serviceCode}</Descriptions.Item>
        <Descriptions.Item label='Tên đơn vị'>
          {/* {unit?.name} */}
          {units?.find((item) => item._id === service?.unitId)?.name}
        </Descriptions.Item>
        <Descriptions.Item label='Ngày tạo'>{service?.insertTime}</Descriptions.Item>

        <Descriptions.Item label='Mô tả'>{service?.description}</Descriptions.Item>
      </Descriptions>
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      <DrawerComponent title='Sửa thông tin đơn vị' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormUpdateService data={service} />
      </DrawerComponent>
    </>
  )
}
export default ServiceDetail
