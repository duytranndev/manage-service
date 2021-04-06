import { Button, DatePicker, Form, Input } from 'antd'
import React, { useState } from 'react'
import { CLOUD_URI, PRESENT } from '../../../../share/common/api/api.constants'
import { uploadSingle } from '../../../../share/handle/upload'

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddStaff() {
  // const [user, setUser] = useState()
  const [image, setImage] = useState()

  const handleOnChangeImage = (e: any) => {
    console.log(' :>> ', e.target.files)
    setImage(e.target.files[0])
  }
  console.log('image :>> ', image)

  const handleOnSubmit = (e: any) => {
    console.log('e :>> ', e)
    e.preventDefault()
    try {
      const uploader = uploadSingle(image, CLOUD_URI, PRESENT)
      console.log(
        'uploaders :>> ',
        uploader.then((res) => res)
      )
    } catch (err) {
      console.error(err)
    }
  }
  // const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  // }

  function onChange(date: any, dateString: any) {
    console.log(date, dateString)
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
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
      <Form.Item label='Hình ảnh'>
        <div className='file-field input-field'>
          <div className='btn'>
            <input type='file' name='image' onChange={handleOnChangeImage} />
          </div>
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
