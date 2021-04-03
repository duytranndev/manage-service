import { BaseInterface } from './base.interface'

export interface News extends BaseInterface {
  title: string
  content: string
  image?: string
}
