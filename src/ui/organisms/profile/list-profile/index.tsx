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
type ProfileReceivedProps = {
  data: []
}

export default function ProfileReceived({ data }: ProfileReceivedProps) {
  const match = useRouteMatch()
  return (
    <>
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
