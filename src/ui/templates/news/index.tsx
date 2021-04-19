import { PlusOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core'
import { Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { NewsInterface } from '../../../share/interface/image.interface'
import { fetchNewss } from '../../../store/recuders/news.reducer'
import { AppState } from '../../../store/types'
import DrawerComponent from '../../molecules/drawer'
import FormAddNews from '../../organisms/news/add-news'
import ManagementNews from '../../organisms/news/list-news'
import SearchComponent from '../../organisms/search'
// import '../../../assets/files/93-Mẫu HK02-Phiếu-báo-thay-đổi-hộ-khẩu-nhân-khẩu'

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rbga(0, 0, 0, 0.05)',
    borderRadius: '4px'
  }
})

export default function News() {
  const classes = useStyles()

  const [visible, setVisible] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadNews = async () => {
      await dispatch(fetchNewss())
    }
    loadNews()
  }, [])
  const listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)
  console.log('listNews :>> ', listNews)

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <SearchComponent />
      <Button type='primary' onClick={handleShowDrawer}>
        <PlusOutlined /> Thêm tin tức
      </Button>
      <div className='content'>
        {listNews.length > 0 ? (
          <ManagementNews data={listNews} />
        ) : (
          <div className={classes.root}>
            <Spin size='large' />
          </div>
        )}
      </div>
      <DrawerComponent title='Thêm tin tức' visible={visible} onClose={handleCloseDrawer} width={800}>
        <FormAddNews />
      </DrawerComponent>
      <Toaster />
    </>
  )
}
