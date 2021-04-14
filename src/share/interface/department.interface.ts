import { BaseInterface } from './base.interface'

export interface DepartmentInterface extends BaseInterface {
  slug: string
  description?: string
  code: string
  departmentCode: string
  totalStaff: string
}
