import { BaseInterface } from './base.interface'

export interface BirthCertificateInterface extends BaseInterface {
  nameMother?: string
  dayOfBirthMother?: string
  address?: string
  codeBH?: string
  carId?: string
  dateOfIssue?: string // ngày cấp
  placeOfIssue?: string // nơi cấp
  nation?: string // dân tộc
  nameFather?: string
  birthTime?: string
  hour?: string
  minute?: string
  day?: string
  month?: string
  year?: string
  placeOfBirth?: string
  numberOfChildren?: string
  gender?: string
  weight?: string
  name?: string
  note?: string
}
