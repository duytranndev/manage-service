import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import CreateIcon from '@material-ui/icons/Create'
import { Button, Descriptions, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFields } from '../../../store/recuders/field.reducer'
import DrawerComponent from '../../molecules/drawer'
import FormAddField from '../../organisms/field/add-field/index'
import ManagementField from '../../organisms/field/list-field'

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

export default function Field() {
  const user = useSelector((state) => state.authentication.data)

  const [visible, setVisible] = useState(false)
  const classes = useStyles()
  const [field, setField] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const fields = useSelector((state) => state.field.data)
  const dispatch = useDispatch()
  const isPending = useSelector((state) => state.field.pending)

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (fields.length === 0) {
      dispatch(fetchFields())
    }
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResults([])
    }
    const results = fields?.filter((person) => person?.name?.toUpperCase().includes(searchTerm.toUpperCase()))
    return setSearchResults(results)

    // console.log('results :>> ', results)
  }, [searchTerm])

  const handleOnSelectField = (field) => {
    setField(field)
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
          Qu???n L?? L??nh V???c
        </p>
      </div>
      {!isPending ? (
        <>
          {fields.length > 0 ? (
            <>
              <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                <AddIcon />
              </Fab>
              <div className='search-form'>
                <div className='simple-search'>
                  <input type='text' placeholder='T??m ki???m l??nh v???c' value={searchTerm} onChange={handleChange} />
                  <button onClick={handleOnRemoveSearch}>
                    <BackspaceIcon style={{ marginTop: '5px' }} />
                  </button>
                </div>
              </div>
              <ul className='search-result'>
                {searchResults?.length > 0 &&
                  searchResults?.map((item: StaffInterface) => (
                    <li className='item' key={item._id} onClick={() => handleOnSelectField(item)}>
                      {item?.name}
                    </li>
                  ))}
              </ul>
              <div className='total' style={{ margin: '10px' }}>
                T???ng s??? l?????ng l??nh v???c: <span style={{ color: 'black', fontWeight: 600 }}>{fields.length}</span>
              </div>
              <div className='content'>
                <ManagementField data={fields} />
              </div>
              {field && (
                <div className='detail'>
                  <Descriptions labelStyle={{ fontSize: '110%' }} bordered title='Chi ti???t ph??ng ban' size='default'>
                    <Descriptions.Item label='T??n ph??ng ban'>{field?.name}</Descriptions.Item>
                    <Descriptions.Item label='M?? ph??ng ban'>{field?.fieldCode}</Descriptions.Item>
                    <Descriptions.Item label='Ng??y t???o'>{field?.insertTime}</Descriptions.Item>

                    <Descriptions.Item label='M?? t???'>{field?.description}</Descriptions.Item>
                  </Descriptions>
                </div>
              )}
              <DrawerComponent title='Th??m l??nh v???c' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddField />
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
                description={<span>Danh s??ch l??nh v???c hi???n ??ang tr???ng</span>}>
                <Button type='primary' onClick={handleShowDrawer}>
                  Th??m l??nh v???c
                </Button>
              </Empty>
              <DrawerComponent title='Th??m l??nh v???c' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddField />
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
