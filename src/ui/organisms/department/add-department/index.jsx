import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { DEPARTMENT_URL } from '../../../../share/common/api/api.constants'
import { Actor } from '../../../../share/common/app-constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { genCode } from '../../../../share/handle/getCode'
import { useForm } from '../../../../share/hooks/useForm'
import { CREATE_DEPARTMENT } from '../../../../store/actions/department.action'
const { Option } = Select

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormAddDepartment() {
  const { formData, setFormData, handleOnInput, handleInputChange, setErrors, handleSubmit, errors } = useForm(
    {},
    handleOnSubmit
  )
  const dispatch = useDispatch()

  async function handleOnSubmit() {
    console.log('sub :>> ')
    if (Object.keys(formData).length !== 0) {
      const newDepartment = {
        ...formData,
        departmentCode: genCode(formData.name)
      }
      console.log('newDepartment :>> ', newDepartment)
      const myPromise = moduleApi.create(DEPARTMENT_URL, newDepartment)
      await toast.promise(myPromise, {
        loading: 'Loading',
        success: 'Thêm phòng ban thành công',
        error: 'Thêm phòng ban thất bại'
      })
      const status = await myPromise.then((res) => res.data.message)
      const data = await myPromise.then((res) => res.data.data)
      if (status === 'success') {
        dispatch({ type: CREATE_DEPARTMENT, payload: data })
        setFormData({})
      }
    }
  }
  console.log('errors :>> ', errors)

  return (
    <>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        layout='horizontal'
        hideRequiredMark
        onSubmitCapture={(e) => handleSubmit(e, Actor.department)}>
        <Form.Item label='Tên Phòng Ban'>
          <Input
            placeholder='Nhập tên phòng ban...'
            onInput={handleOnInput}
            name='name'
            onChange={handleInputChange}
            value={formData.name}
          />
          {errors.name && (
            <p className='help is-danger' style={{ color: 'red' }}>
              *{errors.name}
            </p>
          )}
        </Form.Item>

        <Form.Item label='Miêu tả'>
          <Input
            placeholder='Nhập nội dung miêu tả'
            onInput={handleOnInput}
            name='description'
            onChange={handleInputChange}
            value={formData.description}
          />
          {errors.description && (
            <p className='help is-danger' style={{ color: 'red' }}>
              *{errors.description}
            </p>
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Toaster />
    </>
  )
}
