import { BaseInterface } from './base.interface'

export interface Staff extends BaseInterface {
  email?: string
  image?: string | undefined
  position?: string
  phone?: number
  role?: string
  departmentId?: string
  dateOfBirth?: string
  address?: string
  cardId?: number
  username?: string
  password?: string
  homeTown?: string
}
