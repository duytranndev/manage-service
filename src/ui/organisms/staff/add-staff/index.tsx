import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import { CLOUD_URI, PRESENT, STAFF_URL } from '../../../../share/common/api/api.constants'
import { Actor } from '../../../../share/common/app-constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { uploadSingle } from '../../../../share/handle/upload'
import { useForm } from '../../../../share/hooks/useForm'
import { Staff } from '../../../../share/interface/staff.interface'
import { validate } from '../../../../share/validator/validator'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddStaff() {
  const { formData, handleInputChange, handleOnInput, isReady, setIsSubmitting, setErrors, errors } = useForm<Staff>(
    {},
    handleOnSubmit
  )
  const [image, setImage] = useState()
  const [department, setDepartment] = useState()
  const [dateOfBirth, setDateOfBirth] = useState(null)

  const handleOnChangeImage = (e: any) => {
    console.log(' :>> ', e.target.files)
    setImage(e.target.files[0])
  }

  function onChangeDate(dateString: any) {
    setDateOfBirth(dateString)
  }
  function onChangeDepartment(value: any) {
    setDepartment(value)
    setErrors({ ...errors, department: '' })
  }

  async function handleOnSubmit(e: any): Promise<void> {
    e.preventDefault()
    setErrors(validate({ ...formData, departmentId: department }, Actor.staff))
    setIsSubmitting(true)
    if (isReady) {
      console.log('is successfully')

      let uploader = await uploadSingle(image, CLOUD_URI, PRESENT)
      const imageUrl = uploader.data.url
      const newStaff = {
        ...formData,
        image: imageUrl,
        departmentId: department,
        dateOfBirth: dateOfBirth
      }
      moduleApi.create(STAFF_URL, newStaff).then((res) => console.log('res.data :>> ', res.data.data))
    }
  }
  console.log('errors :>> ', errors)
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Email'>
        <Input placeholder='Nhập email...' onInput={handleOnInput} name='email' onChange={handleInputChange} />
        {errors.email && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.email}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Tên đăng nhập'>
        <Input
          placeholder='Nhập tên đăng nhập...'
          onInput={handleOnInput}
          name='username'
          onChange={handleInputChange}
        />
        {errors.username && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.username}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Mật khẩu'>
        <Input placeholder='Nhập mật khẩu...' name='password' onInput={handleOnInput} onChange={handleInputChange} />
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
        <Input placeholder='Nhập họ và tên...' name='name' onInput={handleOnInput} onChange={handleInputChange} />
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
        <Input placeholder='Nhập địa chỉ...' name='address' onInput={handleOnInput} onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Quê quán'>
        <Input placeholder='Nhập quê quán...' name='homeTown' onInput={handleOnInput} onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Số CMND/CCCD'>
        <Input placeholder='Nhập số CMND/CCCD...' name='cardId' onInput={handleOnInput} onChange={handleInputChange} />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Số điện thoại'>
        <Input
          placeholder='Nhập số điện thoại'
          type='number'
          onInput={handleOnInput}
          name='phone'
          onChange={handleInputChange}
        />
        {errors.phone && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.phone}
          </p>
        )}
      </Form.Item>

      <Form.Item label='Phòng ban'>
        <Select showSearch placeholder='Chọn phòng ban...' optionFilterProp='children' onChange={onChangeDepartment}>
          <Option value='ADMIN'>ADMIN</Option>
          <Option value='MEMBER'>MEMBER</Option>
        </Select>
        {errors.departmentId && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.departmentId}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Chức vụ'>
        <Input placeholder='Nhập chức vụ...' name='position' onInput={handleOnInput} onChange={handleInputChange} />
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
