import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import Modal from 'antd/lib/modal/Modal'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { NEWS_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { NewsInterface } from '../../../../share/interface/image.interface'
import { DELETE_NEWS } from '../../../../store/actions/news.action'

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
  data: NewsInterface[]
}
export default function ManagementNews({ data }: ManagementNewsProps) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOnDelete = async (id: any) => {
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

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = (id: any) => {
    handleOnDelete(id)
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <Card key={item._id} style={{ width: '355px' }} className={classes.root}>
              <CardActionArea>
                <CardMedia component='i' className={classes.media} image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {/* <div dangerouslySetInnerHTML={{ __html: item.content as string }} /> */}
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={showModal} variant='contained' color='secondary' startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Modal
                  title='Basic Modal'
                  visible={isModalVisible}
                  onOk={() => handleOk(item._id)}
                  onCancel={handleCancel}>
                  <p>Bạn có chắc chắn muốn xoá {item.title}</p>
                </Modal>
                <Button variant='contained' color='primary' endIcon={<Icon>send</Icon>}>
                  Learn more
                </Button>
              </CardActions>
            </Card>
          )
        })}
    </>
  )
}
