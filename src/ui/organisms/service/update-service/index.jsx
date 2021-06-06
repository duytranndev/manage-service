import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { SERVICE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { UPDATE_SERVICE } from '../../../../store/actions/service.action'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormUpdateService(props) {
  const { data } = props //tuỳ vào prop của state
  const [service, setService] = useState()
  const fields = useSelector((state) => state.field.data)
  const units = useSelector((state) => state.unit.data)
  const dispatch = useDispatch()

  useEffect(() => {
    return setService(data)
  }, [data])

  function onChangeUnit(value: string) {
    const unit = units.find((item) => item._id === value)
    setService({ ...service, unitId: value, unitName: unit?.name })
    // setDepartment(value)
  }

  const handleOnChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const updateService = moduleApi.update(SERVICE_URL, service)
    await toast.promise(updateService, {
      loading: 'Loading',
      success: 'Sửa thông tin đơn vị thành công',
      error: 'Sửa thông tin đơn vị viên thất bại'
    })
    const status = await updateService.then((res) => res.data.message)
    if (status === 'success') {
      dispatch({ type: UPDATE_SERVICE, payload: service })
      setService({})
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
        <Input placeholder='Nhập tên dịch vụ...' name='name' onChange={handleOnChange} value={service?.name} />
      </Form.Item>

      <Form.Item label='Tên đơn vị'>
        <Select
          showSearch
          placeholder='Chọn đơn vị...'
          optionFilterProp='children'
          value={service?.unitName}
          onChange={onChangeUnit}>
          {units?.map((item) => (
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
          value={service?.description}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  )
}
