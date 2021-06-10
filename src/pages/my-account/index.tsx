import { Fab, makeStyles } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build'
import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from 'react-redux'
import { DepartmentInterface } from '../../share/interface/department.interface'
import { fetchDepartments } from '../../store/recuders/department.reducer'
import { AppState } from '../../store/types'
import DrawerComponent from '../../ui/molecules/drawer'
import FormUpdateStaff from '../../ui/organisms/staff/update-staff'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  btn_add_action: {
    position: 'fixed',
    bottom: '15%',
    right: '3%',
    zIndex: 1
  },
  btn_update_action: {
    position: 'fixed',
    bottom: '20%',
    right: '3%',
    zIndex: 1
  }
}))

const MyAccount = () => {
  const classes = useStyles()
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const user = useSelector<AppState, any>((state) => state.authentication.data)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (departments.length === 0) {
      dispatch(fetchDepartments())
    }
  }, [])

  const handleShowDrawer = () => {
    setVisible(true)
  }

  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <Descriptions labelStyle={{ fontSize: '110%' }} layout='horizontal' bordered size='default'>
        <Descriptions.Item label='Tên nhân viên'>{user?.name}</Descriptions.Item>
        <Descriptions.Item label='Phòng ban'>
          {departments.find((department) => department._id === user?.departmentId)?.name}
        </Descriptions.Item>
        <Descriptions.Item label='Chức vụ'>{user?.position}</Descriptions.Item>
        <Descriptions.Item label='Quyền hạn'>{user?.role}</Descriptions.Item>
        <Descriptions.Item label='Ngày sinh'>{user?.dateOfBirth}</Descriptions.Item>
        <Descriptions.Item label='Quê quán'>{user?.homeTown}</Descriptions.Item>
        <Descriptions.Item label='Địa chỉ'>{user?.address}</Descriptions.Item>
        <Descriptions.Item label='Số điện thoại'>{user?.phone}</Descriptions.Item>
        <Descriptions.Item label='Số chứng minh nhân dân'>{user?.cardId}</Descriptions.Item>
        <Descriptions.Item label='Email'>{user?.email}</Descriptions.Item>
        <Descriptions.Item label='Tên đăng nhập'>{user?.username}</Descriptions.Item>
        <Descriptions.Item label='Mật khẩu'>{user?.password}</Descriptions.Item>
        <Descriptions.Item label='Hình ảnh'>
          <LazyLoadImage alt={user?.image} src={user?.image} effect='blur' style={{ width: 350, height: 200 }} />
        </Descriptions.Item>
      </Descriptions>
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
        <BuildIcon />
      </Fab>

      <DrawerComponent title='Sửa thông tin cá nhân' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormUpdateStaff data={user} />
      </DrawerComponent>
    </>
  )
}

export default MyAccount
