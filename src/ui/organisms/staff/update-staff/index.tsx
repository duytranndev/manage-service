import { Button, Form, Input, Select } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { UPDATE_STAFF } from '../../../../store/actions/staff.action'
import { LOGIN_REQUEST } from '../../../../store/actions/user.action'
import { AppState } from '../../../../store/types'

const Option = Select.Option

const layout = {
  wrapperCol: {
    span: 16
  }
}

export default function FormUpdateStaff(props: any) {
  const { data } = props //tuỳ vào prop của state
  const [staff, setStaff] = useState<StaffInterface>()
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const dispatch = useDispatch()

  useEffect(() => {
    return setStaff(data)
  }, [data])

  function onChangeDepartment(value: string) {
    const departmentName = departments.find((item) => item._id === value)
    setStaff({ ...staff, departmentId: value, department: departmentName?.name })
    // setDepartment(value)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStaff({ ...staff, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const updateStaff = moduleApi.update(STAFF_URL, staff)
    await toast.promise(updateStaff, {
      loading: 'Loading',
      success: 'Sửa thông tin nhân viên thành công',
      error: 'Sửa thông tin nhân viên thất bại'
    })
    const status = await updateStaff.then((res) => res.data.message)
    if (status === 'success') {
      // dispatch({ type: CREATE_DEPARTMENT, payload: data })
      dispatch({ type: UPDATE_STAFF, payload: staff })
      dispatch({ type: LOGIN_REQUEST, payload: staff })
      setStaff({})
    }
  }

  // const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  // }

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 15 }}
      layout='horizontal'
      hideRequiredMark
      onSubmitCapture={handleOnSubmit}>
      <Form.Item label='Email'>
        <Input placeholder='Basic usage' name='email' value={staff?.email} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Tên đăng nhập'>
        <Input placeholder='Basic usage' name='username' value={staff?.username} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Mật khẩu'>
        <Input placeholder='Basic usage' name='password' value={staff?.password} onChange={handleOnChange} />
      </Form.Item>

      <Form.Item label='Họ và tên'>
        <Input placeholder='Basic usage' name='name' value={staff?.name} onChange={handleOnChange} />
      </Form.Item>
      {/* <Form.Item label='Ngày sinh'>
        <DatePicker value={staff?.dateOfBirth as any} onChange={onChange} />
      </Form.Item> */}
      <Form.Item label='Địa chỉ'>
        <Input placeholder='Basic usage' name='password' value={staff?.address} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Quê quán'>
        <Input placeholder='Basic usage' name='password' value={staff?.homeTown} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Số CMND/CCCD'>
        <Input placeholder='Basic usage' name='password' value={staff?.cardId} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Số điện thoại'>
        <Input placeholder='Basic usage' name='password' value={staff?.phone} onChange={handleOnChange} />
      </Form.Item>

      <Form.Item label='Phòng ban'>
        <Select
          showSearch
          placeholder='Chọn phòng ban...'
          value={staff?.department}
          optionFilterProp='children'
          onChange={onChangeDepartment}>
          {departments.map((item) => (
            <Option key={item._id} value={item._id as string}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label='Chức vụ'>
        <Input placeholder='Basic usage' name='password' value={staff?.position} onChange={handleOnChange} />
      </Form.Item>
      <Form.Item label='Quyền hạn'>
        <Input placeholder='Basic usage' name='password' value={staff?.role} onChange={handleOnChange} />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type='primary' htmlType='submit'>
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  )
}
