import { BaseInterface } from './base.interface'

export interface AssignmentInterface extends BaseInterface {
  profileId: string
  staffId: string
  profileCode: string
  timeStart: string
  timeEnd: string
  status: boolean
  note: string
  content: string
}
