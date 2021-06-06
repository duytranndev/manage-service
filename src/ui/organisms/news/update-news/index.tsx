import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { NewsInterface } from '../../../../share/interface/image.interface'
import { UPDATE_NEWS } from '../../../../store/actions/news.action'
import { AppState } from '../../../../store/types'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
]

const FormUpdateNews = ({ data }: any): JSX.Element => {
  const [news, setNews] = useState<NewsInterface>({} as NewsInterface)
  const [valueEditor, setValueEditor] = useState('')
  const listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)
  const dispatch = useDispatch()

  useEffect(() => {
    return setNews(data)
  }, [data])

  const handleOnChange = (e: any) => {
    setNews({ ...news, [e.target.name]: e.target.value })
  }

  function onChange(e: any) {
    setValueEditor(e)
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()

    const newNews = {
      ...news,
      title: news?.title,
      description: news?.description,
      content: valueEditor
    }

    const updateService = moduleApi.update(NEWS_URL, newNews)
    await toast.promise(updateService, {
      loading: 'Loading',
      success: 'Sửa tin tức thành công',
      error: 'Sửa tin tức thất bại'
    })
    const status = await updateService.then((res) => res.data.message)
    const data = await updateService.then((res) => res.data.data)
    if (status === 'success') {
      dispatch({ type: UPDATE_NEWS, payload: data })
      setNews({})
    }
  }
  return (
    <Form
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 20 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Tiêu đề'>
        <Input placeholder='Tiêu đề...' name='title' value={news.title} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Mô tả'>
        <Input placeholder='Mô tả...' name='description' value={news.description} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Nội dung'>
        <ReactQuill
          modules={{
            toolbar: {
              container: [
                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'video'],
                ['link', 'image', 'video'],
                ['clean'],
                ['code-block']
              ],
              handlers: {
                // image: this.imageHandler
              }
            }
          }}
          formats={formats}
          value={news.content}
          onChange={onChange}
        />
        {/* <Quill placeholder={'Start Posting Something'} onEditorChange={onChange} onFilesChange={onFilesChange} /> */}
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  )
}
export default FormUpdateNews
