import { StarTwoTone } from '@ant-design/icons'
import { TableContainer } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Tag } from 'antd'
import { default as React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { ProfileInterface } from '../../share/interface/profile.interface'
import { fetchProfiles } from '../../store/recuders/profile.reducer'
import { AppState } from '../../store/types'
import './admin.scss'
export default function AdminPage() {
  const match = useRouteMatch()
  // const [profiles, setProfiles] = useState<ProfileInterface[]>()
  const dispatch = useDispatch()
  useEffect(() => {
    const loadProfiles = async () => {
      await dispatch(fetchProfiles())
    }
    loadProfiles()
  }, [])
  const profiles = useSelector<AppState, ProfileInterface[]>((state) => state.profile.data)
  // useEffect(() => {
  //   moduleApi.get(PROFILE_URL).then((res) => setProfiles(res.data.data))
  // }, [])

  // const data: any = [
  //   {
  //     name: 'dan su 1',
  //     code: 12131123,
  //     slug: 'awdawdaawd',
  //     check: true
  //   },
  //   {
  //     name: 'dan su 2',
  //     code: 1223123,
  //     slug: 'awdawdsawd',
  //     check: true
  //   },
  //   {
  //     name: 'dan su 3',
  //     code: 1231323,
  //     slug: 'awdadwdawd',
  //     check: true
  //   },
  //   {
  //     name: 'dan su 4',
  //     code: 1231232,
  //     slug: 'awdawdgawd',
  //     check: false
  //   },
  //   {
  //     name: 'dan su 5',
  //     code: 1231231,
  //     slug: 'awdawdddawd',
  //     check: false
  //   }
  // ]

  // const check = (data: any) => {
  //   const number = data.filter((item: any) => item.check === true)
  //   return (number.length / data.length) * 100
  // }

  // const value = check(data)

  return (
    <>
      <div className='row row-toolbar'>
        <div className='col-lg-12 toolbar'>
          <Link to={`${match.path}/department`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Phòng Ban</p>
          </Link>
          <Link to={`${match.path}/staff`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Nhân Viên</p>
          </Link>
          <Link to={`${match.path}/field`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Lĩnh Vực</p>
          </Link>
          <Link to={`${match.path}`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Dân Sự</p>
          </Link>
          <Link to={`${match.path}`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Hồ Sơ</p>
          </Link>
          <Link to={`${match.path}`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Hồ Sơ Nhận</p>
          </Link>
          <Link to={`${match.path}`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Hồ Sơ Duyệt</p>
          </Link>
          <Link to={`${match.path}/news`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Tin Tức</p>
          </Link>
          <Link to={`${match.path}/sender`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Người Gửi</p>
          </Link>
          <Link to={`${match.path}`} className='box-icon'>
            <StarTwoTone className='icon' />
            <p className='title'>Thống Kê</p>
          </Link>
        </div>
      </div>
      <div className='row row-document'>
        <div className='col-lg-12 document-received'>
          <h4 style={{ color: 'red' }}>Hồ sơ đến</h4>
          <div className='row title' style={{ display: 'flex' }}>
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
                    {profiles?.map((row: ProfileInterface) => (
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
            {/* <div className='col-lg-3' style={{ textAlign: 'center' }}>
              <div className='sum' style={{ textAlign: 'center' }}>
                <h6>Tổng hồ sơ đã duyệt</h6>
              </div>
              <ProgressChart value={value} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
