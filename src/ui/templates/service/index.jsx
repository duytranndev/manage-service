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
    bottom: '15%',
    right: '1%',
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
      toast.error('Kh??ng ????? ph??n quy???n!')
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
          Qu???n L?? D???ch v???
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
                    <input type='text' placeholder='T??m ki???m d???ch v???' value={searchTerm} onChange={handleChange} />
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
              <div className='total' style={{ margin: '10px' }}>
                T???ng s??? l?????ng d???ch v???: <span style={{ color: 'black', fontWeight: 600 }}>{services.length}</span>
              </div>
              {services.length > 0 && (
                <div className='content'>
                  <ManagementService data={services} />
                </div>
              )}

              {service && (
                <Descriptions labelStyle={{ fontSize: '110%' }} bordered title='Chi ti???t d???ch v???' size='small'>
                  <Descriptions.Item label='T??n d???ch v???'>{service?.name}</Descriptions.Item>
                  <Descriptions.Item label='M?? d???ch v???'>{service?.serviceCode}</Descriptions.Item>
                  <Descriptions.Item label='T??n ????n v???'>
                    {/* {unit?.name} */}
                    {service?.unitName}
                    {/* {units?.find((item) => item._id === service?.fieldId)?.name} */}
                  </Descriptions.Item>
                  <Descriptions.Item label='Ng??y t???o'>{service?.insertTime}</Descriptions.Item>

                  <Descriptions.Item label='M?? t???'>{service?.description}</Descriptions.Item>
                </Descriptions>
              )}

              <DrawerComponent title='Th??m d???ch v???' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddService />
              </DrawerComponent>
            </>
          ) : (
            <React.Fragment>
              <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{
                  height: 100
                }}
                className={classes.root}
                description={<span>Danh s??ch d???ch v??? hi???n ??ang tr???ng</span>}>
                <Button type='primary' onClick={handleShowDrawer}>
                  Th??m d???ch v???
                </Button>
              </Empty>
              <DrawerComponent title='Th??m d???ch v???' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddService />
              </DrawerComponent>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
