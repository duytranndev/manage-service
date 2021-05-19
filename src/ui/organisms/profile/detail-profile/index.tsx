import { Button, makeStyles } from '@material-ui/core'
import { Descriptions, Tabs } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import Assignment from '../assignment'
import ChangementPaper from '../tabs/ChangementPaper'
import DemographicDeclaration from '../tabs/DemographicDeclaration'
import TransferPaper from '../tabs/TransferPaper'
import './index.scss'
const { TabPane } = Tabs

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

const ProfileDetail = (): JSX.Element => {
  const [listProfile, setListProfile] = useState<ProfileInterface[]>()
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [profile, setProfile] = useState<ProfileInterface>()
  const { slug } = useParams<any>()
  const [visible, setVisible] = useState(false)
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)

  const handleShowDrawer = () => {
    if (user?.role !== 'ADMIN') {
      toast.error('Không đủ phân quyền!')
      // alert('chu tuoi gi')
      return null
    }
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }

  useEffect(() => {
    moduleApi
      .get(PROFILE_URL)
      .then((res) => setListProfile(res.data.data))
      .then((data) => setIsFetching(true))
  }, [])

  useEffect(() => {
    return setProfile(listProfile?.find((item) => item.profileCode === slug))
  }, [slug, listProfile])

  // useEffect(() => {
  //   setIsFetching(true)
  // }, [profile])

  const profiles = profile?.profiles

  return (
    <>
      {isFetching ? (
        <div className='detail'>
          <Descriptions
            labelStyle={{ fontSize: '110%' }}
            bordered
            title='Chi tiết hồ sơ'
            size='default'
            extra={
              <>
                {profile?.assignment ? null : (
                  <Button variant='contained' color='primary' onClick={handleShowDrawer}>
                    Phân công
                  </Button>
                )}
                <Button variant='contained' color='secondary'>
                  Duyệt hồ sơ
                </Button>
              </>
            }>
            <Descriptions.Item label='Tên người gửi'>{profile?.name}</Descriptions.Item>
            <Descriptions.Item label='Lĩnh vực'>{profile?.fieldName}</Descriptions.Item>
            <Descriptions.Item label='Dịch vụ'>{profile?.nameDocument}</Descriptions.Item>
            <Descriptions.Item label='Mã hồ sơ'>{profile?.profileCode}</Descriptions.Item>
            <Descriptions.Item label='Số điện thoại'>{profile?.phone}</Descriptions.Item>
            <Descriptions.Item label='Trạng thái'>{profile?.browsed ? 'Đã duyệt' : 'Chưa duyệt'}</Descriptions.Item>
            <Descriptions.Item label='Địa chỉ'>{profile?.address}</Descriptions.Item>
            {/* <Descriptions.Item label='Tài liệu gồm có'>{profile?.profiles.map((item) => item.name)}</Descriptions.Item> */}
          </Descriptions>
          <header style={{ margin: '10px 0px 10px', fontSize: '110%', fontWeight: 600 }}>Giấy tờ đi kèm:</header>
          <Tabs defaultActiveKey='1' type='card' size='small'>
            {profile?.profiles?.changementPaper && (
              <TabPane tab='Phiếu báo thay đổi hộ khẩu, nhân khẩu' key='1'>
                <ChangementPaper data={profile?.profiles?.changementPaper} />
              </TabPane>
            )}
            {profile?.profiles?.demographicDeclaration && (
              <TabPane tab='Bản khai nhân khẩu' key='2'>
                <DemographicDeclaration data={profile?.profiles?.demographicDeclaration} />
              </TabPane>
            )}
            {profile?.profiles?.transferPaper && (
              <TabPane tab='Giấy chuyển hộ khẩu' key='3'>
                <TransferPaper data={profile?.profiles?.transferPaper} />
              </TabPane>
            )}
          </Tabs>
        </div>
      ) : (
        <div className='classic-2'></div>
      )}
      {/* <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      
      */}
      <DrawerComponent title='Phân công' visible={visible} onClose={handleCloseDrawer} width={1170}>
        <Assignment data={profile} />
      </DrawerComponent>
    </>
  )
}
export default ProfileDetail
