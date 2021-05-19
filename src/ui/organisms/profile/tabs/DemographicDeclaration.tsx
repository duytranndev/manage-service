import { Grid } from '@material-ui/core'
import { DemographicDeclarationInterface } from '../../../../share/interface/demographicdeclaration.interface'

type DemographicDeclarationProp = {
  data?: DemographicDeclarationInterface
}

const DemographicDeclaration = ({ data }: DemographicDeclarationProp): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <p className='MsoNormal' style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '13px' }}>Số:……./GCHK</span>
        </p>
        <p className='MsoNormal'>
          <span style={{ fontSize: '13px' }}>&nbsp;</span>
        </p>
        <p className='MsoNormal'>
          <span style={{ fontSize: '13px' }}>&nbsp;</span>
        </p>
      </Grid>
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
      <Grid item xs={3}>
        <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
          <span style={{ fontSize: '13px' }}>Mẫu HK01</span>
          <span style={{ fontSize: '13px' }}>&nbsp;Ban hành theo TT số 36/2014/TT-BCA ngày 09/9/2014</span>
        </p>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <p className='MsoNormal'>
          <strong>
            <span style={{ fontSize: '15px' }}>BẢN KHAI NHÂN KHẨU</span>
          </strong>
        </p>
        <p className='MsoNormal'>
          <span style={{ fontSize: '15px' }}>(Dùng cho người từ đủ 14 tuổi trở lên)</span>
        </p>
      </Grid>

      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            1. Họ và tên <sup>(1)</sup>:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.name}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            2. Tên gọi khác (nếu có):
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {/* {data?.name} */}
          </span>
        </p>
      </Grid>

      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            3. Ngày, tháng, năm sinh:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.dayOfBirth}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            4. Giới tính:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.gender}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            5. Nơi sinh:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.birthPlace}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            6. Nguyên quán:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.homeTown}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            7. Dân tộc:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nation}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.0in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            8. Tôn giáo:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.religion}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.0in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            9. Quốc tịch:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nationality}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            10. CMND số:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.cardId}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            11. Hộ chiếu số:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.passport}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            12. Nơi thường trú:
          </span>

          <span className='content'> {data?.address}</span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            13. Địa chỉ chỗ ở hiện nay:
          </span>

          <span className='content'> {data?.address}</span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            14. Trình độ học vấn:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.education}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal'>
          <span className='title' style={{ fontSize: '15px' }}>
            15. Trình độ chuyên môn:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.specialize}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            16. Biết tiếng dân tộc:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.ethnicity}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal'>
          <span className='title' style={{ fontSize: '15px' }}>
            17. Trình độ ngoại ngữ:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.foreignLanguage}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            18. Nghề nghiệp, nơi làm việc:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.occupations}
          </span>
        </p>
      </Grid>

      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            19. Tiền án (Tội danh, hình phạt, theo bản án số, ngày, tháng, năm của Tòa án):
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.criminalRecord}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            20. Tóm tắt về gia đình (Bố, mẹ; vợ/chồng; con; anh, chị, em ruột):
          </span>
        </p>
      </Grid>

      <Grid item xs={12}>
        <table
          className='MsoNormalTable'
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: 'none'
          }}>
          <tbody>
            <tr>
              <td style={{ width: '33.9pt', border: 'solid windowtext 1.0pt', padding: '0in 0in 0in 0in' }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>TT</span>
                </p>
              </td>
              <td
                style={{
                  width: '74.55pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',
                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Họ và tên</span>
                </p>
              </td>
              <td
                style={{
                  width: '49.25pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Ngày, tháng, năm sinh</span>
                </p>
              </td>
              <td
                style={{
                  width: '47.45pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Giới tính</span>
                </p>
              </td>
              <td
                style={{
                  width: '85.4pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Quan hệ</span>
                </p>
              </td>

              <td
                style={{
                  width: '51.85pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Nghề nghiệp</span>
                </p>
              </td>
              <td
                style={{
                  width: '48.6pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Địa chỉ chỗ ở hiện nay</span>
                </p>
              </td>
            </tr>

            {data?.member?.map((item: any, index) => {
              return (
                <tr key={index} style={{ textAlign: 'center' }}>
                  <td
                    style={{
                      width: '33.9pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{index + 1}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '74.55pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.name}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '49.25pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.dayOfBirth}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '47.45pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',

                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.gender}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '85.4pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.domicile}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '47.45pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.nation}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '48.5pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',

                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.nationality}</span>
                    </p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Grid>

      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            21. Tóm tắt về bản thân (Từ đủ 14 tuổi trở lên đến nay ở đâu, làm gì):
          </span>
        </p>
      </Grid>

      <br />

      <Grid item xs={12}>
        <table
          className='MsoNormalTable'
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: 'none'
          }}>
          <tbody>
            <tr>
              <td style={{ width: '33.9pt', border: 'solid windowtext 1.0pt', padding: '0in 0in 0in 0in' }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>TT</span>
                </p>
              </td>
              <td
                style={{
                  width: '74.55pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',
                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Từ tháng, năm đến tháng, năm</span>
                </p>
              </td>
              <td
                style={{
                  width: '49.25pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>
                    Chỗ ở (Ghi rõ số nhà, đường phố; thôn, xóm, làng, ấp, bản, buôn, phum, sóc; xã/ phường/thị trấn;
                    quận/ huyện; tỉnh/ thành phố. Nếu ở nước ngoài thì ghi rõ tên nước)
                  </span>
                </p>
              </td>
              <td
                style={{
                  width: '47.45pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Nghề nghiệp, nơi làm việc</span>
                </p>
              </td>
            </tr>

            {data?.member?.map((item: any, index) => {
              return (
                <tr key={index} style={{ textAlign: 'center' }}>
                  <td
                    style={{
                      width: '10%',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{index + 1}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '20%',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.name}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '50%',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.dayOfBirth}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '20%',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',

                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.gender}</span>
                    </p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Grid>

      <br />

      <Grid item>
        <table
          className='MsoNormalTable'
          style={{
            border: 'none',
            borderCollapse: 'collapse',
            marginLeft: '70px'
          }}>
          <tbody>
            <tr>
              <td style={{ width: '237.9pt', padding: '0in 0in 0in 0in' }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                  <span style={{ fontSize: '13px' }}>&nbsp;</span>
                </p>
              </td>
              <td style={{ width: '199.85pt', padding: '0in 0in 0in 0in' }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <em>
                    <span style={{ fontSize: '13px' }}>
                      …….., ngày…tháng…năm…
                      <br />
                      &nbsp;
                    </span>
                  </em>
                  <span style={{ fontSize: '13px' }}>
                    TRƯỞNG CÔNG AN………
                    <br /> <em>(Ký, ghi rõ họ tên và đóng dấu)</em>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
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
                (2) Ghi rõ trình độ học vấn cao nhất (Tiến sỹ, Thạc sỹ, Đại học, Cao đẳng, Trung cấp, tốt nghiệp phổ
                thông trung học, tốt nghiệp phổ thông cơ sở...; nếu không biết chữ thì ghi rõ "không biết chữ");
              </span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>
                (3) Ghi rõ chuyên ngành được đào tạo hoặc trình độ tay nghề, bậc thợ, chuyên môn kỹ thuật khác được ghi
                trong văn bằng, chứng chỉ.
              </span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>
                (4) Ghi cả cha, mẹ, con nuôi; người nuôi dưỡng; người giám hộ theo quy định của pháp luật (nếu có).
              </span>
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
export default DemographicDeclaration
