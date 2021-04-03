import { ProjectOutlined } from '@ant-design/icons'
import { TableHead } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import { Link } from 'react-router-dom'
import ProfileReceived from '../../ui/organisms/profile/form-management'
import './index.scss'
export default function AdminPage() {
  const data: any = [
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
  return (
    <>
      <div className='row row-toolbar'>
        <div className='col-lg-12 toolbar'>
          <Link to='' className='box-icon'>
            <ProjectOutlined className='icon' />
            <p>hehehe</p>
          </Link>
          <Link to='' className='box-icon'>
            <ProjectOutlined className='icon' />
            <p>hehehe</p>
          </Link>
          <Link to='' className='box-icon'>
            <ProjectOutlined className='icon' />
            <p>hehehe</p>
          </Link>
          <Link to='' className='box-icon'>
            <ProjectOutlined className='icon' />
            <p>hehehe</p>
          </Link>
          <Link to='' className='box-icon'>
            <ProjectOutlined className='icon' />
            <p>hehehe</p>
          </Link>
          <Link to='' className='box-icon'>
            <ProjectOutlined className='icon' />
            <p>hehehe</p>
          </Link>
        </div>
      </div>
      <div className='row row-document'>
        <div className='col-lg-12 document-received'>
          <div className='row title'>
            <h1 style={{ color: 'white' }}>Hồ sơ đến</h1>
          </div>
          <ProfileReceived data={data} />
        </div>
      </div>
      <div className='row row-message'>
        <div className='col-lg-12 message-received'>
          <div className='row title'>
            <h1 style={{ color: 'white' }}>Tin Nhắn Đến</h1>
          </div>
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
                {data.map((row: any, index: any) => (
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
        </div>
      </div>
    </>
  )
}
