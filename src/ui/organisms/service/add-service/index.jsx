import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { SERVICE_URL, UNIT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { genCode } from '../../../../share/handle/getCode'
import { CREATE_SERVICE } from '../../../../store/actions/service.action'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddService() {
  const [formData, setFormData] = useState()
  const [unit, setUnit] = useState()
  const [units, setUnits] = useState([])
  const dispatch = useDispatch()

  useEffect(() => moduleApi.get(UNIT_URL).then((res) => setUnits(res.data.data)), [])

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  function onChangeUnit(value: string) {
    setUnit(value)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const service = {
      ...formData,
      serviceCode: genCode(formData.name),
      unitId: unit
    }
    const myPromise = moduleApi.create(SERVICE_URL, service)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Thêm đơn vị thành công',
      error: 'Thêm đơn vị thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    const data = await myPromise.then((res) => res.data.data)
    if (status === 'success') {
      dispatch({ type: CREATE_SERVICE, payload: data })
      setFormData({})
      setUnit()
    }
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Tên dịch vụ'>
        <Input placeholder='Nhập tên dịch vụ...' name='name' onChange={handleOnChange} value={formData?.name} />
      </Form.Item>

      <Form.Item label='Tên đơn vị'>
        <Select
          showSearch
          placeholder='Chọn đơn vị...'
          optionFilterProp='children'
          value={unit}
          onChange={onChangeUnit}>
          {units.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label='Mô tả'>
        <TextArea
          placeholder='Nhập mô tả...'
          rows={4}
          name='description'
          onChange={handleOnChange}
          value={formData?.description}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Thêm
        </Button>
      </Form.Item>
      <Toaster position='top-center' />
    </Form>
  )
}
