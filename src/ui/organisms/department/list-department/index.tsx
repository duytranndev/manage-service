/* eslint-disable react-hooks/rules-of-hooks */
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
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DEPARTMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { DELETE_DEPARTMENT } from '../../../../store/actions/department.action'
import './management.scss'
type ManagementDepartmentProps = {
  data: DepartmentInterface[]
}

export default function ManagementDepartment({ data }: ManagementDepartmentProps) {
  const dispatch = useDispatch()

  const [idDepartment, setIdDepartment] = useState('')

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
  const [isModalVisible, setIsModalVisible] = useState(false)

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
  return (
    <>
      <TableContainer component={Paper}>
        <Table size='medium' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Mã phòng ban</TableCell>
              <TableCell align='center'>Tên phòng</TableCell>
              <TableCell align='center'>Số lượng nhân viên</TableCell>
              <TableCell align='center'>Ngày tạo</TableCell>
              <TableCell align='center'>Liên kết tĩnh</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: DepartmentInterface) => (
              <TableRow key={row._id}>
                <TableCell align='center' component='th' scope='row'>
                  {row.departmentCode}
                </TableCell>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.totalStaff}</TableCell>
                <TableCell align='center'>{row.insertTime}</TableCell>
                <TableCell align='center'>{row.slug}</TableCell>
                <TableCell align='center'>
                  <Space align='center' size='small'>
                    <Link to={`/admin/department/${row.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                        <SearchOutlined />
                      </Tag>
                    </Link>
                    <Link to={`/admin/department/${row.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='warning'>
                        <ToolOutlined />
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
      <Toaster />
    </>
  )
}
