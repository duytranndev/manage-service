import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'

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
    <TableContainer component={Paper}>
      <Table className='table' aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Code</TableCell>
            <TableCell align='right'>Duong dan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.code}</TableCell>
              <TableCell align='right'>{row.slug}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
