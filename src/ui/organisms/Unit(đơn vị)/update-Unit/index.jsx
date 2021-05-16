import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { Option } from 'antd/lib/mentions'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { UNIT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { UPDATE_UNIT } from '../../../../store/actions/unit.action'

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormUpdateUnit(props) {
  const { data } = props //tuỳ vào prop của state
  const [unit, setUnit] = useState()
  const fields = useSelector((state) => state.field.data)
  const dispatch = useDispatch()

  useEffect(() => {
    return setUnit(data)
  }, [data])

  function onChangeDepartment(value: string) {
    const field = fields.find((item) => item._id === value)
    setUnit({ ...unit, fieldId: value, fieldName: field?.name })
    // setDepartment(value)
  }

  const handleOnChange = (e) => {
    setUnit({ ...unit, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const updateStaff = moduleApi.update(UNIT_URL, unit)
    await toast.promise(updateStaff, {
      loading: 'Loading',
      success: 'Sửa thông tin đơn vị thành công',
      error: 'Sửa thông tin đơn vị viên thất bại'
    })
    const status = await updateStaff.then((res) => res.data.message)
    if (status === 'success') {
      dispatch({ type: UPDATE_UNIT, payload: unit })
      setUnit({})
    }
  }

  console.log('unit :>> ', unit)

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Tên đơn vị'>
        <Input placeholder='Nhập tên đơn vị...' name='name' onChange={handleOnChange} value={unit?.name} />
      </Form.Item>
      <Form.Item label='Tên lĩnh vực'>
        <Select
          showSearch
          placeholder='Chọn lĩnh vực...'
          optionFilterProp='children'
          onChange={onChangeDepartment}
          value={unit?.fieldName}>
          {fields?.map((item) => (
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
          value={unit?.description}
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
