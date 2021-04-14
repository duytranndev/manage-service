import { DeleteOutlined, SearchOutlined, ToolOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select } from 'antd'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Space, Tag } from 'antd'
import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import './management.scss'
import DrawerComponent from '../../../molecules/drawer'
import FormAddDepartment from '../add-department'

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


// nó có sự thay đổi của của nhánh
// nội dung nhánh không đồng nhất
// code cũ và code mới bị xung đột conflic với nhau
// CONFLICT (content): Merge conflict in src/ui/organisms/department/list-department/index.tsx
// nên m phải vào cái Merge changes này để xem và chấp thuận cái code nào
// như bên dưới là t chấp thuận cái code hiện giờ của m => accept current change
export default function ManagementDepartment() {
  const [visible, setVisible] = useState<boolean>(false)
  const match = useRouteMatch()
  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <TableContainer component={Paper}>
      <Table size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Mã hồ sơ</TableCell>
            <TableCell align='right'>Lĩnh vực</TableCell>
            <TableCell align='right'>Tên văn bản</TableCell>
            <TableCell align='right'>Ngày gửi</TableCell>
            <TableCell align='right'>Trạng thái</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.code}
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>
                {row.check ? <Tag color='success'>Đã Duyệt</Tag> : <Tag color='error'>Chưa Duyệt</Tag>}
              </TableCell>
              <TableCell align='left'>
                <Space align='center' size='small'>
                  <Link to={`/admin/department/${row.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                      <SearchOutlined />
                    </Tag>
                  </Link>
                  <Link to={`/admin/department/${row.slug}`}>
                    <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='warning'>
                      <ToolOutlined />
                    </Tag>
                  </Link>
                  <Link to={`/admin/department/${row.slug}`}>
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
