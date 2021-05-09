import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { useForm } from '../../../../share/hooks/useForm'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function EditField({ data }: any) {
  const [field, setField] = useState()
  const { formData, handleInputChange, setErrors, handleInputValidation, errors, isSubmitting, handleSubmit } = useForm(
    {},
    handleOnSubmit
  )
  useEffect(() => {
    return setField(data)
  }, [data])
  // console.log('field :>> ', field)

  const handleOnChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value })
  }
  async function handleOnSubmit() {
    const newStaff = {
      name: formData.name
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
      <Form.Item label='Tên lĩnh vực'>
        <Input placeholder='Nhập tên lĩnh vực...' name='name' onChange={handleInputChange} value={field?.name} />
      </Form.Item>
      <Form.Item label='Mô tả'>
        <Input placeholder='Nhập mô tả...' name='description' onChange={handleInputChange} value={field?.description} />
      </Form.Item>
      <Form.Item label='Mã lĩnh vực'>
        <Input
          placeholder='Nhập mã lĩnh vực...'
          name='fieldCode'
          onChange={handleInputChange}
          value={field?.fieldCode}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
