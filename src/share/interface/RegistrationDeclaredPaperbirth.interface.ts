import { BaseInterface } from './base.interface'

export interface RegistrationDeclaredPaperBirthInterface extends BaseInterface {
  nameRequest?: string // tên người yêu cầu
  identification?: string // giấy tờ thuỳ thân
  addressRequester?: string //Địa chỉ người yêu cầu
  name?: string
  phone?: string
  dayOfBirth?: string // ngày sinh
  dayOfBirthByString?: string // ngày sinh bằng chữ
  birthPlace?: string // nơi sinh
  gender?: string
  nation?: string // dân tộc
  nationality?: string // quốc tịch
  homeTown?: string // quê quán
  nameFather?: string
  dayOfBirthFather?: string
  nationFather?: string // dân tộc
  nationalityFater?: string // quốc tịch
  addressFather?: string
  nameMother?: string
  dayOfBirthMother?: string
  nationMother?: string // dân tộc
  nationalityMother?: string // quốc tịch
  addressMother?: string
}
