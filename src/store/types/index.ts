import { Action } from 'redux'
import { DepartmentInterface } from '../../share/interface/department.interface'
import { FieldInterface } from '../../share/interface/field.interface'
import { NewsInterface } from '../../share/interface/image.interface'
import { ProfileInterface } from '../../share/interface/profile.interface'
import { ServiceInterface } from '../../share/interface/service.interface'
import { StaffInterface } from '../../share/interface/staff.interface'
import { UnitInterface } from '../../share/interface/unit.interface'

export interface AppState {
  department: DepartmentState
  staff: StaffState
  field: FieldState
  news: NewsState
  unit: UnitState
  service: ServiceState
  profile: ProfileState
  authentication: AuthenticationState
  user: UserState
}

export interface DepartmentState {
  data: DepartmentInterface[]
  pending?: boolean
  error?: any
}
export interface AuthenticationState {
  loggingIn: boolean
  data: StaffInterface
  error?: any
}
export interface ProfileState {
  data: ProfileInterface[]
  pending?: boolean
  error?: any
}

export interface ServiceState {
  data: ServiceInterface[]
  pending?: boolean
  error?: any
}
export interface UnitState {
  data: UnitInterface[]
  pending?: boolean
  error?: any
}

export interface UserState {
  data: StaffInterface
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
  pending: boolean
  error?: any
}
export interface AppAction extends Action {
  payload?: any
  error: any
}
