import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Link } from 'react-router-dom'

const departmentList = [
  {
    name: 'Phòng kế hoạch',
    code: 123,
    member: 10,
    slug: 'phong-ke-hoach'
  },
  {
    name: 'Phòng nhân sự',
    code: 124,
    member: 10,
    slug: 'phong-nhan-su'
  },
  {
    name: 'Phòng công nghệ',
    code: 125,
    member: 10,
    slug: 'phong-cong-nghe'
  },
  {
    name: 'Phòng tài chính',
    code: 126,
    member: 10,
    slug: 'phong-tai-chinh'
  }
]

export default function ManagementDepartment() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Tên phòng ban</TableCell>
            <TableCell align='right'>Mã phòng ban</TableCell>
            <TableCell align='right'>Thành viên</TableCell>
            <TableCell align='right'>Liên kết tĩnh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departmentList.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                <Link to={row.slug}>{row.name}</Link>
              </TableCell>
              <TableCell align='right'>{row.code}</TableCell>
              <TableCell align='right'>{row.member}</TableCell>
              <TableCell align='right'>{row.slug}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
