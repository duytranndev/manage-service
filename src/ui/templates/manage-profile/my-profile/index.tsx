import { makeStyles } from '@material-ui/core'
import { Empty } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ASSIGNMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'
import MyProfileReceived from '../../../organisms/my-profile/profile-received'
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

const MyProfile = (): JSX.Element => {
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [assignments, setAssignments] = useState<AssignmentInterface[]>()
  const classes = useStyles()

  useEffect(() => {
    const params = {
      staffId: user?._id,
      status: false
    }
    moduleApi.get(ASSIGNMENT_URL, params).then((res) => {
      setIsFetching(true)
      setAssignments(res.data.data)
    })
  }, [user])

  return (
    <>
      {isFetching ? (
        <>
          {(assignments?.length as any) > 0 ? (
            <>
              <div className='content'>
                <MyProfileReceived data={assignments} />
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
                description={<span>Danh sách hồ sơ trống!</span>}></Empty>
            </>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
export default MyProfile
