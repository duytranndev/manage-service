import { BaseInterface } from './base.interface'

export interface Department extends BaseInterface {
  slug: string
  description?: string
  code: string
}
