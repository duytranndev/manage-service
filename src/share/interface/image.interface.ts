import { BaseInterface } from './base.interface'

export interface NewsInterface extends BaseInterface {
  title?: string
  content?: string
  description?: string
  image?: string
}
