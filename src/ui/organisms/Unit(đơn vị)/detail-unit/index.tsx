import { Fab, makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { UnitInterface } from '../../../../share/interface/unit.interface'
import { fetchNewss } from '../../../../store/recuders/news.reducer'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import FormUpdateUnit from '../update-Unit/index'

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
    bottom: '15%',
    right: '3%',
    zIndex: 1
  }
})

const UnitDetail = (): JSX.Element => {
  const [visible, setVisible] = useState(false)
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)
  const [unit, setUnit] = useState<UnitInterface>()
  const { slug } = useParams<any>()
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (units.length === 0) {
      dispatch(fetchNewss())
    }
  }, [])

  useEffect(() => {
    setUnit(units.find((item) => item.slug === slug))
  }, [slug, units])

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
      <Descriptions labelStyle={{ fontSize: '110%' }} layout='vertical' bordered title='Chi tiết đơn vị' size='small'>
        <Descriptions.Item label='Tên đơn vị'>{unit?.name}</Descriptions.Item>
        <Descriptions.Item label='Mã đơn vị'>{unit?.unitCode}</Descriptions.Item>
        <Descriptions.Item label='Tên lĩnh vực'>{unit?.fieldName}</Descriptions.Item>
        <Descriptions.Item label='Ngày tạo'>{unit?.insertTime}</Descriptions.Item>
        <Descriptions.Item label='Mô tả'>{unit?.description}</Descriptions.Item>
      </Descriptions>
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      <DrawerComponent title='Sửa thông tin đơn vị' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormUpdateUnit data={unit} />
      </DrawerComponent>
    </>
  )
}
export default UnitDetail
