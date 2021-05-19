import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { Paper } from '@material-ui/core'
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
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { DELETE_PROFILE } from '../../../../store/actions/profile.action'
type ProfileReceivedProps = {
  data?: ProfileInterface[]
}

export default function ManagementProfile({ data }: ProfileReceivedProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [idProfile, setIdProfile] = useState('')
  const dispatch = useDispatch()

  const showModal = (id: string) => {
    setIdProfile(id)
    setIsModalVisible(true)
  }

  const handleOnDelete = async (id: string) => {
    const myPromise = moduleApi.delete(PROFILE_URL, id)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Xoá hồ sơ thành công',
      error: 'Xoá hồ sơ thất bại'
    })
    const status = await myPromise.then((response) => response.status)
    if (status === 204) {
      dispatch({ type: DELETE_PROFILE, id: id })
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
    <>
      <Paper style={{ width: '100%' }}>
        <TableContainer style={{ maxHeight: '400px' }}>
          <Table stickyHeader size='small' aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Mã hồ sơ</TableCell>
                <TableCell align='center'>Tên văn bản</TableCell>
                <TableCell align='center'>Ngày gửi</TableCell>
                <TableCell align='center'>Phân công</TableCell>
                <TableCell align='center'>Duyệt</TableCell>
                <TableCell align='center'>Trạng thái</TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: ProfileInterface) => (
                <TableRow key={row._id}>
                  <TableCell component='th' scope='row'>
                    <Link to={`/admin/profile/${row.slug}`}>{row.profileCode}</Link>
                  </TableCell>
                  <TableCell align='center'>{row.nameDocument}</TableCell>
                  <TableCell align='center'>{row.insertTime}</TableCell>
                  <TableCell align='center'>
                    {row.assignment ? <Tag color='success'>Đã phân công</Tag> : <Tag color='error'>Chưa phân công</Tag>}
                  </TableCell>
                  <TableCell align='center'>
                    {row.browsed ? <Tag color='success'>Đã duyệt</Tag> : <Tag color='error'>Chưa duyệt</Tag>}
                  </TableCell>
                  <TableCell align='center'>
                    {row.browsed === true && row.assignment === true && row.status === 'Thông qua' ? (
                      <Tag color='success'>Thông qua</Tag>
                    ) : (
                      <Tag color='error'>Không thông qua</Tag>
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    <Space align='center' size='small'>
                      <Link to={`/admin/profile/${row.profileCode}`}>
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
                        onOk={() => handleOk(idProfile)}
                        onCancel={handleCancel}>
                        <p>Bạn có chắc chắn muốn xoá hồ sơ này?</p>
                      </Modal>
                    </Space>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
