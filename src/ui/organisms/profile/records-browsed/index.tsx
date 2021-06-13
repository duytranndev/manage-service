import { SearchOutlined } from '@ant-design/icons'
import { Paper } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CreateIcon from '@material-ui/icons/Create'
import { Empty, Space, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { DELETE_PROFILE } from '../../../../store/actions/profile.action'
import { AppState } from '../../../../store/types'

const ManagementRecordsBrowsed = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [idProfile, setIdProfile] = useState('')
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [profiles, setProfiles] = useState<ProfileInterface[]>([])

  const showModal = (id: string) => {
    if (user?.role !== 'ADMIN') {
      toast.error('Bạn không đủ phân quyền!')
      return null
    }
    setIdProfile(id)
    setIsModalVisible(true)
  }
  const dispatch = useDispatch()

  useEffect(() => {
    const params = {
      browsed: true
    }
    moduleApi
      .get(PROFILE_URL, params)
      .then((res) => setProfiles(res.data.data))
      .then((data) => setIsLoading(true))
      .catch((err) => setIsLoading(true))
  }, [])

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
      <div className='title' style={{ margin: '20px 0px' }}>
        <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
          <CreateIcon />
          Danh sách hồ sơ đã duyệt
        </p>
      </div>
      {isLoading ? (
        <>
          {profiles?.length > 0 ? (
            <Paper style={{ width: '100%' }}>
              <TableContainer style={{ maxHeight: '400px' }}>
                <Table stickyHeader size='small' aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left'>Mã hồ sơ</TableCell>
                      <TableCell align='left'>Tên văn bản</TableCell>
                      <TableCell align='left'>Ngày gửi</TableCell>
                      <TableCell align='left'>Phân công</TableCell>
                      <TableCell align='left'>Duyệt</TableCell>
                      <TableCell align='left'>Trạng thái</TableCell>
                      <TableCell align='center'></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {profiles?.map((profile: ProfileInterface) => (
                      <TableRow key={profile._id}>
                        <TableCell align='left' component='th' scope='row'>
                          {profile.profileCode}
                        </TableCell>
                        <TableCell align='left'>{profile.nameDocument}</TableCell>
                        <TableCell align='left'>{profile.insertTime}</TableCell>
                        <TableCell align='left'>
                          {profile.assignment ? (
                            <Tag color='success'>Đã phân công</Tag>
                          ) : (
                            <Tag color='error'>Chưa phân công</Tag>
                          )}
                        </TableCell>
                        <TableCell align='left'>
                          {profile.browsed ? <Tag color='success'>Đã duyệt</Tag> : <Tag color='error'>Chưa duyệt</Tag>}
                        </TableCell>
                        <TableCell align='left'>
                          {profile.browsed === true ? (
                            profile.browsed === true && profile.status === 'YES' ? (
                              <Tag color='success'>Thông qua</Tag>
                            ) : (
                              <Tag color='error'>Không thông qua</Tag>
                            )
                          ) : null}
                        </TableCell>
                        <TableCell align='center'>
                          <Space align='center' size='small'>
                            <Link to={`/admin/profile/${profile.profileCode}`}>
                              <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                                <SearchOutlined />
                              </Tag>
                            </Link>
                            {/* <Tag
                              onClick={() => showModal(profile._id as string)}
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
                            </Modal> */}
                          </Space>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            <Empty
              image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
              imageStyle={{
                height: 100
              }}
              description={<span>Chưa có hồ sơ nào được duyệt!</span>}></Empty>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
export default ManagementRecordsBrowsed
