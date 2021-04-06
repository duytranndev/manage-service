import { DeleteTwoTone, ToolTwoTone } from '@ant-design/icons'
import { TableHead } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import 'antd/dist/antd.css'
import React from 'react'
import './management.scss'

const data = [
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
  },
  {
    name: 'dan su',
    code: 123,
    slug: 'awdawdawd'
  }
]
export default function ManagementDepartment() {
  return (
    <TableContainer className='table-content' component={Paper}>
      <Table className='table' aria-label='simple table'>
        <TableHead className='table-header'>
          <TableRow className='table-row'>
            <TableCell className='table-col'>Name</TableCell>
            <TableCell className='table-col' align='right'>
              Code
            </TableCell>
            <TableCell className='table-col' align='right'>
              Duong dan
            </TableCell>
            <TableCell className='table-col' align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.code}</TableCell>
              <TableCell align='right'>{row.slug}</TableCell>
              <TableCell align='right'>
                <DeleteTwoTone />
                <ToolTwoTone />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
