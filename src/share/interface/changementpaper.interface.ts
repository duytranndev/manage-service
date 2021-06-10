export interface ChangementPaperInterface {
  name?: string
  dayOfBirth?: string
  birthplace?: string // nơi sinh
  gender?: string // giới tính
  nameOwn?: string //họ tên chủ hộ nơi đi
  homeTown?: string // nguyên quán
  member?: []
  nation?: string // dân tộc
  religion?: string // tôn giáo
  address?: string // địa chỉ
  domicile?: string // nguyên quán
  nationality?: string // quốc tịch
  cardId?: number
  relative?: string // quan hệ
  reason?: string //lý do
  destination?: string // nơi chuyển đến
  passport?: number //hộ chiếu
  temporaryAddress?: string //địa chỉ hiện tại
  phone?: number //số điện thoại
  namePeopleChange?: string // tên người có thay đổi hộ khẩu nhân khẩu
  genderPeopleChange?: string //giới tính người thay đổi
  dayOfBirthPeopleChange?: string // ngày sinh người thay đổi
  nationPeopleChange?: string // dân tộc người thay đổi
  nationalityPeopleChange?: string // quốc tịch người thay đổi
  cardIdPeopleChange?: number //
  passportPeopleChange?: number // hộ chiếu người thay đổi
  birthplacePeopleChange?: string // nơi sinh người thay đổi
  homeTownPeopleChange?: string // quê quán người thay đổi
  occupationsPeopleChange?: string // nghề nghiệp
  addressPeopleChange?: string // địa chỉ người thay đổi
  temporaryAddressPeopleChange?: string // địa chỉ hiện nay người thay đổi
  phonePeopleChange?: number //số điện thoại người thay đổi
  content?: string
}
