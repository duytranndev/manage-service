import { Col, Collapse, DatePicker, Form, Input, Radio, Row } from 'antd'
import React, { useState } from 'react'
const { Panel } = Collapse

export default function TransferPaper() {
  const [value, setValue] = useState('')
  const handleOnSubmit = () => {}

  const onChangeGender = (e: any) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  function onChange({ value, dateString }: any) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  function onOk(value: any) {
    console.log('onOk: ', value)
  }
  const header = <h5>Thông tin về người khai báo</h5>
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header={header} key='1'>
        <Form layout='horizontal' hideRequiredMark onSubmitCapture={handleOnSubmit}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item label='Họ và tên'>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Tên gọi khác (nếu có)'>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Ngày tháng năm sinh'>
                <DatePicker showTime onChange={onChange} onOk={onOk} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Giới tính'>
                <Radio.Group onChange={onChangeGender} value={value}>
                  <Radio value='Nam'>Nam</Radio>
                  <Radio value='Nữ'>Nữ</Radio>
                  <Radio value='Khác'>Khác</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
      <Panel header='This is panel header 2' key='2'></Panel>
      <Panel header='This is panel header 3' key='3'></Panel>
    </Collapse>
    // <Form
    //   labelCol={{ span: 3 }}
    //   wrapperCol={{ span: 20 }}
    //   layout='horizontal'
    //   hideRequiredMark
    //   onSubmitCapture={handleOnSubmit}>
    //   <Form.Item label='Tiêu đề'>
    //     <Input placeholder='Basic usage' name='title' />
    //   </Form.Item>
    // </Form>
  )
}
