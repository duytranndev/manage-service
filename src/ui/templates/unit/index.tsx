import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import { Button, Descriptions, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { FieldInterface } from '../../../share/interface/field.interface'
import { UnitInterface } from '../../../share/interface/unit.interface'
import { fetchUnits } from '../../../store/recuders/unit.reducer'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddUnit from '../../organisms/Unit(đơn vị)/add-Unit'
import ManagementUnit from '../../organisms/Unit(đơn vị)/list-Unit'
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

export default function Unit() {
  const classes = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  const [unit, setUnit] = useState<UnitInterface>()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const dispatch = useDispatch()
  const isPending = useSelector<AppState, any>((state) => state.unit.pending)
  const user = useSelector<AppState, any>((state) => state.authentication.data)

  useEffect(() => {
    if (units.length === 0) {
      dispatch(fetchUnits())
    }
  }, [])

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResults([])
    }
    const results = units?.filter((person) => person?.name?.toUpperCase().includes(searchTerm.toUpperCase())) as any
    return setSearchResults(results)

    // console.log('results :>> ', results)
  }, [searchTerm])

  units.map((unit) => {
    const field = fields.find((item) => item._id === unit.fieldId)
    return (unit['fieldName'] = field?.name)
  })

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

  const handleOnSelectUnit = (unit: UnitInterface) => {
    setUnit(unit)
    setSearchResults([])
    setSearchTerm('')
  }

  const handleOnRemoveSearch = () => {
    setSearchTerm('')
  }

  return (
    <>
      {!isPending ? (
        <>
          {units.length > 0 ? (
            <>
              <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                <AddIcon />
              </Fab>
              <div className='search-form'>
                <div className='simple-search'>
                  <input type='text' placeholder='Tìm kiếm đơn vị' value={searchTerm} onChange={handleChange} />
                  <button onClick={handleOnRemoveSearch}>
                    <BackspaceIcon style={{ marginTop: '5px' }} />
                  </button>
                </div>
              </div>
              <ul className='search-result'>
                {searchResults?.length > 0 &&
                  searchResults?.map((item: UnitInterface) => (
                    <li className='item' key={item._id} onClick={() => handleOnSelectUnit(item)}>
                      {item?.name}
                    </li>
                  ))}
              </ul>

              <div className='content'>
                <ManagementUnit data={units} />
              </div>
              {unit && (
                <div className='detail'>
                  <>
                    <Descriptions layout='vertical' bordered title='Chi tiết đơn vị' size='small'>
                      <Descriptions.Item label='Tên đơn vị'>{unit?.name}</Descriptions.Item>
                      <Descriptions.Item label='Mã đơn vị'>{unit?.unitCode}</Descriptions.Item>
                      <Descriptions.Item label='Tên lĩnh vực'>{unit?.fieldName}</Descriptions.Item>
                      <Descriptions.Item label='Ngày tạo'>{unit?.insertTime}</Descriptions.Item>
                      <Descriptions.Item label='Mô tả'>{unit?.description}</Descriptions.Item>
                    </Descriptions>
                  </>
                </div>
              )}

              <DrawerComponent title='Thêm đơn vị' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddUnit />
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
                description={<span>Danh sách đơn vị hiện đang trống</span>}>
                <Button type='primary' onClick={handleShowDrawer}>
                  Thêm đơn vị
                </Button>
              </Empty>
              <DrawerComponent title='Thêm đơn vị' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddUnit />
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
