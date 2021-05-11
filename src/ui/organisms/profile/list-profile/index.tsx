import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Tag } from 'antd'
import React from 'react'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
type ProfileReceivedProps = {
  data?: ProfileInterface[]
}

export default function ManagementProfile({ data }: ProfileReceivedProps) {
  return (
    <>
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
            {data?.map((row: ProfileInterface) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {row.code}
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
      {/* <Table dataSource={data} pagination={{ position: ['bottomCenter'] }}>
        <Column title='Mã hồ sơ' dataIndex='code' key='code' />
        <Column title='Lĩnh vực' dataIndex='name' key='name' />
        <Column title='Tên văn bản' dataIndex='name' key='as' />
        <Column title='Ngày gửi' dataIndex='name' key='awd' />
        <Column
          title='Trạng thái'
          dataIndex='check'
          key='check'
          render={(text, record) => (
            <Space size='middle'>
              {text ? (
                <Tag key={text} color='success'>
                  Đã Duyệt
                </Tag>
              ) : (
                <Tag color='error'>Chưa Duyệt</Tag>
              )}
            </Space>
          )}
        />
        <Column
          title='Action'
          key='action'
          align='center'
          render={(text, record) => (
            <Space align='center' size='small'>
              <Link to={`${path}/${text.slug}`}>
                <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                  <SearchOutlined />
                </Tag>
              </Link>
              <Link to={`${path}/${text.slug}`}>
                <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='warning'>
                  <ToolOutlined />
                </Tag>
              </Link>
              <Link to={`${path}/${text.slug}`}>
                <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='error'>
                  <DeleteOutlined />
                </Tag>
              </Link>
            </Space>
          )}
        />
      </Table> */}
    </>
  )
}
