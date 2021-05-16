import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'

export default function ManagementRecordsReceived() {
  const [profiles, setProfiles] = useState()
  useEffect(() => {
    moduleApi.get(PROFILE_URL).then((res) => setProfiles(res.data.data))
  }, [])
  const match = useRouteMatch()
  if (match.path === '/admin/department') {
    match.path = '/admin'
  }

  return (
    <>
      {profiles && (
        <TableContainer component={Paper}>
          <Table size='medium' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Mã hồ sơ</TableCell>
                <TableCell align='center'>Lĩnh vực</TableCell>
                <TableCell align='center'>Tên văn bản</TableCell>
                <TableCell align='center'>Tên người gửi</TableCell>
                <TableCell align='center'>Ngày gửi</TableCell>
                <TableCell align='center'>Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profiles?.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component='th' scope='row'>
                    <Link to={`/admin/profile/${row.slug}`}>{row.profileCode}</Link>
                  </TableCell>
                  <TableCell align='right'>{row.fieldName}</TableCell>
                  <TableCell align='right'>{row.nameDocument}</TableCell>
                  <TableCell align='right'>{row.name}</TableCell>
                  <TableCell align='right'>{row.insertTime}</TableCell>
                  <TableCell align='right'>
                    {row.check ? <Tag color='success'>Đã Duyệt</Tag> : <Tag color='error'>Chưa Duyệt</Tag>}
                  </TableCell>
                  {/* <TableCell align='center'>
                  <Space align='center' size='small'>
                    <Link to={`${match.path}/department/${row.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                        <SearchOutlined />
                      </Tag>
                    </Link>

                    <Link to={`${match.path}/department/${row.slug}`}>
                      <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='error'>
                        <DeleteOutlined />
                      </Tag>
                    </Link>
                  </Space>
                </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
