import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { FIELD_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { UPDATE_FIELD } from '../../../../store/actions/field.action'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function EditField({ data }: any) {
  const [field, setField] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    return setField(data)
  }, [data])

  const handleOnChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value })
  }

  async function handleOnSubmit(e: any) {
    e.preventDefault()
    const myPromise = moduleApi.update(FIELD_URL, field)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Sửa thông tin lĩnh vực thành công',
      error: 'Sửa thông tin lĩnh vực thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    if (status === 'success') {
      // dispatch({ type: CREATE_DEPARTMENT, payload: data })
      dispatch({ type: UPDATE_FIELD, payload: field })
      setField({})
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
        <Input placeholder='Nhập tên lĩnh vực...' name='name' onChange={handleOnChange} value={field?.name} />
      </Form.Item>
      <Form.Item label='Mô tả'>
        <Input placeholder='Nhập mô tả...' name='description' onChange={handleOnChange} value={field?.description} />
      </Form.Item>
      <Form.Item label='Mã lĩnh vực'>
        <Input placeholder='Nhập mã lĩnh vực...' name='fieldCode' onChange={handleOnChange} value={field?.fieldCode} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
