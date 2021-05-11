import { Button, Form, Input } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { StaffInterface } from '../../../../share/interface/staff.interface'

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormUpdateStaff(props: any) {
  const { data } = props //tuỳ vào prop của state
  const [staff, setStaff] = useState<StaffInterface>()

  useEffect(() => {
    return setStaff(data)
  }, [data])

  console.log('staff :>> ', staff)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStaff({ ...staff, [e.target.name]: e.target.value })
  }

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

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Email'>
        <Input placeholder='Basic usage' name='email' value={staff?.email} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Tên đăng nhập'>
        <Input placeholder='Basic usage' name='username' value={staff?.username} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Mật khẩu'>
        <Input placeholder='Basic usage' name='password' value={staff?.password} onChange={handleOnChange} />
      </Form.Item>

      <Form.Item label='Họ và tên'>
        <Input placeholder='Basic usage' name='name' value={staff?.name} onChange={handleOnChange} />
      </Form.Item>
      {/* <Form.Item label='Ngày sinh'>
        <DatePicker value={staff?.dateOfBirth as any} onChange={onChange} />
      </Form.Item> */}
      <Form.Item label='Địa chỉ'>
        <Input placeholder='Basic usage' name='password' value={staff?.address} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Quê quán'>
        <Input placeholder='Basic usage' name='password' value={staff?.homeTown} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Số CMND/CCCD'>
        <Input placeholder='Basic usage' name='password' value={staff?.cardId} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Số điện thoại'>
        <Input placeholder='Basic usage' name='password' value={staff?.phone} onChange={handleOnChange} />
      </Form.Item>

      <Form.Item label='Chức vụ'>
        <Input placeholder='Basic usage' name='password' value={staff?.position} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Quyền hạn'>
        <Input placeholder='Basic usage' name='password' value={staff?.role} onChange={handleOnChange} />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  )
}
