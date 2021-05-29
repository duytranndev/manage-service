import { Grid } from '@material-ui/core'
import { Button, Descriptions, Form, Input, TreeSelect } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { TreeNode } from 'rc-tree-select'
import React, { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { ASSIGNMENT_URL, PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { DepartmentInterface } from '../../../../share/interface/department.interface'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { fetchDepartments } from '../../../../store/recuders/department.reducer'
import { fetchStaffs } from '../../../../store/recuders/staff.reducer'
import { AppState } from '../../../../store/types'
import './index.scss'

const layout = {
  wrapperCol: {
    span: 16
  }
}

type AssignmentProps = {
  data?: ProfileInterface
}

const Assignment = ({ data }: AssignmentProps): JSX.Element => {
  const [formValue, setFormValue] = useState<any>()
  const [value, setValue] = useState<string>()
  const departments = useSelector<AppState, DepartmentInterface[]>((state) => state.department.data)
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (staffs.length === 0) {
      dispatch(fetchStaffs())
    }
  }, [])
  useEffect(() => {
    if (departments.length === 0) {
      dispatch(fetchDepartments())
    }
  }, [])

  const onChange = (value: any) => {
    setValue(value as string)
  }
  const convertSelect = (DepartmentArr: DepartmentInterface[], StaffArr: StaffInterface[]) => {
    return DepartmentArr.map((department) => {
      const subMenu = StaffArr.filter((staff) => staff.departmentId === department._id)
      return { ...department, subMenu: subMenu }
    })
  }
  const selects = useMemo(() => convertSelect(departments, staffs), [departments, staffs])

  const handleOnChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!value) {
      toast.error('Người duyệt không được bỏ trống!!')
      return null
    }

    const updateProfile = {
      ...data,
      assignment: true
    }

    moduleApi.update(PROFILE_URL, updateProfile)
    const staff = staffs.find((item) => item._id === value)
    const newAssignment = {
      ...formValue,
      profileId: data?._id,
      profileCode: data?.profileCode,
      staffId: value,
      staffName: staff?.name
    }

    const myPromise = moduleApi.create(ASSIGNMENT_URL, newAssignment)
    await toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Phân công thành công',
      error: 'phân công thất bại'
    })
    const status = await myPromise.then((res) => res.data.message)
    const response = await myPromise.then((res) => res.data.data)
    if (status === 'success') {
      // dispatch({ type: CREATE_STAFF, payload: data })
      // setFormData({})
      // setImage('')
      setFormValue(null)
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={7} style={{ border: '1px solid #ddd' }}>
          <Descriptions
            labelStyle={{ fontSize: '110%' }}
            layout='vertical'
            style={{ padding: 10 }}
            bordered
            title='Chi tiết hồ sơ'
            size='small'>
            <Descriptions.Item label='Tên người gửi'>{data?.name}</Descriptions.Item>
            <Descriptions.Item label='Lĩnh vực'>{data?.fieldName}</Descriptions.Item>
            <Descriptions.Item label='Mã hồ sơ'>{data?.profileCode}</Descriptions.Item>
            <Descriptions.Item label='Dịch vụ'>{data?.nameDocument}</Descriptions.Item>
          </Descriptions>
          <section className='note'>
            <span className='title'>Ghi chú</span>
            <TextArea name='note' onChange={handleOnChange} rows={4} className='ant-input'></TextArea>
          </section>
          <section className='note'>
            <span className='title'>Nội dung</span>
            <TextArea name='content' onChange={handleOnChange} rows={6} className='ant-input'></TextArea>
          </section>
        </Grid>
        <Grid item xs={5} style={{ border: '1px solid #ddd' }}>
          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 15 }}
            style={{ margin: '20px' }}
            layout='horizontal'
            hideRequiredMark
            onSubmitCapture={handleSubmit}>
            <Form.Item label='Ngày bắt đầu'>
              <Input name='timeStart' type='date' onChange={handleOnChange} />
            </Form.Item>

            <Form.Item label='Ngày hoàn thành'>
              <Input name='timeEnd' type='date' onChange={handleOnChange} />
            </Form.Item>
            <Form.Item label='Chọn người duyệt'>
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder='Chọn thành viên duyệt'
                allowClear
                treeDefaultExpandAll
                onChange={onChange}>
                {selects.map((item: any, index) => {
                  return (
                    <TreeNode key={item.name} value={item.name as string} title={item.name}>
                      {item.subMenu &&
                        item.subMenu.map((staff: StaffInterface) => (
                          <TreeNode key={staff._id} value={staff._id as string} title={staff.name} />
                        ))}
                    </TreeNode>
                  )
                })}
              </TreeSelect>
            </Form.Item>

            <Form.Item style={{ marginLeft: '40%' }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* <section className='note'>
            <span className='title'>Ngày hoàn thành</span>
            <DatePicker style={{ width: '100%', marginTop: '10px' }} />
          </section> */}
        </Grid>
      </Grid>
    </>
  )
}
export default Assignment
