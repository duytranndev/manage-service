import { Grid } from '@material-ui/core'
import { RegistrationDeclaredPaperBirthInterface } from '../../../../share/interface/RegistrationDeclaredPaperbirth.interface'

type TabRegistrationDeclaredPaperBirthProps = {
  data?: RegistrationDeclaredPaperBirthInterface
}

const RegistrationDeclaredPaperBirth = ({ data }: TabRegistrationDeclaredPaperBirthProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
          <strong>
            <span style={{ fontSize: '17px' }}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
          </strong>
          <strong>
            <span style={{ fontSize: '13px' }}>
              <br />
              &nbsp;
            </span>
          </strong>
          <strong>
            <span style={{ fontSize: '19px' }}>
              Độc lập - Tự do - Hạnh phúc
              <br />
              &nbsp;
            </span>
          </strong>
          <strong style={{ marginLeft: '-10px' }}>
            <span style={{ fontSize: '13px' }}>---------------------</span>
          </strong>
        </p>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <p className='MsoNormal'>
          <strong>
            <span style={{ fontSize: '15px' }}>TỜ KHAI ĐĂNG KÝ KHAI SINH</span>
          </strong>
        </p>
        <p className='MsoNormal'>
          <span style={{ fontSize: '15px' }}>Kính gửi: …………………………….</span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Họ, chữ đệm, tên người yêu cầu:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nameRequest}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Giấy tờ tuỳ thân(2):
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.identification}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Nơi cư trú(3):
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.addressRequester}
          </span>
        </p>
      </Grid>

      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Đề nghị cơ quan đăng ký lại khai sinh cho người có tên dưới đây:
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Họ, chữ đệm, tên:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.name}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Ngày, tháng, năm sinh
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dayOfBirth}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            ghi bằng chữ
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dayOfBirthByString}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Nơi sinh:(4)
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.birthPlace}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Giới tính
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.gender}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Dân tộc:
          </span>
          <span className='content'> {data?.nation}</span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal'>
          <span className='title' style={{ fontSize: '15px' }}>
            Quốc tịch:
          </span>
          <span className='content'> {data?.nationality}</span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Quê quán:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.homeTown}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Họ, chữ đệm, tên người mẹ:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nameMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Năm sinh: (5)
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dayOfBirthMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Dân tộc:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nationMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Quốc tịch:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nationalityMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Nơi cư trú: (2)
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.addressMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Họ, chữ đệm, tên người cha:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nameFather}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Năm sinh: (5)
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dayOfBirthFather}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Dân tộc:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nationFather}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Quốc tịch:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nationalityFater}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Nơi cư trú: (2)
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.addressFather}
          </span>
        </p>
      </Grid>
      <br />
      <br />
      <Grid item>
        <div className='bottom'>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>____________</span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>(1) Viết chữ in hoa đủ dấu;</span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>
                (2) Ghi theo nơi đăng ký thường trú; nếu không có nơi đăng ký thường trú thì ghi theo nơi đăng ký tạm
                trú; trường hợp không có nơi đăng ký thường trú và nơi đăng ký tạm trú thì ghi theo nơi đang sinh sống.
              </span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>
                (3) Ghi thông tin về giấy tờ tùy thân của người đi đăng ký, ghi rõ số, cơ quan cấp, ngày cấp hộ chiếu,
                chứng minh nhân dân hoặc giấy tờ hợp lệ thay thế (Ví dụ: Chứng minh nhân dân số 001089123 do Công an
                thành phố Hà Nội cấp ngày 20/10/2014).
              </span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>
                (4) Trường hợp sinh tại cơ sở y tế thì ghi rõ tên cơ sở y tế và và địa chỉ trụ sở cơ sở y tế đó.
              </span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>(5) Ghi đầy đủ ngày, tháng sinh của cha, mẹ (nếu có).</span>
            </em>
          </p>

          <p className='MsoNormal' style={{ marginTop: '6.0pt', background: 'white' }}>
            <span style={{ fontSize: '19px', color: 'black' }}>&nbsp;</span>
          </p>
        </div>
        <p>
          <br />
        </p>
      </Grid>
    </Grid>
  )
}
export default RegistrationDeclaredPaperBirth
