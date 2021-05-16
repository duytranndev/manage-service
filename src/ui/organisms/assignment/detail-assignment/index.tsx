import { Descriptions } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ASSIGNMENT_URL, PROFILE_URL } from '../../../../share/common/api/api.constants'
import { moduleApi } from '../../../../share/handle/fetchData'
import { AssignmentInterface } from '../../../../share/interface/assignment.inteface'
import { ProfileInterface } from '../../../../share/interface/profile.interface'
import { StaffInterface } from '../../../../share/interface/staff.interface'
import { AppState } from '../../../../store/types'

const AssignmentDetail = (): JSX.Element => {
  const { slug } = useParams<any>()
  const [profiles, setProfiles] = useState<ProfileInterface[]>()
  const [profile, setProfile] = useState<ProfileInterface>()
  const [assignments, setAssignments] = useState<AssignmentInterface[]>()
  const [assignment, setAssignment] = useState<AssignmentInterface>()
  const staffs = useSelector<AppState, StaffInterface[]>((state) => state.staff.data)

  useEffect(() => {
    moduleApi.get(ASSIGNMENT_URL).then((res) => setAssignments(res.data.data))
  }, [])

  useEffect(() => {
    moduleApi.get(PROFILE_URL).then((res) => setProfiles(res.data.data))
  }, [])

  useEffect(() => {
    setProfile(profiles?.find((item) => item.profileCode === slug))
  }, [slug, profiles])

  useEffect(() => {
    setAssignment(assignments?.find((item) => item.profileCode === slug))
  }, [slug, assignments])

  return (
    <Descriptions
      labelStyle={{ fontSize: '110%' }}
      layout='vertical'
      style={{ padding: 10 }}
      bordered
      title='Chi tiết phân công'
      size='small'>
      <Descriptions.Item label='Tên người gửi'>{profile?.name}</Descriptions.Item>
      <Descriptions.Item label='Lĩnh vực'>{profile?.fieldName}</Descriptions.Item>
      <Descriptions.Item label='Mã hồ sơ'>{profile?.profileCode}</Descriptions.Item>
      <Descriptions.Item label='Trạng thái'>
        {(profile?.status as any) === true ? 'Đã duyệt' : 'Chưa duyệt'}
      </Descriptions.Item>
      <Descriptions.Item label='Dịch vụ'>{profile?.nameDocument}</Descriptions.Item>
      <Descriptions.Item label='Người duyệt'>
        {staffs.find((staff) => staff._id === assignment?.staffId)?.name}
      </Descriptions.Item>
      <Descriptions.Item label='Ngày bắt đầu'>{assignment?.timeStart}</Descriptions.Item>
      <Descriptions.Item label='Ngày kết thúc'>{assignment?.timeEnd}</Descriptions.Item>
      <Descriptions.Item label='Mô tả'>{assignment?.note}</Descriptions.Item>
      <Descriptions.Item label='Nội dung'>{assignment?.content}</Descriptions.Item>
    </Descriptions>
  )
}
export default AssignmentDetail
