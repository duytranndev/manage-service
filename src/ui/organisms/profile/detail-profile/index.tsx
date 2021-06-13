import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core'
import { Descriptions, Radio, Tabs } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ASSIGNMENT_URL, PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import Assignment from '../assignment'
import BirthCertificate from '../tabs/BirthCertificate'
import ChangementPaper from '../tabs/ChangementPaper'
import DemographicDeclaration from '../tabs/DemographicDeclaration'
import RegistrationDeclaredPaperBirth from '../tabs/RegistrationDeclaredPaperBirth'
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
  const [assignment, setAssignment] = useState<AssignmentInterface>()
  const [open, setOpen] = useState(false)
  const [isLate, setIsLate] = useState<boolean>(false)
  const timeValue = new Date().toLocaleDateString()
  const [value, setValue] = useState()
  const [reason, setReason] = useState<string>('')

  useEffect(() => {
    moduleApi
      .get(PROFILE_URL)
      .then((res) => setListProfile(res.data.data))
      .then((data) => setIsFetching(true))
  }, [])

  useEffect(() => {
    return setProfile(listProfile?.find((item) => item.profileCode === slug))
  }, [slug, listProfile])

  useEffect(() => {
    const code = profile?.profileCode
    if (code) {
      const params = {
        profileCode: code
      }
      moduleApi.get(ASSIGNMENT_URL, params).then((res) => setAssignment(res.data.data[0]))
    }
  }, [profile])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const timeEnd = assignment?.timeEnd
      .split('-')
      .map((item) => Number(item))
      .reduce((x, y) => x + y) as any

    const atTime = timeValue
      .split('/')
      .map((item) => Number(item))
      .reduce((x, y) => x + y)

    if (atTime > timeEnd) {
      setIsLate(true)
    }
  }, [profile, assignment])

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

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleOnSubscribe = async () => {
    if (!value) {
      toast.error('Bạn đánh giá hồ sơ. Xin vui vòng chọn 1 trong 2 lựa chọn dưới đây!!')
      return null
    }
    const data = {
      ...assignment,
      status: true,
      reason: reason
    }

    const newProfile = {
      ...profile,
      browsed: true,
      status: value
    }
    moduleApi.update(ASSIGNMENT_URL, data)
    const updateProfile = moduleApi.update(PROFILE_URL, newProfile)
    await toast.promise(updateProfile, {
      loading: 'Loading',
      success: 'Duyệt hồ sơ thành công',
      error: 'Duyệt hồ sơ thất bại'
    })
    const status = await updateProfile.then((res) => res.data.message)
    if (status === 'success') {
      setOpen(false)
    }
  }

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
                  <Button variant='contained' color='primary' onClick={handleShowDrawer} style={{ marginRight: 5 }}>
                    Phân công
                  </Button>
                )}
                {profile?.status === 'YES' ? null : (
                  <Button variant='contained' color='secondary' onClick={handleClickOpen}>
                    Duyệt hồ sơ
                  </Button>
                )}
                <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                  <DialogTitle id='form-dialog-title'>Duyệt hồ sơ</DialogTitle>

                  <DialogContent>
                    {isLate ? (
                      <TextField
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        fullWidth
                        id='outlined-basic'
                        label='Lý do trễ hẹn'
                        required
                        variant='outlined'
                      />
                    ) : null}

                    <Radio.Group onChange={onChange} value={value} style={{ marginTop: '10px' }}>
                      <Radio value={'YES'}>Thông qua</Radio>
                      <Radio value={'NO'}>Không thông qua</Radio>
                    </Radio.Group>
                  </DialogContent>
                  <DialogActions style={{ marginRight: '20px' }}>
                    <Button onClick={handleClose} color='primary'>
                      Huỷ
                    </Button>
                    <Button onClick={handleOnSubscribe} color='primary'>
                      Xác nhận
                    </Button>
                  </DialogActions>
                </Dialog>
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
            {profile?.profiles?.registrationBook && (
              <TabPane tab='Sổ hộ khẩu' key='6'>
                {/* Sổ hộ khẩu */}
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    Số sổ hộ khẩu:
                  </Grid>
                  <Grid item xs={9} style={{ marginLeft: '-60px' }}>
                    {profile?.profiles?.registrationBook?.numberRegistrationBook}
                  </Grid>
                  <Grid item xs={3}>
                    Họ và tên chủ hộ:
                  </Grid>
                  <Grid item xs={9} style={{ marginLeft: '-60px' }}>
                    {profile?.profiles?.registrationBook?.nameOwn}
                  </Grid>
                  <Grid item xs={3}>
                    Hồ sơ hộ khẩu số:
                  </Grid>
                  <Grid item xs={9} style={{ marginLeft: '-60px' }}>
                    {profile?.profiles?.registrationBook?.numberProfileRegistrationBook}
                  </Grid>
                </Grid>
                {/* <RegistrationBook data={profile?.profiles?.registrationBook} /> */}
              </TabPane>
            )}
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
            {profile?.profiles?.registrationDeclaredPaperBirth && (
              <TabPane tab='Tờ khai đăng ký khai sinh' key='4'>
                <RegistrationDeclaredPaperBirth data={profile?.profiles?.registrationDeclaredPaperBirth} />
              </TabPane>
            )}
            {profile?.profiles?.birthCertificate && (
              <TabPane tab='Giấy chứng sinh' key='5'>
                <BirthCertificate data={profile?.profiles?.birthCertificate} />
              </TabPane>
            )}
            {profile?.profiles?.marriageRegistrationStatement && (
              <TabPane tab='Giấy đăng ký kết hôn' key='6'>
                <Grid container spacing={0} className='table-kh'>
                  <table>
                    <tr>
                      <th>Thông tin</th>
                      <th>Bên nữ</th>
                      <th>Bên nam</th>
                    </tr>
                    <tr>
                      <td>Họ, chữ đệm, tên</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nameWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nameHusband}</td>
                    </tr>
                    <tr>
                      <td>Ngày, tháng, năm sinh</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.dayOfBirthWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.dayOfBirthHusband}</td>
                    </tr>
                    <tr>
                      <td>Dân tộc </td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationHusband}</td>
                    </tr>
                    <tr>
                      <td>Quốc tịch</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationalityWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationalityHusband}</td>
                    </tr>
                    <tr>
                      <td>Nơi cư trú (4)</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.addressWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.addressHusband}</td>
                    </tr>
                    <tr>
                      <td>Giấy tờ tùy thân (5)</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.identityDocumentsWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.identityDocumentsHusband}</td>
                    </tr>
                    <tr>
                      <td>Kết hôn lần thứ mấy</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.timesWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.timesHusband}</td>
                    </tr>
                  </table>
                </Grid>
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
