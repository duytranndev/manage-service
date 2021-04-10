import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import { CLOUD_URI, PRESENT, STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { uploadSingle } from '../../../../share/handle/upload'
import { useForm } from '../../../../share/hooks/useForm'
import { Filed } from '../../../../share/interface/field.interface'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormUpdateService() {
  const {
    formData,
    handleInputChange,
    setErrors,
    handleInputValidation,
    errors,
    isSubmitting,
    handleSubmit
  } = useForm ({}, handleOnSubmit)
  const [image, setImage] = useState()
  const [department, setDepartment] = useState()

  const handleOnChangeImage = (e) => {
    console.log(' :>> ', e.target.files)
    setImage(e.target.files[0])
  }

  function onChangeDate(date, dateString) {
    console.log(date, dateString)
  }
  function onChangeDepartment(value) {
    setDepartment(value)
    setErrors({ ...errors, department: '' })
  }

  console.log('errors :>> ', errors)
  console.log('formData :>> ', formData)

  async function handleOnSubmit(){
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
      <Form.Item label='Đăng ký hộ khẩu'>
        <Input
          placeholder='Nhập hộ khẩu...'
          onInput={(e) => setErrors({ ...errors, [e.target.name]: '' })}
          name='hokhau'
          onChange={handleInputChange}
        />
        {errors.name && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.name}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Mô tả'>
        <Input placeholder='Nhập mô tả...' name='mota' onChange={handleInputChange} />
        {errors.decription && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.decription}
          </p>
        )}
      </Form.Item>
      <Form.Item label='Mã đơn vị'>
        <Input placeholder='Nhập mã đơn vị...' name='unitCode' onChange={handleInputChange} />
        {errors.unitCode && (
          <p className='help is-danger' style={{ color: 'red' }}>
            *{errors.unitCode}
          </p>
        )}
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
