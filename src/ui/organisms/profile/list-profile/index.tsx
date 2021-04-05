import { TableBody, TableHead } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import { Tag } from 'antd'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
type ProfileReceivedProps = {
  data: []
}

export default function ProfileReceived({ data }: ProfileReceivedProps) {
  const match = useRouteMatch()

  return (
    <>
      <TableContainer className='table-content' component={Paper}>
        <Table className='table' aria-label='simple table'>
          <TableHead className='table-header'>
            <TableRow className='table-row'>
              <TableCell style={{ textAlign: 'center' }} className='table-col'>
                Mã hồ sơ
              </TableCell>

              <TableCell style={{ textAlign: 'center' }} className='table-col' align='right'>
                Lĩnh vực
              </TableCell>
              <TableCell style={{ textAlign: 'center' }} className='table-col' align='right'>
                Tên văn bản
              </TableCell>
              <TableCell style={{ textAlign: 'center' }} className='table-col' align='right'>
                Ngày gửi
              </TableCell>
              <TableCell style={{ textAlign: 'center' }} className='table-col' align='right'>
                Người duyệt
              </TableCell>
              <TableCell style={{ textAlign: 'center' }} className='table-col' align='right'>
                Trạng thái
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index: number) => (
              <TableRow key={index} style={{ textAlign: 'center' }}>
                <TableCell style={{ textAlign: 'center' }} component='th' scope='row'>
                  <Link to={`${match.path}/${row.slug}`}>{row.code}</Link>
                </TableCell>
                <TableCell style={{ textAlign: 'center' }} align='right'>
                  {row.name}
                </TableCell>

                <TableCell style={{ textAlign: 'center' }} align='right'>
                  {row.slug}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }} align='right'>
                  {row.slug}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }} align='right'>
                  {row.slug}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }} align='right'>
                  {row.check ? <Tag color='success'>Đã Duyệt</Tag> : <Tag color='error'>Chưa Duyệt</Tag>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
