import { makeStyles } from '@material-ui/core'
import { Empty } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { ProfileInterface } from '../../../share/interface/profile.interface'
import { AppState } from '../../../store/types'
import ManagementProfile from '../../organisms/profile/list-profile/index'
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
  const profiles = useSelector<AppState, ProfileInterface[]>((state) => state.profile.data)

  return (
    <>
      {profiles.length > 0 ? (
        <>
          <div className='content'>
            <ManagementProfile data={profiles.filter((profile) => !profile.browse)} />
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

      {/* <ManagementStaff data={staffs} /> */}
    </>
  )
}
