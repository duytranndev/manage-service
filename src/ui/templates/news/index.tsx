import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackspaceIcon from '@material-ui/icons/Backspace'
import CreateIcon from '@material-ui/icons/Create'
import { Button, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NewsInterface } from '../../../share/interface/image.interface'
import { fetchNewss } from '../../../store/recuders/news.reducer'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddNews from '../../organisms/news/add-news'
import ManagementNews from '../../organisms/news/list-news'

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rbga(0, 0, 0, 0.05)',
    borderRadius: '4px'
  },
  btn_add_action: {
    position: 'fixed',
    bottom: '15%',
    right: '3%',
    zIndex: 1
  }
})

export default function News() {
  const classes = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  let listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)

  useEffect(() => {
    if (listNews.length === 0) {
      dispatch(fetchNewss())
    }
  }, [])

  const isPending = useSelector<AppState, any>((state) => state.news.pending)

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResults([])
    }
    const results = listNews?.filter((news) => news?.title?.toUpperCase().includes(searchTerm.toUpperCase()))
    return setSearchResults(results as any)
  }, [searchTerm])

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const handleOnRemoveSearch = () => {
    setSearchTerm('')
  }

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <div className='title' style={{ margin: '20px 0px' }}>
        <p style={{ fontSize: '26px', textTransform: 'uppercase' }}>
          <CreateIcon />
          Quản Lý tin tức
        </p>
      </div>
      {!isPending ? (
        <>
          {(listNews?.length as any) > 0 ? (
            <>
              <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
                <AddIcon />
              </Fab>
              <div className='search-form'>
                <div className='simple-search'>
                  <input type='text' placeholder='Tìm kiếm tin tức' value={searchTerm} onChange={handleChange} />
                  <button onClick={handleOnRemoveSearch}>
                    <BackspaceIcon style={{ marginTop: '5px' }} />
                  </button>
                </div>
              </div>
              <ul className='search-result'>
                {searchResults?.length > 0 &&
                  searchResults?.map((item: NewsInterface) => (
                    <Link style={{ color: 'black' }} to={`/admin/news/${item.slug}`}>
                      <li className='item' key={item._id}>
                        {item?.title}
                      </li>
                    </Link>
                  ))}
              </ul>
              <div className='total' style={{ margin: '10px' }}>
                Tổng số lượng tin tức: <span style={{ color: 'black', fontWeight: 600 }}>{listNews.length}</span>
              </div>
              <div className='content'>
                <ManagementNews data={listNews} />
              </div>
              <DrawerComponent title='Thêm phòng ban' visible={visible} onClose={handleCloseDrawer} width={680}>
                <FormAddNews />
              </DrawerComponent>
            </>
          ) : (
            <>
              <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{
                  height: 100
                }}
                className={classes.root}
                description={<span>Danh sách tin tức hiện đang trống</span>}>
                <Button type='primary' onClick={handleShowDrawer}>
                  Thêm tin tức
                </Button>
              </Empty>
              <DrawerComponent title='Thêm tin tức' visible={visible} onClose={handleCloseDrawer} width={800}>
                <FormAddNews />
              </DrawerComponent>
            </>
          )}
        </>
      ) : (
        <div className='classic-5'></div>
      )}
    </>
  )
}
