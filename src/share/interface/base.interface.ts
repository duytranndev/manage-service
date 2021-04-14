import { Unknown } from './unknown'

export interface BaseInterface extends Unknown {
  name?: string
  _id?: string
  slug?: string
  insertTime?: string
}
