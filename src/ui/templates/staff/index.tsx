import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import CreateIcon from '@material-ui/icons/Create'
import { Button, Descriptions, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { DepartmentInterface } from '../../../share/interface/department.interface'
import { StaffInterface } from '../../../share/interface/staff.interface'
import { fetchStaffs } from '../../../store/recuders/staff.reducer'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddStaff from '../../organisms/staff/add-staff'
import ManagementStaff from '../../organisms/staff/list-staff'
import './index.scss'

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

export default function Staff() {
  const classes = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const [staff, setStaff] = useState<StaffInterface>()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const dispatch = useDispatch()
  const isPending = useSelector<AppState, any>((state) => state.staff.pending)
  const user = useSelector<AppState, any>((state) => state.authentication.data)

  useEffect(() => {
    if (staffs.length === 0) {
      dispatch(fetchStaffs())
    }
  }, [])

  staffs.map((staff) => {
    const department = departments.find((item) => item._id === staff.departmentId)
    return (staff['department'] = department?.name)
  })

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResults([])
    }
    const results = staffs?.filter((person) => person?.name?.toUpperCase().includes(searchTerm.toUpperCase())) as any
    return setSearchResults(results)

    // console.log('results :>> ', results)
  }, [searchTerm])

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
  const handleOnSelectStaff = (staff: StaffInterface) => {
    setStaff(staff)
    setSearchResults([])
    setSearchTerm('')
  }

  const handleOnRemoveSearch = () => {
    setSearchTerm('')
  }

  return (
    <>
      <div className='title' style={{ margin: '20px 0px' }}>
        <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
          <CreateIcon />
          Quản Lý Nhân viên
        </p>
      </div>
      {!isPending ? (
        <>
          {staffs.length > 0 ? (
            <>
              <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                <AddIcon />
              </Fab>

              <div className='search-form'>
                <div className='simple-search'>
                  <input type='text' placeholder='Tìm kiếm nhân viên' value={searchTerm} onChange={handleChange} />
                  <button onClick={handleOnRemoveSearch}>
                    <BackspaceIcon style={{ marginTop: '5px' }} />
                  </button>
                </div>
              </div>
              <ul className='search-result'>
                {searchResults?.length > 0 &&
                  searchResults?.map((item: StaffInterface) => (
                    <li className='item' key={item._id} onClick={() => handleOnSelectStaff(item)}>
                      {item?.name}
                    </li>
                  ))}
              </ul>
              <div className='content'>
                <ManagementStaff data={staffs} />
              </div>

              {staff && (
                <div className='detail'>
                  <Descriptions labelStyle={{ fontSize: '110%' }} bordered title='Chi tiết nhân viên' size='default'>
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
                </div>
              )}

              <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddStaff />
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
                description={<span>Danh sách nhân viên hiện đang trống</span>}>
                <Button type='primary' onClick={handleShowDrawer}>
                  Thêm nhân viên
                </Button>
              </Empty>
              <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddStaff />
              </DrawerComponent>
            </>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}

      {/* <ManagementStaff data={staffs} /> */}
    </>
  )
}
