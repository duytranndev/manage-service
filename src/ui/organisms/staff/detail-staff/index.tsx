import { Fab, makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import FormUpdateStaff from '../update-staff'

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

const StaffDetail = (): JSX.Element => {
  const [visible, setVisible] = useState(false)
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)
  const [staff, setStaff] = useState<StaffInterface>()
  const { slug } = useParams<any>()
  const classes = useStyles()

  useEffect(() => {
    setStaff(staffs.find((item) => item.slug === slug))
  }, [slug, staffs])

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  console.log('staff :>> ', staff)
  return (
    <>
      <Descriptions
        labelStyle={{ fontSize: '110%' }}
        layout='horizontal'
        bordered
        title='Chi tiết nhân viên'
        size='default'>
        <Descriptions.Item label='Tên nhân viên'>{staff?.name}</Descriptions.Item>
        <Descriptions.Item label='Phòng ban'>{staff?.department}</Descriptions.Item>
        <Descriptions.Item label='Chức vụ'>{staff?.position}</Descriptions.Item>
        <Descriptions.Item label='Quyền hạn'>{staff?.role}</Descriptions.Item>
        <Descriptions.Item label='Ngày sinh'>{staff?.dateOfBirth}</Descriptions.Item>
        <Descriptions.Item label='Quê quán'>{staff?.homeTown}</Descriptions.Item>
        <Descriptions.Item label='Địa chỉ'>{staff?.address}</Descriptions.Item>
        <Descriptions.Item label='Số điện thoại'>{staff?.phone}</Descriptions.Item>
        <Descriptions.Item label='Số chứng minh nhân dân'>{staff?.cardId}</Descriptions.Item>
        <Descriptions.Item label='Email'>{staff?.email}</Descriptions.Item>
        <Descriptions.Item label='Tên đăng nhập'>{staff?.username}</Descriptions.Item>
        <Descriptions.Item label='Mật khẩu'>{staff?.password}</Descriptions.Item>
        <Descriptions.Item label='Hình ảnh'>
          <img style={{ width: 350, height: 200 }} src={staff?.image} alt='' />
        </Descriptions.Item>
      </Descriptions>
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      <DrawerComponent title='Sửa thông tin phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormUpdateStaff data={staff} />
      </DrawerComponent>
    </>
  )
}
export default StaffDetail
