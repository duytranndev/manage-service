import { Action } from 'redux'
import { DepartmentInterface } from '../../share/interface/department.interface'
import { StaffInterface } from '../../share/interface/staff.interface'

export interface AppState {
  department: DepartmentState
  staff: StaffState
}

export interface DepartmentState {
  data: DepartmentInterface[]
  pending?: boolean
  error?: any
}

export interface StaffState {
  data: StaffInterface[]
  pending?: boolean
  error?: any
}
export interface AppAction extends Action {
  payload?: any
  error: any
}
