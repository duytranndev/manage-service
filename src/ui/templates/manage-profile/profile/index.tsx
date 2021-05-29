import { makeStyles } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import { Empty } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { AppState } from '../../../../store/types'
import ManagementProfile from '../../../organisms/profile/list-profile/index'

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rbga(0, 0, 0, 0.05)',
    borderRadius: '4px'
  },
  btn_add_action: {
    position: 'fixed',
    bottom: '9%',
    right: '3%',
    zIndex: 1
  },
  btn_update_action: {
    position: 'fixed',
    bottom: '20%',
    right: '3%',
    zIndex: 1
  }
})

export default function Profile() {
  const classes = useStyles()
  const dispatch = useDispatch()
  // const profiles = useSelector<AppState, ProfileInterface[]>((state) => state.profile.data)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [profiles, setProfiles] = useState<ProfileInterface[]>([])
  const user = useSelector<AppState, any>((state) => state.authentication.data)
  const history = useHistory()

  useEffect(() => {
    const params = {
      assignment: false,
      browsed: false,
      status: 'NO'
    }
    moduleApi
      .get(PROFILE_URL, params)
      .then((res) => {
        setProfiles(res.data.data)
        setIsPending(true)
      })
      .catch((err) => setIsPending(true))
  }, [])

  useEffect(() => {
    const role = user?.role

    if (role && role !== 'ADMIN') {
      history.push('/admin')
    }
  }, [])

  return (
    <>
      <div className='title' style={{ margin: '20px 0px' }}>
        <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
          <CreateIcon />
          Quản Lý hồ sơ
        </p>
      </div>
      {isPending ? (
        <>
          {profiles?.length > 0 ? (
            <>
              <div className='content'>
                <ManagementProfile data={profiles.filter((item) => item.assignment === false)} />
              </div>
            </>
          ) : (
            <>
              <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{
                  height: 100
                }}
                className={classes.root}
                description={<span>Danh sách hồ sơ trống!</span>}>
                {/* <Button type='primary' onClick={handleShowDrawer}>
                  Thêm nhân viên
                </Button> */}
              </Empty>
              {/* <DrawerComponent title='Thêm nhân viên' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddStaff />
              </DrawerComponent> */}
            </>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
