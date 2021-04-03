import { BaseInterface } from './base.interface'

export interface Staff extends BaseInterface {
  email?: string
  image: string
  position: string
  phone: number
  role: string
  department: string
  dateOfBirth?: string
  address?: string
  cardId: number
  username: string
  password: string
  homeTown?: string
}
