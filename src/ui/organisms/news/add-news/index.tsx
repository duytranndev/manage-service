import { InboxOutlined } from '@ant-design/icons'
import { Button, Form, Input, Upload } from 'antd'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

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
  const handleOnSubmit = (e: any) => {
    console.log('e :>> ', e)
    e.preventDefault()
    // const newUser = {
    //   name: user?.name
    // }
    // console.log('newUser :>> ', newUser)
  }

  // const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  // }
  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  function onChange(e: any) {
    console.log(e)
  }
  return (
    <Form
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 20 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Tiêu đề'>
        <Input placeholder='Basic usage' name='title' />
      </Form.Item>
      <Form.Item label='Nội dung'>
        <ReactQuill modules={modules} formats={formats} onChange={onChange} />
      </Form.Item>
      <Form.Item label='Dragger'>
        <Form.Item name='dragger' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name='files' action='/upload.do'>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>Click or drag file to this area to upload</p>
            <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
