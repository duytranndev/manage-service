import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Button, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
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
    bottom: '9%',
    right: '3%',
    zIndex: 1
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
      {listNews.length > 0 ? (
        <>
          <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_add_action}>
            <AddIcon />
          </Fab>
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
          <Toaster />
        </>
      )}
    </>
  )
}
