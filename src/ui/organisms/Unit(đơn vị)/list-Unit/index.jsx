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
import { Link, useRouteMatch } from 'react-router-dom'
import { UNIT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { DELETE_UNIT } from '../../../../store/actions/unit.action'

export default function ManagementUnit({ data }: props) {
  const match = useRouteMatch()
  const [idUnit, setIdUnit] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()
  const showModal = (id) => {
    setIdUnit(id)
    setIsModalVisible(true)
  }

  const handleOnDelete = async (id) => {
    const myPromise = moduleApi.delete(UNIT_URL, id)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Xoá đơn vị thành công',
      error: 'Xoá đơn vị thất bại'
    })
    const status = await myPromise.then((response) => response.status)
    if (status === 204) {
      dispatch({ type: DELETE_UNIT, id: id })
    }
  }
  const handleOk = (id) => {
    handleOnDelete(id)
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <TableContainer component={Paper}>
      <Table size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Mã đơn vị</TableCell>
            <TableCell align='left'>Tên đơn vị</TableCell>
            <TableCell align='left'>Tên lĩnh vực</TableCell>
            <TableCell align='left'>Ngày tạo</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((unit) => (
            <TableRow key={unit._id}>
              <TableCell align='left'>{unit.unitCode}</TableCell>
              <TableCell align='left' component='th' scope='row'>
                {unit.name}
              </TableCell>
              <TableCell align='left'>{unit.fieldName}</TableCell>
              <TableCell align='left'>{unit.insertTime}</TableCell>
              <TableCell align='center'>
                <Space align='center' size='small'>
                  <Link to={`/${match.path}/${unit.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                      <SearchOutlined />
                    </Tag>
                  </Link>
                  <Link to={`/${match.path}/${unit.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='warning'>
                      <ToolOutlined />
                    </Tag>
                  </Link>
                  <Tag
                    onClick={() => showModal(unit._id)}
                    // onClick={() => handleOnDelete(row._id)}
                    style={{ padding: '0px 15px 6px 15px', margin: '0px 0px', cursor: 'pointer' }}
                    color='error'>
                    <DeleteOutlined />
                  </Tag>
                  <Modal
                    title='Basic Modal'
                    visible={isModalVisible}
                    onOk={() => handleOk(idUnit)}
                    onCancel={handleCancel}>
                    <p>Bạn có chắc chắn muốn xoá đơn vị này</p>
                  </Modal>
                </Space>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Toaster />
    </TableContainer>
  )
}
