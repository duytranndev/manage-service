import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Space, Tag } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { DELETE_STAFF } from '../../../../store/actions/staff.action'

type ManagementStaffProps = {
  data: StaffInterface[]
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

export default function ManagementStaff({ data }: ManagementStaffProps) {
  const [idStaff, setIdStaff] = useState('')
  const classes = useStyles()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const user = useSelector((state) => state.authentication.data)

  const dispatch = useDispatch()
  const showModal = (id) => {
    if (user?.role !== 'ADMIN') {
      toast.error('Không đủ phân quyền!')
      // alert('chu tuoi gi')
      return null
    }
    setIdStaff(id)
    setIsModalVisible(true)
  }

  const handleOnDelete = async (id: any) => {
    const myPromise = moduleApi.delete(STAFF_URL, id)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Xoá nhân viên thành công',
      error: 'Xoá nhân viên thất bại'
    })
    const status = await myPromise.then((response) => response.status)
    if (status === 204) {
      dispatch({ type: DELETE_STAFF, id: id })
    }
  }

  const handleOk = (id: any) => {
    handleOnDelete(id)
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <TableContainer component={Paper} style={{ maxHeight: '400px' }}>
        <Table className={classes.table} size='small' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Họ tên</TableCell>
              <TableCell align='left'>Phòng ban</TableCell>
              <TableCell align='left'>Chức vụ</TableCell>
              <TableCell align='left'>Số điện thoại</TableCell>
              <TableCell align='left'>Quyền hạn</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((staff: StaffInterface, index: number) => (
              <TableRow key={staff._id}>
                <TableCell component='th' scope='row' align='left'>
                  {staff.name}
                </TableCell>
                <TableCell align='left'>{staff.department}</TableCell>
                <TableCell align='left'>{staff.position}</TableCell>
                <TableCell align='left'>{staff.phone}</TableCell>
                <TableCell align='left'>{staff.role}</TableCell>
                <TableCell align='center'>
                  <Space align='center' size='small'>
                    <Link to={`/admin/staff/${staff.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                        <SearchOutlined />
                      </Tag>
                    </Link>

                    <Tag
                      onClick={() => showModal(staff._id)}
                      style={{ padding: '0px 15px 6px 15px', margin: '0px 0px', cursor: 'pointer' }}
                      color='error'>
                      <DeleteOutlined />
                    </Tag>
                    <Modal
                      title='Basic Modal'
                      visible={isModalVisible}
                      onOk={() => handleOk(idStaff)}
                      onCancel={handleCancel}>
                      <p>Bạn có chắc chắn muốn xoá nhân viên này</p>
                    </Modal>
                  </Space>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
