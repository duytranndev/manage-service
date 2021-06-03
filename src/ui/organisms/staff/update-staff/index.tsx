import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { CLOUD_URI, PRESENT, STAFF_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { uploadSingle } from '../../../../share/handle/upload'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { UPDATE_STAFF } from '../../../../store/actions/staff.action'
import { fetchDepartments } from '../../../../store/recuders/department.reducer'
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
  const [departmentId, setDepartmentId] = useState(staff?.departmentId)
  const dispatch = useDispatch()
  const [dateOfBirth, setDateOfBirth] = useState(staff?.dateOfBirth)
  const [image, setImage] = useState(staff?.image)

  useEffect(() => {
    if (departments.length === 0) {
      dispatch(fetchDepartments())
    }
  }, [])

  useEffect(() => {
    setDateOfBirth(data.dateOfBirth)
    setImage(data.image)
    setDepartmentId(data.departmentId)
    return setStaff(data)
  }, [data])

  function onChangeDepartment(value: string) {
    // setStaff({ ...staff, departmentId: value })
    setDepartmentId(value)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStaff({ ...staff, [e.target.name]: e.target.value })
  }

  function onChangeDate(value: any, dateString: any) {
    setDateOfBirth(dateString)
  }
  const handleOnChangeImage = async (e: any) => {
    setImage(e.target.files[0])
    const pathImage = e.target.files[0]
    const uploadImagle = uploadSingle(pathImage, CLOUD_URI, PRESENT)
    await toast
      .promise(uploadImagle, {
        loading: 'Loading',
        success: 'Thêm hình ảnh thành công',
        error: 'Thêm hình ảnh thất bại'
      })
      .then((res) => setImage(res.data.url))
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const newStaff = {
      ...staff,
      image,
      dateOfBirth,
      departmentId
    }
    const updateStaff = moduleApi.update(STAFF_URL, newStaff)
    await toast.promise(updateStaff, {
      loading: 'Loading',
      success: 'Sửa thông tin nhân viên thành công',
      error: 'Sửa thông tin nhân viên thất bại'
    })
    const status = await updateStaff.then((res) => res.data.message)
    if (status === 'success') {
      // dispatch({ type: CREATE_DEPARTMENT, payload: data })
      dispatch({ type: UPDATE_STAFF, payload: newStaff })
      setStaff({})
    }
  }

  console.log('departmentId :>> ', departmentId)

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
      <Form.Item label='Hình ảnh'>
        <div className='file-field input-field'>
          <div className='btn'>
            <input type='file' name='image' onChange={handleOnChangeImage} />
          </div>
        </div>
      </Form.Item>
      <Form.Item label='Ngày sinh'>
        <DatePicker onChange={onChangeDate} />
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
