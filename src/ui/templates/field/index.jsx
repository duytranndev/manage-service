import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import { Button, Descriptions, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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

export default function Field() {
  const [visible, setVisible] = useState(false)
  const classes = useStyles()
  const [field, setField] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const fields = useSelector((state) => state.field.data)

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

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
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      {fields.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
          <div className='search-form'>
            <div className='simple-search'>
              <input type='text' placeholder='Tìm kiếm lĩnh vực' value={searchTerm} onChange={handleChange} />
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
          <div className='content'>
            <ManagementField data={fields} />
          </div>
          {field && (
            <div className='detail'>
              <Descriptions labelStyle={{ fontSize: '110%' }} bordered title='Chi tiết phòng ban' size='default'>
                <Descriptions.Item label='Tên phòng ban'>{field?.name}</Descriptions.Item>
                <Descriptions.Item label='Mã phòng ban'>{field?.fieldCode}</Descriptions.Item>
                <Descriptions.Item label='Ngày tạo'>{field?.insertTime}</Descriptions.Item>

                <Descriptions.Item label='Mô tả'>{field?.description}</Descriptions.Item>
              </Descriptions>
            </div>
          )}
          <DrawerComponent title='Thêm lĩnh vực' visible={visible} onClose={handleCloseDrawer} width={680}>
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
            description={<span>Danh sách lĩnh vực hiện đang trống</span>}>
            <Button type='primary' onClick={handleShowDrawer}>
              Thêm lĩnh vực
            </Button>
          </Empty>
          <DrawerComponent title='Thêm lĩnh vực' visible={visible} onClose={handleCloseDrawer} width={800}>
            <FormAddField />
          </DrawerComponent>
        </>
      )}

      {/* <ManagementStaff data={staffs} /> */}
    </>
  )
}
