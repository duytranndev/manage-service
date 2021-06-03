import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import CreateIcon from '@material-ui/icons/Create'
import { Button, Descriptions, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { DepartmentInterface } from '../../../share/interface/department.interface'
import { fetchDepartments } from '../../../store/recuders/department.reducer'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddDepartment from '../../organisms/department/add-department'
import ManagementDepartment from '../../organisms/department/list-department'

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
    bottom: '15%',
    right: '3%',
    zIndex: 1
  }
})

export default function Department() {
  const [visible, setVisible] = useState(false)
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const classes = useStyles()
  const [department, setDepartment] = useState<DepartmentInterface>()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const dispatch = useDispatch()
  const isPending = useSelector<AppState, any>((state) => state.department.pending)
  const user = useSelector<AppState, any>((state) => state.authentication.data)

  useEffect(() => {
    if (departments.length === 0) {
      dispatch(fetchDepartments())
    }
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResults([])
    }
    const results = departments?.filter((person) =>
      person?.name?.toUpperCase().includes(searchTerm.toUpperCase())
    ) as any
    return setSearchResults(results)

    // console.log('results :>> ', results)
  }, [searchTerm])

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

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

  const handleOnSelectDepartment = (department: DepartmentInterface) => {
    setDepartment(department)
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
          Quản Lý Phòng Ban
        </p>
      </div>

      {!isPending ? (
        <>
          {departments.length > 0 ? (
            <>
              <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                <AddIcon />
              </Fab>
              <div className='search-form'>
                <div className='simple-search'>
                  <input type='text' placeholder='Tìm kiếm phòng ban' value={searchTerm} onChange={handleChange} />
                  <button onClick={handleOnRemoveSearch}>
                    <BackspaceIcon style={{ marginTop: '5px' }} />
                  </button>
                </div>
              </div>
              <ul className='search-result'>
                {searchResults?.length > 0 &&
                  searchResults?.map((item: DepartmentInterface) => (
                    <li className='item' key={item._id} onClick={() => handleOnSelectDepartment(item)}>
                      {item?.name}
                    </li>
                  ))}
              </ul>
              <div className='total' style={{ margin: '10px' }}>
                Tổng số lượng phòng ban: <span style={{ color: 'black', fontWeight: 600 }}>{departments.length}</span>
              </div>
              <div className='content'>
                <ManagementDepartment data={departments} />
              </div>

              {department && (
                <div className='detail'>
                  <Descriptions
                    layout='vertical'
                    labelStyle={{ fontSize: '110%' }}
                    bordered
                    title='Chi tiết phòng ban'
                    size='default'>
                    <Descriptions.Item label='Tên phòng ban'>{department?.name}</Descriptions.Item>
                    <Descriptions.Item label='Mã phòng ban'>{department?.departmentCode}</Descriptions.Item>
                    <Descriptions.Item label='Ngày tạo'>{department?.insertTime}</Descriptions.Item>
                    {/* <Descriptions.Item label='Amount'>$80.00</Descriptions.Item>
          <Descriptions.Item label='Discount'>$20.00</Descriptions.Item>
          <Descriptions.Item label='Official'>$60.00</Descriptions.Item> */}
                    <Descriptions.Item label='Mô tả'>{department.description}</Descriptions.Item>
                  </Descriptions>
                </div>
              )}

              <DrawerComponent title='Thêm phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddDepartment />
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
                description={<span>Danh sách phòng ban hiện đang trống</span>}>
                <Button type='primary' onClick={handleShowDrawer}>
                  Thêm phòng ban
                </Button>
              </Empty>
              <DrawerComponent title='Thêm phòng ban' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddDepartment />
              </DrawerComponent>
            </>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
