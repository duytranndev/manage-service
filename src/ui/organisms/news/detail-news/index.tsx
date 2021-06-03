import { Fab, makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NewsInterface } from '../../../../share/interface/image.interface'
import { fetchNewss } from '../../../../store/recuders/news.reducer'
import { AppState } from '../../../../store/types'
import DrawerComponent from '../../../molecules/drawer'
import FormUpdateNews from '../update-news'

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rbga(0, 0, 0, 0.05)',
    borderRadius: '4px'
  },
  btn_edit_action: {
    position: 'fixed',
    bottom: '15%',
    right: '3%',
    zIndex: 1
  }
})

const NewsDetail = (): JSX.Element => {
  const { slug } = useParams<any>()
  const listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)
  const [news, setNews] = useState<NewsInterface>()
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    return setNews(listNews.find((item) => item.slug === slug))
  }, [slug, listNews])

  useEffect(() => {
    if (listNews.length === 0) {
      dispatch(fetchNewss())
    }
  }, [])

  const handleShowDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
  }

  return (
    <>
      <div className='title'>Tiêu đề: {news?.title}</div>
      <div className='description'>Miêu tả: {news?.description}</div>
      <div dangerouslySetInnerHTML={{ __html: news?.content as string }} />
      <Fab color='secondary' aria-label='add' onClick={handleShowDrawer} className={classes.btn_edit_action}>
        <EditIcon />
      </Fab>
      <DrawerComponent title='Sửa thông tin tin tức' visible={visible} onClose={handleCloseDrawer} width={680}>
        <FormUpdateNews data={news} />
      </DrawerComponent>
    </>
  )
}
export default NewsDetail
