import { SearchOutlined } from '@ant-design/icons'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Space, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'

type MyProfileReceivedProps = {
  data?: AssignmentInterface[]
}

const MyProfileReceived = ({ data }: MyProfileReceivedProps): JSX.Element => {
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)

  console.log('data :>> ', data)

  return (
    <TableContainer component={Paper} style={{ maxHeight: '400px' }}>
      {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Mã hồ sơ</TableCell>
            <TableCell align='center'>Tên người duyệt</TableCell>
            <TableCell align='center'>Ngày bắt đầu</TableCell>
            <TableCell align='center'>Ngày kết thúc</TableCell>
            <TableCell align='center'>Trạng thái</TableCell>
            {/* <TableCell align='left'>Trạng thái</TableCell> */}
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: AssignmentInterface, index: number) => (
            <TableRow key={row._id}>
              <TableCell align='center' component='th' scope='row'>
                {row?.profileCode}
              </TableCell>
              <TableCell align='center'>{(staffs.find((item) => item._id === row.staffId) as any)?.name}</TableCell>
              <TableCell align='center'>{row.timeStart}</TableCell>
              <TableCell align='center'>{row.timeEnd}</TableCell>
              <TableCell align='center'>
                {row.status ? <Tag color='success'>Đã duyệt</Tag> : <Tag color='error'>Chưa duyệt</Tag>}
              </TableCell>
              <TableCell align='center'>
                <Space align='center' size='small'>
                  <Link to={`/admin/assignment/${row.profileCode}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                      <SearchOutlined />
                    </Tag>
                  </Link>
                </Space>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default MyProfileReceived
