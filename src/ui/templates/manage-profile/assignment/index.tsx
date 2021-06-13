import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import { Empty } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ASSIGNMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import CreateAssignment from '../../../organisms/assignment/create-assignment'
import ManagementAssignment from '../../../organisms/assignment/list-assignment'

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
    bottom: '15%',
    right: '1%',
    zIndex: 1
  }
})

const Assignment = (): JSX.Element => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [assignments, setAssignments] = useState<AssignmentInterface>()
  const [visible, setVisible] = useState<boolean>(false)
  const user = useSelector<AppState, any>((state) => state.authentication.data)
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    moduleApi
      .get(ASSIGNMENT_URL)
      .then((res) => setAssignments(res.data.data))
      .then((data) => setIsFetching(true))
      .catch((error) => setIsFetching(true))
  }, [])

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }

  useEffect(() => {
    const role = user?.role

    if (role && role !== 'ADMIN') {
      history.push('/admin')
    }
  }, [])

  return (
    <>
      <>
        <div className='title' style={{ margin: '20px 0px' }}>
          <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
            <CreateIcon />
            Quản lý phân công hồ sơ
          </p>
        </div>
        {isFetching ? (
          <>
            {(assignments?.length as any) > 0 ? (
              <>
                <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                  <AddIcon />
                </Fab>
                <div className='total' style={{ margin: '10px' }}>
                  Tổng số lượng phân công:
                  <span style={{ color: 'black', fontWeight: 600 }}>{assignments?.length}</span>
                </div>
                <div className='content'>
                  <ManagementAssignment data={assignments} />
                </div>
                <DrawerComponent title='Tạo mới phân công' visible={visible} onClose={handleCloseDrawer} width={1170}>
                  <CreateAssignment />
                </DrawerComponent>
              </>
            ) : (
              <>
                <Empty
                  image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                  imageStyle={{
                    height: 100
                  }}
                  className={classes.root}
                  description={<span>Danh sách phân công trống!</span>}></Empty>
              </>
            )}
          </>
        ) : (
          <div className='classic-5'></div>
        )}
      </>
    </>
  )
}
export default Assignment
