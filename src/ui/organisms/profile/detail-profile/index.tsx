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
      toast.error('Kh??ng ????? ph??n quy???n!')
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
      toast.error('B???n ????nh gi?? h??? s??. Xin vui v??ng ch???n 1 trong 2 l???a ch???n d?????i ????y!!')
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
      success: 'Duy???t h??? s?? th??nh c??ng',
      error: 'Duy???t h??? s?? th???t b???i'
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
            title='Chi ti???t h??? s??'
            size='default'
            extra={
              <>
                {profile?.assignment ? null : (
                  <Button variant='contained' color='primary' onClick={handleShowDrawer} style={{ marginRight: 5 }}>
                    Ph??n c??ng
                  </Button>
                )}
                {profile?.status === 'YES' ? null : (
                  <Button variant='contained' color='secondary' onClick={handleClickOpen}>
                    Duy???t h??? s??
                  </Button>
                )}
                <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                  <DialogTitle id='form-dialog-title'>Duy???t h??? s??</DialogTitle>

                  <DialogContent>
                    {isLate ? (
                      <TextField
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        fullWidth
                        id='outlined-basic'
                        label='L?? do tr??? h???n'
                        required
                        variant='outlined'
                      />
                    ) : null}

                    <Radio.Group onChange={onChange} value={value} style={{ marginTop: '10px' }}>
                      <Radio value={'YES'}>Th??ng qua</Radio>
                      <Radio value={'NO'}>Kh??ng th??ng qua</Radio>
                    </Radio.Group>
                  </DialogContent>
                  <DialogActions style={{ marginRight: '20px' }}>
                    <Button onClick={handleClose} color='primary'>
                      Hu???
                    </Button>
                    <Button onClick={handleOnSubscribe} color='primary'>
                      X??c nh???n
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            }>
            <Descriptions.Item label='T??n ng?????i g???i'>{profile?.name}</Descriptions.Item>
            <Descriptions.Item label='L??nh v???c'>{profile?.fieldName}</Descriptions.Item>
            <Descriptions.Item label='D???ch v???'>{profile?.nameDocument}</Descriptions.Item>
            <Descriptions.Item label='M?? h??? s??'>{profile?.profileCode}</Descriptions.Item>
            <Descriptions.Item label='S??? ??i???n tho???i'>{profile?.phone}</Descriptions.Item>
            <Descriptions.Item label='Tr???ng th??i'>{profile?.browsed ? '???? duy???t' : 'Ch??a duy???t'}</Descriptions.Item>
            <Descriptions.Item label='?????a ch???'>{profile?.address}</Descriptions.Item>
            {/* <Descriptions.Item label='T??i li???u g???m c??'>{profile?.profiles.map((item) => item.name)}</Descriptions.Item> */}
          </Descriptions>
          <header style={{ margin: '10px 0px 10px', fontSize: '110%', fontWeight: 600 }}>Gi???y t??? ??i k??m:</header>
          <Tabs defaultActiveKey='1' type='card' size='small'>
            {profile?.profiles?.registrationBook && (
              <TabPane tab='S??? h??? kh???u' key='6'>
                {/* S??? h??? kh???u */}
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    S??? s??? h??? kh???u:
                  </Grid>
                  <Grid item xs={9} style={{ marginLeft: '-60px' }}>
                    {profile?.profiles?.registrationBook?.numberRegistrationBook}
                  </Grid>
                  <Grid item xs={3}>
                    H??? v?? t??n ch??? h???:
                  </Grid>
                  <Grid item xs={9} style={{ marginLeft: '-60px' }}>
                    {profile?.profiles?.registrationBook?.nameOwn}
                  </Grid>
                  <Grid item xs={3}>
                    H??? s?? h??? kh???u s???:
                  </Grid>
                  <Grid item xs={9} style={{ marginLeft: '-60px' }}>
                    {profile?.profiles?.registrationBook?.numberProfileRegistrationBook}
                  </Grid>
                </Grid>
                {/* <RegistrationBook data={profile?.profiles?.registrationBook} /> */}
              </TabPane>
            )}
            {profile?.profiles?.changementPaper && (
              <TabPane tab='Phi???u b??o thay ?????i h??? kh???u, nh??n kh???u' key='1'>
                <ChangementPaper data={profile?.profiles?.changementPaper} />
              </TabPane>
            )}
            {profile?.profiles?.demographicDeclaration && (
              <TabPane tab='B???n khai nh??n kh???u' key='2'>
                <DemographicDeclaration data={profile?.profiles?.demographicDeclaration} />
              </TabPane>
            )}
            {profile?.profiles?.transferPaper && (
              <TabPane tab='Gi???y chuy???n h??? kh???u' key='3'>
                <TransferPaper data={profile?.profiles?.transferPaper} />
              </TabPane>
            )}
            {profile?.profiles?.registrationDeclaredPaperBirth && (
              <TabPane tab='T??? khai ????ng k?? khai sinh' key='4'>
                <RegistrationDeclaredPaperBirth data={profile?.profiles?.registrationDeclaredPaperBirth} />
              </TabPane>
            )}
            {profile?.profiles?.birthCertificate && (
              <TabPane tab='Gi???y ch???ng sinh' key='5'>
                <BirthCertificate data={profile?.profiles?.birthCertificate} />
              </TabPane>
            )}
            {profile?.profiles?.marriageRegistrationStatement && (
              <TabPane tab='Gi???y ????ng k?? k???t h??n' key='6'>
                <Grid container spacing={0} className='table-kh'>
                  <table>
                    <tr>
                      <th>Th??ng tin</th>
                      <th>B??n n???</th>
                      <th>B??n nam</th>
                    </tr>
                    <tr>
                      <td>H???, ch??? ?????m, t??n</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nameWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nameHusband}</td>
                    </tr>
                    <tr>
                      <td>Ng??y, th??ng, n??m sinh</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.dayOfBirthWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.dayOfBirthHusband}</td>
                    </tr>
                    <tr>
                      <td>D??n t???c </td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationHusband}</td>
                    </tr>
                    <tr>
                      <td>Qu???c t???ch</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationalityWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.nationalityHusband}</td>
                    </tr>
                    <tr>
                      <td>N??i c?? tr?? (4)</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.addressWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.addressHusband}</td>
                    </tr>
                    <tr>
                      <td>Gi???y t??? t??y th??n (5)</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.identityDocumentsWife}</td>
                      <td>{profile?.profiles?.marriageRegistrationStatement?.identityDocumentsHusband}</td>
                    </tr>
                    <tr>
                      <td>K???t h??n l???n th??? m???y</td>
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
      <DrawerComponent title='Ph??n c??ng' visible={visible} onClose={handleCloseDrawer} width={1170}>
        <Assignment data={profile} />
      </DrawerComponent>
    </>
  )
}
export default ProfileDetail
