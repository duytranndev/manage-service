import { Action } from 'redux'
import { DepartmentInterface } from '../../share/interface/department.interface'
import { FieldInterface } from '../../share/interface/field.interface'
import { NewsInterface } from '../../share/interface/image.interface'
import { StaffInterface } from '../../share/interface/staff.interface'

export interface AppState {
  department: DepartmentState
  staff: StaffState
  field: FieldState
  news: NewsState
}

export interface DepartmentState {
  data: DepartmentInterface[]
  pending?: boolean
  error?: any
}

export interface FieldState {
  data: FieldInterface[]
  pending?: boolean
  error?: any
}
export interface NewsState {
  data: NewsInterface[]
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
