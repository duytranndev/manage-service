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
import { Link, useRouteMatch } from 'react-router-dom'
import { DEPARTMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { DELETE_DEPARTMENT } from '../../../../store/actions/department.action'

export default function ManagementField({ data }: any) {
  const match = useRouteMatch()
  const [idField, setIdField] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const user = useSelector((state) => state.authentication.data)

  const [newField, setNewField] = useState()
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const showModal = (id) => {
    if (user?.role !== 'ADMIN') {
      toast.error('Không đủ phân quyền!')
      // alert('chu tuoi gi')
      return null
    }
    setIdField(id)
    setIsModalVisible(true)
  }
  const handleShowDrawer = (index: number) => {
    // console.log('index :>> ', index)
    setNewField(data[index])
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }

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

  const handleOk = (id: string) => {
    handleOnDelete(id)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <TableContainer component={Paper} style={{ maxHeight: '400px' }}>
      <Table stickyHeader size='small' aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Mã lĩnh vực</TableCell>
            <TableCell align='left'>Tên lĩnh vực</TableCell>
            <TableCell align='left'>Ngày tạo</TableCell>
            <TableCell align='left'>Liên kết tĩnh</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((field, index) => (
            <TableRow key={field._id}>
              <TableCell component='th' scope='row' align='left'>
                {field.fieldCode}
              </TableCell>
              <TableCell align='left'>{field.name}</TableCell>
              <TableCell align='left'>{field.insertTime}</TableCell>
              <TableCell align='left'>{field.slug}</TableCell>
              <TableCell align='center'>
                <Space align='center' size='small'>
                  <Link to={`/admin/field/${field.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                      <SearchOutlined />
                    </Tag>
                  </Link>

                  <Tag
                    onClick={() => showModal(field._id)}
                    // onClick={() => handleOnDelete(row._id)}
                    style={{ padding: '0px 15px 6px 15px', margin: '0px 0px', cursor: 'pointer' }}
                    color='error'>
                    <DeleteOutlined />
                  </Tag>
                  <Modal
                    title='Modal Confirm'
                    visible={isModalVisible}
                    onOk={() => handleOk(idField)}
                    onCancel={handleCancel}>
                    <p>Bạn có chắc chắn muốn xoá lĩnh vực này</p>
                  </Modal>
                </Space>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
