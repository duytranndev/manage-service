import { Descriptions } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/types'

const MyAccount = () => {
  const user = useSelector<AppState, any>((state) => state.authentication.data)

  return (
    <Descriptions labelStyle={{ fontSize: '110%' }} layout='horizontal' bordered size='default'>
      <Descriptions.Item label='Tên nhân viên'>{user?.name}</Descriptions.Item>
      <Descriptions.Item label='Phòng ban'>{user?.department}</Descriptions.Item>
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
        <img style={{ width: 350, height: 200 }} src={user?.image} alt='' />
      </Descriptions.Item>
    </Descriptions>
  )
}

export default MyAccount
