/* eslint-disable react-hooks/rules-of-hooks */
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
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
import { DEPARTMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { DELETE_DEPARTMENT } from '../../../../store/actions/department.action'
import { AppState } from '../../../../store/types'
type ManagementAssignmentProps = {
  data?: AssignmentInterface[] | undefined | any
}

const ManagementAssignment = ({ data }: ManagementAssignmentProps): JSX.Element => {
  const dispatch = useDispatch()
  const [idDepartment, setIdDepartment] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)

  const handleOnDelete = async (id: string) => {
    const myPromise = moduleApi.delete(DEPARTMENT_URL, id)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Xoá phòng ban thành công',
      error: 'Xoá phòng ban thất bại'
    })
    const status = await myPromise.then((response) => response.status)
    if (status === 204) {
      dispatch({ type: DELETE_DEPARTMENT, id: id })
    }
  }

  const showModal = (id: string) => {
    setIdDepartment(id)
    setIsModalVisible(true)
  }

  const handleOk = (id: string) => {
    handleOnDelete(id)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  console.log(`data`, data)

  return (
    <>
      <TableContainer component={Paper}>
        {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
        <Table size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Mã hồ sơ</TableCell>
              <TableCell align='center'>Tên người duyệt</TableCell>
              <TableCell align='center'>Ngày bắt đầu</TableCell>
              <TableCell align='center'>Ngày kết thúc</TableCell>
              <TableCell align='center'>Trạng thái</TableCell>
              {/* <TableCell align='left'>Trạng thái</TableCell> */}
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: AssignmentInterface, index: number) => (
              <TableRow key={row._id}>
                <TableCell align='center' component='th' scope='row'>
                  {row.profileCode}
                </TableCell>
                <TableCell align='center'>{(staffs.find((item) => item._id === row.staffId) as any)?.name}</TableCell>
                <TableCell align='center'>{row.timeStart}</TableCell>
                <TableCell align='center'>{row.timeEnd}</TableCell>
                <TableCell align='center'>
                  {row.status ? <Tag color='success'>Đã duyệt</Tag> : <Tag color='error'>Chưa duyệt</Tag>}
                </TableCell>
                <TableCell align='center'>
                  <Space align='center' size='small'>
                    <Link to={`/admin/assignment/${row.profileCode}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                        <SearchOutlined />
                      </Tag>
                    </Link>

                    <Tag
                      onClick={() => showModal(row._id as string)}
                      style={{ padding: '0px 15px 6px 15px', margin: '0px 0px', cursor: 'pointer' }}
                      color='error'>
                      <DeleteOutlined />
                    </Tag>
                    <Modal
                      title='Basic Modal'
                      visible={isModalVisible}
                      onOk={() => handleOk(idDepartment)}
                      onCancel={handleCancel}>
                      <p>Bạn có chắc chắn muốn xoá phòng ban này?</p>
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
export default ManagementAssignment
