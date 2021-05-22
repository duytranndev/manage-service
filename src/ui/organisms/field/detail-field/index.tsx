import { Fab, makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { FieldInterface } from '../../../../share/interface/field.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import EditField from '../update-field'

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

const FieldDetail = (): JSX.Element => {
  const [visible, setVisible] = useState(false)
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  const [field, setField] = useState<FieldInterface>()
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)

  const { slug } = useParams<any>()
  const classes = useStyles()

  useEffect(() => {
    setField(fields.find((item) => item.slug === slug))
  }, [slug, fields])

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
      <Descriptions
        labelStyle={{ fontSize: '110%' }}
        layout='vertical'
        bordered
        title='Chi tiết lĩnh vực'
        size='default'>
        <Descriptions.Item label='Tên phòng ban'>{field?.name}</Descriptions.Item>
        <Descriptions.Item label='Mã phòng ban'>{field?.fieldCode}</Descriptions.Item>
        <Descriptions.Item label='Ngày tạo'>{field?.insertTime}</Descriptions.Item>

        <Descriptions.Item label='Mô tả'>{field?.description}</Descriptions.Item>
      </Descriptions>
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      <DrawerComponent title='Sửa thông tin phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
        <EditField data={field} />
      </DrawerComponent>
    </>
  )
}
export default FieldDetail
