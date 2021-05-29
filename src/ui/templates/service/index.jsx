import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import CreateIcon from '@material-ui/icons/Create'
import { Button, Descriptions, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from '../../../store/recuders/service.reducer'
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
  const [service, setService] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const services = useSelector((state) => state.service.data)
  const dispatch = useDispatch()
  const isPending = useSelector((state) => state.service.pending)
  const user = useSelector((state) => state.authentication.data)

  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchServices())
    }
  }, [])

  // const fields = useSelector((state) => state.field.data)

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResults([])
    }
    const results = services?.filter((person) => person?.name?.toUpperCase().includes(searchTerm.toUpperCase()))
    return setSearchResults(results)

    // console.log('results :>> ', results)
  }, [searchTerm])

  const handleOnSelectService = (service) => {
    setService(service)
    setSearchResults([])
    setSearchTerm('')
  }

  const handleOnRemoveSearch = () => {
    setSearchTerm('')
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

  return (
    <>
      <div className='title' style={{ margin: '20px 0px' }}>
        <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
          <CreateIcon />
          Quản Lý Dịch vụ
        </p>
      </div>
      {!isPending ? (
        <>
          {services.length > 0 ? (
            <>
              <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                <AddIcon />
              </Fab>

              <div className='search-component'>
                <div className='search-form'>
                  <div className='simple-search'>
                    <input type='text' placeholder='Tìm kiếm dịch vụ' value={searchTerm} onChange={handleChange} />
                    <button onClick={handleOnRemoveSearch}>
                      <BackspaceIcon style={{ marginTop: '5px' }} />
                    </button>
                  </div>
                </div>
                <ul className='search-result'>
                  {searchResults?.length > 0 &&
                    searchResults?.map((item: StaffInterface) => (
                      <li className='item' key={item._id} onClick={() => handleOnSelectService(item)}>
                        {item?.name}
                      </li>
                    ))}
                </ul>
              </div>

              <div className='content'>
                <ManagementService data={services} />
              </div>

              {service && (
                <Descriptions labelStyle={{ fontSize: '110%' }} bordered title='Chi tiết dịch vụ' size='small'>
                  <Descriptions.Item label='Tên dịch vụ'>{service?.name}</Descriptions.Item>
                  <Descriptions.Item label='Mã dịch vụ'>{service?.serviceCode}</Descriptions.Item>
                  <Descriptions.Item label='Tên đơn vị'>
                    {/* {unit?.name} */}
                    {service?.unitName}
                    {/* {units?.find((item) => item._id === service?.fieldId)?.name} */}
                  </Descriptions.Item>
                  <Descriptions.Item label='Ngày tạo'>{service?.insertTime}</Descriptions.Item>

                  <Descriptions.Item label='Mô tả'>{service?.description}</Descriptions.Item>
                </Descriptions>
              )}

              <DrawerComponent title='Thêm dịch vụ' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddService />
              </DrawerComponent>
            </>
          ) : (
            <Empty>
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
            </Empty>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
