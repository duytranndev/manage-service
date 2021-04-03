import { BaseInterface } from './base.interface'

export interface Sender extends BaseInterface {
  email: string
  phone: number
  address: string
  cardId: number
  idDocument: string
}
