import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NewsInterface } from '../../../../share/interface/image.interface'
import { AppState } from '../../../../store/types'

const NewsDetail = (): JSX.Element => {
  const { slug } = useParams<any>()
  const listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)
  const [news, setNews] = useState<NewsInterface>()

  useEffect(() => {
    return setNews(listNews.find((item) => item.slug === slug))
  }, [slug, listNews])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: news?.content as string }} />
    </>
  )
}
export default NewsDetail
