export interface DemographicDeclarationInterface {
  name?: string
  dayOfBirth?: string
  birthPlace?: string // nơi sinh
  gender?: string // giới tính
  homeTown?: string // nguyên quán
  nation?: string // dân tộc
  religion?: string // tôn giáo
  address?: string // địa chỉ
  temporaryAddress?: string //địa chỉ hiện tại
  domicile?: string // nguyên quán
  nationality?: string // quốc tịch
  cardId?: number
  occupations?: string // nghề nghiệp
  reason?: string //lý do
  passport?: number //hộ chiếu
  criminalRecord?: string // tiền án, tiền sự
  aboutFamily?: [] // tóm tắt về gia đình
  aboutYourself?: [] // tóm tắt về ban than
  education?: string // trinh do hoc van
  specialize?: string // trinh do chuyen mon
  ethnicity?: string // tieng dan toc
  foreignLanguage?: string // trinh do ngoai ngu
}
