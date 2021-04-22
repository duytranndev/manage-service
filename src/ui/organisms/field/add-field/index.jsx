import { Button, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { FIELD_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { genCode } from '../../../../share/handle/getCode'
import { CREATE_FIELD } from '../../../../store/actions/field.action'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddField() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const field = {
      ...formData,
      fieldCode: genCode(formData.name)
    }
    const myPromise = moduleApi.create(FIELD_URL, field)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Thêm lĩnh vực thành công',
      error: 'Thêm lĩnh vực thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    const data = await myPromise.then((res) => res.data.data)
    if (status === 'success') {
      setFormData({})
      dispatch({ type: CREATE_FIELD, payload: data })
    }
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Tên lĩnh vực'>
        <Input placeholder='Nhập tên lĩnh vực...' name='name' onChange={handleOnChange} value={formData.name} />
      </Form.Item>
      <Form.Item label='Mô tả'>
        <Input placeholder='Nhập mô tả...' name='description' onChange={handleOnChange} value={formData.description} />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <Toaster position='top-center' />
    </Form>
  )
}
