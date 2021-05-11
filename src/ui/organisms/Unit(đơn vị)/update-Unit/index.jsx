import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormUpdateUnit(props) {
  const { data } = props //tuỳ vào prop của state
  const [unit, setUnit] = useState()

  useEffect(() => {
    return setUnit(data)
  }, [data])

  const handleOnChange = (e) => {
    setUnit({ ...unit, [e.target.name]: e.target.value })
  }

  async function handleOnSubmit() {
    // moduleApi.create(STAFF_URL, newStaff).then((res) => console.log('res.data :>> ', res.data.data))
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Cư trú và giấy tờ tuỳ thân'>
        <Input placeholder='Nhập cư trú và giấy tờ tuỳ thân...' name='hokhau' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Hôn nhân và gia đình'>
        <Input placeholder='Nhập hôn nhân và gia đình...' name='mota' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Tên đơn vị'>
        <Input placeholder='Nhập tên đơn vị...' name='unitCode' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Mã đơn vị'>
        <Input placeholder='Nhập mã đơn vị...' name='unitCode' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Tên lĩnh vực'>
        <Input placeholder='Nhập tên lĩnh vực...' name='unitCode' onChange={handleOnChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
