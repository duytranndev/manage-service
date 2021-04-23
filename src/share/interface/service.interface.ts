import { BaseInterface } from './base.interface'

export interface ServiceInterface extends BaseInterface {
  description?: string
  serviceCode?: string
  unitId?: string
  fieldName?: string
  unitName?: string
}
