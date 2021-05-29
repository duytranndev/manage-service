import { Button, Form, Input } from 'antd'
import React, { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch } from 'react-redux'
import { NEWS_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { NewsInterface } from '../../../../share/interface/image.interface'
import { CREATE_NEWS } from '../../../../store/actions/news.action'
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

export default function FormAddNews() {
  const [formData, setFormData] = useState<NewsInterface>()
  const [valueEditor, setValueEditor] = useState('')
  const dispatch = useDispatch()

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  function onChange(e: any) {
    setValueEditor(e)
  }
  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const news = {
      title: formData?.title,
      description: formData?.description,
      content: valueEditor
    }

    const myPromise = moduleApi.create(NEWS_URL, news)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Thêm tin tức thành công',
      error: 'Thêm tin tức thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    const data = await myPromise.then((res) => res.data.data)
    if (status === 'success') {
      dispatch({ type: CREATE_NEWS, payload: data })
      setFormData({})
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
        <Input placeholder='Tiêu đề...' name='title' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Mô tả'>
        <Input placeholder='Mô tả...' name='description' onChange={handleOnChange} />
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
          onChange={onChange}
        />
        {/* <Quill placeholder={'Start Posting Something'} onEditorChange={onChange} onFilesChange={onFilesChange} /> */}
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <Toaster position='top-center' />
    </Form>
  )
}
