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
import { Link, useRouteMatch } from 'react-router-dom'
import { SERVICE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { ServiceInterface } from '../../../../share/interface/service.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { DELETE_SERVICE } from '../../../../store/actions/service.action'
import { AppState } from '../../../../store/types'
type ManagementServiceProps = {
  data: ServiceInterface[]
}

export default function ManagementService({ data }: ManagementServiceProps) {
  const dispatch = useDispatch()
  const match = useRouteMatch()
  const [idService, setIdService] = useState('')
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)

  const handleOnDelete = async (id: string) => {
    const myPromise = moduleApi.delete(SERVICE_URL, id)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Xoá dịch vụ thành công',
      error: 'Xoá dịch vụ thất bại'
    })
    const status = await myPromise.then((response) => response.status)
    if (status === 204) {
      dispatch({ type: DELETE_SERVICE, id: id })
    }
  }
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = (id: string) => {
    if (user?.role !== 'ADMIN') {
      toast.error('Không đủ phân quyền!')
      // alert('chu tuoi gi')
      return null
    }
    setIdService(id)
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
      <TableContainer component={Paper} style={{ maxHeight: '400px' }}>
        <Table stickyHeader size='small' aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Mã dịch vụ</TableCell>
              <TableCell align='left'>Tên dịch vụ</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: ServiceInterface) => (
              <TableRow key={row._id}>
                <TableCell align='left' component='th' scope='row'>
                  {row.serviceCode}
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='center'>
                  <Space align='center' size='small'>
                    <Link to={`${match.path}/${row.slug}`}>
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
                      onOk={() => handleOk(idService)}
                      onCancel={handleCancel}>
                      <p>Bạn có chắc chắn muốn xoá dịch vụ này?</p>
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
