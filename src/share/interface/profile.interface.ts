import { BaseInterface } from './base.interface'

export interface ProfileInterface extends BaseInterface {
  phone?: number
  address?: string
  fieldName?: string
  nameDocument?: string
  browsed?: boolean
  profiles?: {
    transferPaper?: object
    changementPaper?: object
    demographicDeclaration?: object
  }
  status?: string
  profileCode?: string
  assignment?: boolean
}
