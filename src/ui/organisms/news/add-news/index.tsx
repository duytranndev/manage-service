import { InboxOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Upload } from 'antd'
import React from 'react'

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function index() {
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

  function onChange(date: any, dateString: any) {
    console.log(date, dateString)
  }
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Email'>
        <Input placeholder='Basic usage' name='email' />
      </Form.Item>
      <Form.Item label='Tên đăng nhập'>
        <Input placeholder='Basic usage' name='username' />
      </Form.Item>
      <Form.Item label='Mật khẩu'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Nhập lại mật khẩu'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Họ và tên'>
        <Input placeholder='Basic usage' name='name' />
      </Form.Item>
      <Form.Item label='Ngày sinh'>
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item label='Địa chỉ'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Quê quán'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Số CMND/CCCD'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Số điện thoại'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Phòng ban'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Chức vụ'>
        <Input placeholder='Basic usage' name='password' />
      </Form.Item>
      <Form.Item label='Quyền hạn'>
        <Input placeholder='Basic usage' name='password' />
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
