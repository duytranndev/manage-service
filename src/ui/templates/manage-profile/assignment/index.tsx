import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Empty } from 'antd'
import { useEffect, useState } from 'react'
import { ASSIGNMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
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
    bottom: '9%',
    right: '3%',
    zIndex: 1
  }
})

const Assignment = (): JSX.Element => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [assignments, setAssignments] = useState<AssignmentInterface>()
  const [visible, setVisible] = useState<boolean>(false)
  const classes = useStyles()

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

  return (
    <>
      <>
        {isFetching ? (
          <>
            {(assignments?.length as any) > 0 ? (
              <>
                <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                  <AddIcon />
                </Fab>
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
          <div className='classic-2'></div>
        )}
      </>
    </>
  )
}
export default Assignment
