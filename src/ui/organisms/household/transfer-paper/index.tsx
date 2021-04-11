import { Col, Collapse, DatePicker, Form, Input, Radio, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
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
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header='Giấy chuyển hộ khẩu (HK07)' key='1'>
        <Form layout='horizontal' wrapperCol={{ span: 20 }} hideRequiredMark onSubmitCapture={handleOnSubmit}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Họ và tên' labelCol={{ span: 7 }}>
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
                <DatePicker size='small' showTime onChange={onChange} onOk={onOk} />
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

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi sinh' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Nguyên quán'>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label='Dân tộc' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Quốc tịch' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Tôn giáo' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi thường trú' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Họ tên chủ hộ nơi đi' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Quan hệ với chủ hộ' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={16}>
              <Form.Item label='Lý do chuyển hộ khẩu'>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi chuyển đến' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>

      <Panel header='Phiếu báo thay đổi hộ khẩu, nhân khẩu (HK02)' key='2'>
        <Form layout='horizontal' wrapperCol={{ span: 20 }} hideRequiredMark onSubmitCapture={handleOnSubmit}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Họ và tên' labelCol={{ span: 7 }}>
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
                <DatePicker size='small' showTime onChange={onChange} onOk={onOk} />
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

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi sinh' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Nguyên quán'>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label='Dân tộc' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Quốc tịch' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Tôn giáo' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi thường trú' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Họ tên chủ hộ nơi đi' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Quan hệ với chủ hộ' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={16}>
              <Form.Item label='Lý do chuyển hộ khẩu'>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi chuyển đến' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
      <Panel header='Bản khai nhân khẩu (HK01)' key='3'>
        <Form layout='horizontal' wrapperCol={{ span: 20 }} hideRequiredMark onSubmitCapture={handleOnSubmit}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Họ và tên' labelCol={{ span: 7 }}>
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
                <DatePicker size='small' showTime onChange={onChange} onOk={onOk} />
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

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi sinh' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Nguyên quán'>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label='Dân tộc' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Quốc tịch' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Tôn giáo' labelCol={{ span: 11 }} wrapperCol={{ span: 15 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi thường trú' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Họ tên chủ hộ nơi đi' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Quan hệ với chủ hộ' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={16}>
              <Form.Item label='Lý do chuyển hộ khẩu'>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label='Nơi chuyển đến' labelCol={{ span: 7 }}>
                <Input placeholder='Basic usage' name='name' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
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
