import { Action } from 'redux'
import { DepartmentInterface } from '../../share/interface/department.interface'

export interface AppState {
  department: DepartmentState
}

export interface DepartmentState {
  data: DepartmentInterface[]
  pending?: boolean
  error?: any
}

export interface AppAction extends Action {
  payload?: any
  error: any
}
