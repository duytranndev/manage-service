import { Grid } from '@material-ui/core'
import { BirthCertificateInterface } from '../../../../share/interface/birth-certificate.interface'

type TabBirthCertificateProps = {
  data?: BirthCertificateInterface
}

const BirthCertificate = ({ data }: TabBirthCertificateProps): JSX.Element => {
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
            <span style={{ fontSize: '15px' }}>GIẤY CHỨNG SINH</span>
          </strong>
        </p>
        <p className='MsoNormal'>
          <span style={{ fontSize: '15px' }}>Kính gửi: …………………………….</span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Họ và tên mẹ/Người nuôi dưỡng:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nameMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Ngày sinh:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dayOfBirthMother}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Nơi đăng ký thường trú:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.address}
          </span>
        </p>
      </Grid>

      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Mã số BHXH/Thẻ BHYT số:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.codeBH}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Giấy CMND/Thẻ CCCD/Hộ chiếu số:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.carId}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Ngày cấp:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dateOfIssue}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Nơi cấp:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.placeOfIssue}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Dân tộc:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nation}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Họ và tên cha:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nameFather}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Đã sinh con vào lúc:
          </span>
          <span className='content'> {data?.birthTime}</span>
        </p>
      </Grid>
      <Grid item xs={8}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Tại:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.placeOfIssue}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Số con trong lần sinh này:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.numberOfChildren}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Giới tính của con:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.gender}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Cân nặng:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.weight}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Dự định đặt tên con là:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.name}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            Ghi chú
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.note}
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
export default BirthCertificate
