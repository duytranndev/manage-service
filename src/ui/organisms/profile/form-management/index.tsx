import { TableBody, TableHead } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import { Link } from 'react-router-dom'
type ProfileReceivedProps = {
  data: []
}

export default function ProfileReceived({ data }: ProfileReceivedProps) {
  return (
    <>
      <TableContainer className='table-content' component={Paper}>
        <Table className='table' aria-label='simple table'>
          <TableHead className='table-header'>
            <TableRow className='table-row'>
              <TableCell className='table-col'>Mã Hồ Sơ</TableCell>
              <TableCell className='table-col' align='right'>
                Người Gửi
              </TableCell>
              <TableCell className='table-col' align='right'>
                Lĩnh Vực
              </TableCell>
              <TableCell className='table-col' align='right'>
                Tên Văn Bản
              </TableCell>
              <TableCell className='table-col' align='right'>
                Ngày Gửi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index: number) => (
              <TableRow key={index}>
                <TableCell component='th' scope='row'>
                  <Link to={row.slug}>{row.name}</Link>
                </TableCell>
                <TableCell align='right'>{row.code}</TableCell>
                <TableCell align='right'>{row.slug}</TableCell>
                <TableCell align='right'>{row.slug}</TableCell>
                <TableCell align='right'>{row.slug}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
