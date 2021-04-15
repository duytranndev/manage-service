import { DeleteOutlined, SearchOutlined, ToolOutlined } from '@ant-design/icons'
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
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { DELETE_STAFF } from '../../../../store/actions/staff.action'

export default function ManagementStaff() {
  const match = useRouteMatch()
  const staffs = useSelector((state) => state.staff.data)
  console.log('staffs :>> ', staffs)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()
  const showModal = () => {
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
      <TableContainer component={Paper}>
        <Table size='medium' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Họ tên</TableCell>
              <TableCell align='center'>Phòng ban</TableCell>
              <TableCell align='center'>Chức vụ</TableCell>
              <TableCell align='center'>Số điện thoại</TableCell>
              <TableCell align='center'>Quyền hạn</TableCell>
              <TableCell align='center'>Ngày sinh</TableCell>
              <TableCell align='center'>Địa chỉ</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staffs.map((staff: StaffInterface) => (
              <TableRow key={staff._id}>
                <TableCell component='th' scope='row'>
                  {staff.name}
                </TableCell>
                <TableCell align='center'>{staff.departmentId}</TableCell>
                <TableCell align='center'>{staff.position}</TableCell>
                <TableCell align='center'>{staff.phone}</TableCell>
                <TableCell align='center'>{staff.role}</TableCell>
                <TableCell align='center'>{staff.dateOfBirth}</TableCell>
                <TableCell align='center'>{staff.address}</TableCell>
                <TableCell align='center'>
                  <Space align='center' size='small'>
                    <Link to={`/${match.path}/${staff.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                        <SearchOutlined />
                      </Tag>
                    </Link>
                    <Link to={`/${match.path}/${staff.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='warning'>
                        <ToolOutlined />
                      </Tag>
                    </Link>
                    <Tag
                      onClick={showModal}
                      // onClick={() => handleOnDelete(row._id)}
                      style={{ padding: '0px 15px 6px 15px', margin: '0px 0px', cursor: 'pointer' }}
                      color='error'>
                      <DeleteOutlined />
                    </Tag>
                    <Modal
                      title='Basic Modal'
                      visible={isModalVisible}
                      onOk={() => handleOk(staff._id)}
                      onCancel={handleCancel}>
                      <p>Bạn có chắc chắn muốn xoá {staff?.name}</p>
                    </Modal>
                  </Space>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toaster />
    </>
  )
}
