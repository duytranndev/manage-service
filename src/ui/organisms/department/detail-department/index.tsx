import { Fab, makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import EditDepartment from '../edit-department'

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

const DepartmentDetail = (): JSX.Element => {
  const [visible, setVisible] = useState(false)
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const [department, setDepartment] = useState<DepartmentInterface>()
  const { slug } = useParams<any>()
  const classes = useStyles()

  useEffect(() => {
    setDepartment(departments.find((item) => item.slug === slug))
  }, [slug, departments])

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <Descriptions labelStyle={{ fontSize: '110%' }} bordered title='Chi tiết phòng ban' size='default'>
        <Descriptions.Item label='Tên phòng ban'>{department?.name}</Descriptions.Item>
        <Descriptions.Item label='Mã phòng ban'>{department?.departmentCode}</Descriptions.Item>
        <Descriptions.Item label='Ngày tạo'>{department?.insertTime}</Descriptions.Item>
        {/* <Descriptions.Item label='Amount'>$80.00</Descriptions.Item>
        <Descriptions.Item label='Discount'>$20.00</Descriptions.Item>
        <Descriptions.Item label='Official'>$60.00</Descriptions.Item> */}
        <Descriptions.Item label='Mô tả'>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      <DrawerComponent title='Sửa thông tin phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
        <EditDepartment data={department} />
      </DrawerComponent>
    </>
  )
}
export default DepartmentDetail
