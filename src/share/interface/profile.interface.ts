import { BaseInterface } from './base.interface'
import { BirthCertificateInterface } from './birth-certificate.interface'
import { ChangementPaperInterface } from './changementpaper.interface'
import { DemographicDeclarationInterface } from './demographicdeclaration.interface'
import { MarriageRegistrationInterface } from './MarriageRegistration.interface'
import { RegistrationDeclaredPaperBirthInterface } from './RegistrationDeclaredPaperbirth.interface'
import { TransferPaperInterface } from './transferpaper.interface'

export interface ProfileInterface extends BaseInterface {
  phone?: number
  address?: string
  fieldName?: string
  nameDocument?: string
  browsed?: boolean
  profiles?: {
    transferPaper?: TransferPaperInterface
    changementPaper?: ChangementPaperInterface
    demographicDeclaration?: DemographicDeclarationInterface
    birthCertificate?: BirthCertificateInterface
    registrationDeclaredPaperBirth?: RegistrationDeclaredPaperBirthInterface
    registrationBook?: {
      numberRegistrationBook?: string
      nameOwn?: string
      numberProfileRegistrationBook?: string
    }
    marriageRegistrationStatement?: MarriageRegistrationInterface
  }
  status?: string
  profileCode?: string
  assignment?: boolean
}
