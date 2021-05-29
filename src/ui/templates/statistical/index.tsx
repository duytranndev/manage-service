import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import { DatePicker, Empty, Tag } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { STATISTICAL_URL } from '../../../share/common/api/api.constants'
import { moduleApi } from '../../../share/handle/fetchData'
import Categories from '../../organisms/categories'
import items from './data'
import './index.scss'

const { RangePicker } = DatePicker
const allCategories = ['all', ...items]

const Statistical = (): JSX.Element => {
  const [statisticals, setStatisticals] = useState<any>([])
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState<any>([])

  useEffect(() => {
    moduleApi.get(STATISTICAL_URL).then((res) => setStatisticals(res.data.data))
  }, [])

  useEffect(() => {
    setMenuItems(statisticals)
  }, [statisticals])

  const filterItems = (value: any) => {
    if (value === 'all') {
      setMenuItems(statisticals)
      return
    }
    if (value === 'đúng hẹn') {
      setMenuItems(statisticals.filter((item: { reason: any }) => !item.reason))
    }
    if (value === 'trễ hẹn') {
      setMenuItems(statisticals.filter((item: { reason: any }) => item.reason))
    }
    if (value === 'thông qua') {
      setMenuItems(statisticals.filter((item: { status: string }) => item.status === 'YES'))
    }
    if (value === 'không thông qua') {
      setMenuItems(
        menuItems.filter((item: { status: string; browsed: boolean }) => item.status === 'NO' && item.browsed === true)
      )
    }
  }

  function onChange(dates: any, dateStrings: any) {
    // console.log('From: ', dates[0], ', to: ', dates[1])
    const strTimeStart = dateStrings[0].split('-')
    const startTimeEnd = dateStrings[1].split('-')
    const [yearStart, monthStart, dayStart] = strTimeStart
    const [yearEnd, monthEnd, dayEnd] = startTimeEnd
    const timeStart = Number(yearStart + monthStart + dayStart)
    const timeEnd = Number(yearEnd + monthEnd + dayEnd)

    console.log('timeStart :>> ', timeStart)
    console.log('timeEnd :>> ', timeEnd)
    if (timeStart && timeEnd) {
      setMenuItems(
        statisticals.filter((profile: { timeStatistical: number }) => {
          if (profile.timeStatistical >= timeStart && profile.timeStatistical <= timeEnd) {
            return profile
          }
        })
      )
    }
  }

  console.log('menuItems :>> ', menuItems)

  return (
    <div>
      <div className='title' style={{ margin: '20px 0px' }}>
        <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
          <CreateIcon />
          Thống kê hồ sơ
        </p>
      </div>
      <div className='statistical' style={{ marginBottom: '-50px', marginTop: '50px' }}>
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      <div className='select-day'>
        <RangePicker
          size='large'
          style={{ width: '780px' }}
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')]
          }}
          onChange={onChange}
        />
      </div>
      {menuItems.length !== 0 ? (
        <TableContainer component={Paper} style={{ maxHeight: '400px', marginTop: '20px', padding: 0 }}>
          {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
          <Table stickyHeader size='small' aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Mã hồ sơ</TableCell>
                <TableCell align='left'>Tên nội dung</TableCell>
                <TableCell align='left'>Ngày nhận</TableCell>
                <TableCell align='left'>Ngày hẹn trả</TableCell>
                <TableCell align='left'>Người xử lý</TableCell>
                <TableCell align='left'>Lý do trễ hẹn</TableCell>
                <TableCell align='left'>Trạng thái</TableCell>
                {/* <TableCell align='center'></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {menuItems.map((profile: any, index: number) => (
                <TableRow key={profile._id}>
                  <TableCell align='left' component='th' scope='row'>
                    {profile.profileCode}
                  </TableCell>
                  <TableCell align='left'>{profile.nameDocument}</TableCell>
                  <TableCell align='left'>{profile.insertTime}</TableCell>
                  <TableCell align='left'>{profile.timeEnd}</TableCell>
                  <TableCell align='left'>{profile.approvedBy}</TableCell>
                  <TableCell align='left'>
                    {profile.reason && <TextArea value={profile.reason} rows={4} readOnly />}
                  </TableCell>
                  <TableCell align='left'>
                    {profile.status === 'YES' ? (
                      <Tag color='success'>Thông qua</Tag>
                    ) : (
                      <Tag color='error'>Không thông qua</Tag>
                    )}
                  </TableCell>
                  {/* <TableCell align='center'>
                    <Space align='center' size='small'>
                      <Link to={`/admin/department/${row.slug}`}>
                        <Tag style={{ padding: '0px 15px 6px 15px', margin: '0px 0px' }} color='processing'>
                          <SearchOutlined />
                        </Tag>
                      </Link>
                    </Space>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Empty style={{ marginTop: '50px' }} />
      )}
    </div>
  )
}
export default Statistical
