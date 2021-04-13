import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import { CLOUD_URI, PRESENT, STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { uploadSingle } from '../../../../share/handle/upload'
import { useForm } from '../../../../share/hooks/useForm'
import { Staff } from '../../../../share/interface/staff.interface'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddStaff() {
  const { formData, handleInputChange, setErrors, errors, handleSubmit } = useForm<Staff>({}, handleOnSubmit)
  const [image, setImage] = useState()
  const [department, setDepartment] = useState()

  const handleOnChangeImage = (e: any) => {
    console.log(' :>> ', e.target.files)
    setImage(e.target.files[0])
  }

  function onChangeDate(date: any, dateString: any) {
    console.log(date, dateString)
  }
  function onChangeDepartment(value: any) {
    setDepartment(value)
    setErrors({ ...errors, department: '' })
  }

  console.log('errors :>> ', errors)
  console.log('formData :>> ', formData)

  async function handleOnSubmit(): Promise<void> {
    let uploader = await uploadSingle(image, CLOUD_URI, PRESENT)
    const imageUrl = uploader.data.url
    const newStaff = {
      name: formData.name,
      image: imageUrl
    }
    moduleApi.create(STAFF_URL, newStaff).then((res) => console.log('res.data :>> ', res.data.data))
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleSubmit}>
      <Form.Item label='Email'>
        <Input
          placeholder='Nhập email...'
          onInput={(e: any) => setErrors({ ...errors, [e.target.name]: '' })}
          name='email'
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.email}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Tên đăng nhập'>
        <Input placeholder='Nhập tên đăng nhập...' name='username' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Mật khẩu'>
        <Input placeholder='Nhập mật khẩu...' name='password' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Nhập lại mật khẩu'>
        <Input placeholder='Nhập lại mật khẩu...' name='password' onChange={handleInputChange} />
      </Form.Item>
      <Form.Item label='Họ và tên'>
        <Input placeholder='Nhập họ và tên...' name='name' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Ngày sinh'>
        <DatePicker onChange={onChangeDate} />
      </Form.Item>
      <Form.Item label='Địa chỉ'>
        <Input placeholder='Nhập địa chỉ...' name='address' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Quê quán'>
        <Input placeholder='Nhập quê quán...' name='homeTown' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Số CMND/CCCD'>
        <Input placeholder='Nhập số CMND/CCCD...' name='cardId' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Số điện thoại'>
        <Input placeholder='Nhập số điện thoại' name='phone' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>

      <Form.Item label='Phòng ban'>
        <Select showSearch placeholder='Chọn phòng ban...' optionFilterProp='children' onChange={onChangeDepartment}>
          <Option value='ADMIN'>ADMIN</Option>
          <Option value='MEMBER'>MEMBER</Option>
        </Select>
        {errors.department && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.department}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Chức vụ'>
        <Input placeholder='Nhập chức vụ...' name='position' onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>

      <Form.Item label='Quyền hạn'>
        <Select showSearch placeholder='Chọn quyền hạn' optionFilterProp='children' onChange={onChangeDepartment}>
          <Option value='ADMIN'>ADMIN</Option>
          <Option value='MEMBER'>MEMBER</Option>
        </Select>
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
