import { Button, DatePicker, Form, Input, message } from 'antd'
import React from 'react'

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddStaff() {
  // const [user, setUser] = useState()
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

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
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
      <Form.Item label='Hình ảnh'>
        <div className='file-field input-field'>
          <div className='btn'>
            <input type='file' name='image' />
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
