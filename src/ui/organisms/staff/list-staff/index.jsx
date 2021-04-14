import { DeleteOutlined, SearchOutlined, ToolOutlined } from '@ant-design/icons'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Space, Tag } from 'antd'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'


const data = [
  {
    name: 'dan su',
    code: 123,
    slug: 'awdawdawd',
    check: true
  },
  {
    name: 'dan su',
    code: 123,
    slug: 'awdawdawd'
  },
  {
    name: 'dan su',
    code: 123,
    slug: 'awdawdawd'
  },
  {
    name: 'dan su',
    code: 123,
    slug: 'awdawdawd'
  }
]

export default function ManagementStaff() {
  const match = useRouteMatch()
  if (match.path === '/admin/department') {
    match.path = '/admin'
  }
  return (
    <TableContainer component={Paper}>
      <Table size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Họ tên</TableCell>
            <TableCell align='right'>Phòng ban</TableCell>
            <TableCell align='right'>Chức vụ</TableCell>
            <TableCell align='right'>Số điện thoại</TableCell>
            <TableCell align='right'>Quyền hạn</TableCell>
            <TableCell align='right'>Ngày sinh</TableCell>
            <TableCell align='right'>Địa chỉ</TableCell>
            <TableCell align='right'>Quê quán</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>tên đăng nhập</TableCell>
            <TableCell align='right'>mật khẩu</TableCell>
            <TableCell align='right'>Hình ảnh</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.code}
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='left'>
                <Space align='center' size='small'>
                  <Link to={`${match.path}/department/${row.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                      <SearchOutlined />
                    </Tag>
                  </Link>
                  <Link to={`${match.path}/department/${row.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='warning'>
                      <ToolOutlined />
                    </Tag>
                  </Link>
                  <Link to={`${match.path}/department/${row.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='error'>
                      <DeleteOutlined />
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
