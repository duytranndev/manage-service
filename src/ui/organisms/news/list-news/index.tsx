import { DeleteOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/core'
import { List, Skeleton, Tag } from 'antd'
import 'antd/dist/antd.css'
import Avatar from 'antd/lib/avatar/avatar'
import Modal from 'antd/lib/modal/Modal'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NEWS_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { NewsInterface } from '../../../../share/interface/image.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { DELETE_NEWS } from '../../../../store/actions/news.action'
import { AppState } from '../../../../store/types'
import './index.scss'
const useStyles = makeStyles({
  root: {
    float: 'left',
    flexWrap: 'wrap',
    padding: '5px'
  },
  media: {
    height: 250
  }
})

type ManagementNewsProps = {
  data?: NewsInterface[]
}
export default function ManagementNews({ data }: ManagementNewsProps) {
  const [idNews, setIdNews] = useState('')
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const user = useSelector<AppState, StaffInterface>((state) => state.authentication.data)

  const handleOnDelete = async (id: string) => {
    const myPromise = moduleApi.delete(NEWS_URL, id)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Xoá tin tức thành công',
      error: 'Xoá tin tức thất bại'
    })
    const status = await myPromise.then((response) => response.status)
    if (status === 204) {
      dispatch({ type: DELETE_NEWS, id: id })
    }
  }

  const showModal = (id: string) => {
    setIdNews(id)
    setIsModalVisible(true)
  }

  const handleOk = (id: string) => {
    handleOnDelete(id)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      {data && (
        <List
          className='demo-loadmore-list'
          itemLayout='horizontal'
          dataSource={data}
          style={{ maxHeight: '400px' }}
          renderItem={(item) => (
            <List.Item
              style={{ margin: '50px' }}
              actions={[
                <a key='list-loadmore-edit'>Edit</a>,

                <>
                  <Tag
                    onClick={() => showModal(item._id as string)}
                    style={{ padding: '5px 15px 6px 15px', margin: '0px 0px', cursor: 'pointer' }}
                    color='error'>
                    <DeleteOutlined />
                  </Tag>
                  <Modal
                    title='Basic Modal'
                    visible={isModalVisible}
                    onOk={() => handleOk(idNews)}
                    onCancel={handleCancel}>
                    <p>Bạn có chắc chắn muốn xoá phòng ban này?</p>
                  </Modal>
                </>
              ]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                  title={<a href='https://ant.design'>{item.title}</a>}
                  description={item.description}
                />
                <Link to={`/admin/news/${item.slug}`}>View more</Link>
              </Skeleton>
            </List.Item>
          )}
        />
      )}
    </>
  )
}
