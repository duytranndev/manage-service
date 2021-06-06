import { Button, Form, Input } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { DEPARTMENT_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { UPDATE_DEPARTMENT } from '../../../../store/actions/department.action'

const layout = {
  wrapperCol: {
    span: 16
  }
}

type EditDepartmentProps = {
  data?: DepartmentInterface
}
const EditDepartment = ({ data }: EditDepartmentProps): JSX.Element => {
  const [department, setDepartment] = useState<DepartmentInterface>()
  const dispatch = useDispatch()

  useEffect(() => {
    return setDepartment(data)
  }, [data])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartment({ ...department, [e.target.name]: e.target.value })
  }

  async function handleOnSubmit(e: any) {
    e.preventDefault()
    const myPromise = moduleApi.update(DEPARTMENT_URL, department)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Sửa phòng ban thành công',
      error: 'Sửa phòng ban thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    if (status === 'success') {
      // dispatch({ type: CREATE_DEPARTMENT, payload: data })
      dispatch({ type: UPDATE_DEPARTMENT, payload: department })
      setDepartment({})
    }
  }
  return (
    <>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        layout='horizontal'
        hideRequiredMark
        onSubmitCapture={(e) => handleOnSubmit(e)}>
        <Form.Item label='Tên Phòng Ban'>
          <Input
            required
            placeholder='Nhập tên phòng ban...'
            name='name'
            onChange={handleOnChange}
            value={department?.name}
          />
        </Form.Item>

        <Form.Item label='Mã phòng ban'>
          <Input
            placeholder='Nhập mã phòng ban'
            name='departmentCode'
            onChange={handleOnChange}
            value={department?.departmentCode}
          />
        </Form.Item>

        <Form.Item label='Miêu tả'>
          <Input
            placeholder='Nhập nội dung miêu tả'
            name='description'
            onChange={handleOnChange}
            value={department?.description}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
          <Button type='primary' htmlType='submit'>
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default EditDepartment
