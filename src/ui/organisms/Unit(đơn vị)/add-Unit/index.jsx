import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { FIELD_URL, UNIT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { genCode } from '../../../../share/handle/getCode'
import { CREATE_UNIT } from '../../../../store/actions/unit.action'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddUnit() {
  const [formData, setFormData] = useState()
  const [field, setField] = useState('')
  const [fields, setFields] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    return moduleApi.get(FIELD_URL).then((res) => setFields(res.data.data))
  }, [])

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  function onChangeDepartment(value: string) {
    setField(value)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const unit = {
      ...formData,
      unitCode: genCode(formData.name),
      fieldId: field
    }
    const myPromise = moduleApi.create(UNIT_URL, unit)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Thêm đơn vị thành công',
      error: 'Thêm đơn vị thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    const data = await myPromise.then((res) => res.data.data)
    if (status === 'success') {
      console.log('data :>> ', data)
      dispatch({ type: CREATE_UNIT, payload: data })
      setFormData({})
    }
  }

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Tên đơn vị'>
        <Input placeholder='Nhập tên đơn vị...' name='name' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Tên lĩnh vực'>
        <Select showSearch placeholder='Chọn lĩnh vực...' optionFilterProp='children' onChange={onChangeDepartment}>
          {fields.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label='Mô tả'>
        <TextArea placeholder='Nhập mô tả...' rows={4} name='description' onChange={handleOnChange} />
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
