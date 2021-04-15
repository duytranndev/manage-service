import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { CLOUD_URI, PRESENT, STAFF_URL } from '../../../../share/common/api/api.constants'
import { Actor } from '../../../../share/common/app-constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { uploadSingle } from '../../../../share/handle/upload'
import { useForm } from '../../../../share/hooks/useForm'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { CREATE_STAFF } from '../../../../store/actions/staff.action'
import { AppState } from '../../../../store/types'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddStaff() {
  const {
    formData,
    setFormData,
    handleOnInput,
    handleInputChange,
    setErrors,
    handleSubmit,
    errors
  } = useForm<StaffInterface>({}, handleOnSubmit)
  const dispatch = useDispatch()
  const [image, setImage] = useState('')
  const [department, setDepartment] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [role, setRole] = useState('')
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)

  const handleOnChangeImage = async (e: any) => {
    setImage(e.target.files[0])
    const pathImage = e.target.files[0]
    const uploadImagle = uploadSingle(pathImage, CLOUD_URI, PRESENT)
    await toast
      .promise(uploadImagle, {
        loading: 'Loading',
        success: 'Thêm hình ảnh thành công',
        error: 'Thêm hình ảnh thất bại'
      })
      .then((res) => setImage(res.data.url))
  }

  function onChangeDate(value: any, dateString: any) {
    setDateOfBirth(dateString)
  }
  function onChangeDepartment(value: string) {
    setDepartment(value)
    setErrors({ ...errors, departmentId: '' })
  }
  const onChangeRole = (value: string) => {
    setRole(value)
    setErrors({ ...errors, role: '' })
  }

  async function handleOnSubmit(): Promise<void> {
    console.log('sub :>> ')

    if (Object.keys(formData).length !== 0) {
      const newStaff = {
        ...formData,
        image: image,
        departmentId: department,
        role: role,
        dateOfBirth: dateOfBirth
      }
      const myPromise = moduleApi.create(STAFF_URL, newStaff)
      await toast.promise(myPromise, {
        loading: 'Loading',
        success: 'Thêm nhân viên thành công',
        error: 'Thêm nhân viên thất bại'
      })
      const status = await myPromise.then((res) => res.data.message)
      console.log('status :>> ', status)
      const data = await myPromise.then((res) => res.data.data)
      if (status === 'success') {
        console.log('data :>> ', data)
        dispatch({ type: CREATE_STAFF, payload: data })
        setFormData({})
        setImage('')
      }
    }
  }
  console.log('errors :>> ', errors)
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={(e) => handleSubmit(e, Actor.staff)}>
      <Form.Item label='Email'>
        <Input
          placeholder='Nhập email...'
          onInput={handleOnInput}
          name='email'
          onChange={handleInputChange}
          value={formData.email}
        />
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
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.username}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Mật khẩu'>
        <Input
          placeholder='Nhập mật khẩu...'
          name='password'
          onInput={handleOnInput}
          onChange={handleInputChange}
          value={formData.password}
        />
        {errors.password && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.password}
          </p>
        )}
      </Form.Item>

      <Form.Item label='Họ và tên'>
        <Input
          placeholder='Nhập họ và tên...'
          name='name'
          onInput={handleOnInput}
          onChange={handleInputChange}
          value={formData.name}
        />
        {errors.name && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.name}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Hình ảnh'>
        <div className='file-field input-field'>
          <div className='btn'>
            <input type='file' name='image' onChange={handleOnChangeImage} />
          </div>
        </div>
      </Form.Item>
      <Form.Item label='Ngày sinh'>
        <DatePicker onChange={onChangeDate} />
      </Form.Item>
      <Form.Item label='Địa chỉ'>
        <Input
          placeholder='Nhập địa chỉ...'
          name='address'
          onInput={handleOnInput}
          onChange={handleInputChange}
          value={formData.address}
        />
        {errors.address && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.address}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Quê quán'>
        <Input
          placeholder='Nhập quê quán...'
          name='homeTown'
          onInput={handleOnInput}
          onChange={handleInputChange}
          value={formData.homeTown}
        />
        {errors.homeTown && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.homeTown}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Số CMND/CCCD'>
        <Input
          placeholder='Nhập số CMND/CCCD...'
          name='cardId'
          type='number'
          onInput={handleOnInput}
          onChange={handleInputChange}
          value={formData.cardId}
        />
        {errors.cardId && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.cardId}
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
          value={formData.phone}
        />
        {errors.phone && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.phone}
          </p>
        )}
      </Form.Item>

      <Form.Item label='Phòng ban'>
        <Select showSearch placeholder='Chọn phòng ban...' optionFilterProp='children' onChange={onChangeDepartment}>
          {departments.map((item) => (
            <Option key={item._id} value={item._id as string}>
              {item.name}
            </Option>
          ))}
        </Select>
        {errors.departmentId && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.departmentId}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Chức vụ'>
        <Input
          placeholder='Nhập chức vụ...'
          name='position'
          onInput={handleOnInput}
          onChange={handleInputChange}
          value={formData.position}
        />
        {errors.position && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.position}
          </p>
        )}
      </Form.Item>

      <Form.Item label='Quyền hạn'>
        <Select showSearch placeholder='Chọn quyền hạn' optionFilterProp='children' onChange={onChangeRole}>
          <Option value='ADMIN'>ADMIN</Option>
          <Option value='MEMBER'>MEMBER</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <Toaster />
    </Form>
  )
}
