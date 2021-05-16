import { Grid } from '@material-ui/core'
import { TransferPaperInterface } from '../../../../share/interface/transferpaper.interface'

type TabTransferPaperProps = {
  data?: TransferPaperInterface
}

const TransferPaper = ({ data }: TabTransferPaperProps): JSX.Element => {
  console.log('data :>> ', data)
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
          <span style={{ fontSize: '13px' }}>Mẫu HK07</span>
          <span style={{ fontSize: '13px' }}>&nbsp;ban hành theo TT số 36/2014/TT-BCA ngày 09/9/2014</span>
        </p>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <p className='MsoNormal'>
          <strong>
            <span style={{ fontSize: '15px' }}>GIẤY CHUYỂN HỘ KHẨU</span>
          </strong>
        </p>
        <p className='MsoNormal'>
          <span style={{ fontSize: '15px' }}>(Phần cấp cho người chuyển hộ khẩu)</span>
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
            {data?.birthplace}
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
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            8. Tôn giáo:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.religion}
          </span>
        </p>
      </Grid>
      <Grid item xs={4}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            9. Quốc tịch:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nationality}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            10. Nơi thường trú:
          </span>

          <span className='content'> {data?.address}</span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            11. Họ và tên chủ hộ nơi đi:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.nameOwn}
          </span>
        </p>
      </Grid>
      <Grid item xs={6}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            12. Quan hệ với chủ hộ:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.relative}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            13. Lý do chuyển hộ khẩu:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.reason}
          </span>
        </p>
      </Grid>

      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            14. Nơi chuyển đến:
          </span>
          <span className='content' style={{ fontSize: '15px' }}>
            {data?.destination}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className='MsoNormal' style={{ marginLeft: '1.5in' }}>
          <span className='title' style={{ fontSize: '15px' }}>
            15. Những người trong hộ cùng chuyển hộ khẩu <sup>(2)</sup>:
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
                  <span style={{ fontSize: '15px' }}>Nguyên quán</span>
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
                  <span style={{ fontSize: '15px' }}>Dân tộc</span>
                </p>
              </td>
              <td
                style={{
                  width: '48.5pt',
                  border: 'solid windowtext 1.0pt',
                  borderLeft: 'none',

                  padding: '0in 0in 0in 0in'
                }}>
                <p className='MsoNormal' style={{ marginTop: '6.0pt', textAlign: 'center' }}>
                  <span style={{ fontSize: '15px' }}>Quốc tịch</span>
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
                  <span style={{ fontSize: '15px' }}>CMND số (hoặc Hộ chiếu số)</span>
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
                  <span style={{ fontSize: '15px' }}>
                    Quan hệ <sup>(3)</sup>
                  </span>
                </p>
              </td>
            </tr>

            {data?.member?.map((item: any, index) => {
              return (
                <tr key={item._id} style={{ textAlign: 'center' }}>
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
                  <td
                    style={{
                      width: '51.85pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',

                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.cardId}</span>
                    </p>
                  </td>
                  <td
                    style={{
                      width: '48.6pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',

                      padding: '0in 0in 0in 0in'
                    }}>
                    <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
                      <span style={{ fontSize: '13px' }}>{item.relative}</span>
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
                (2) Ghi theo sổ đăng ký thường trú, sổ hộ khẩu các thông tin của người trong hộ cùng chuyển hộ khẩu.
              </span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>(3) Ghi mối quan hệ với người chuyển hộ khẩu tại Mục 1.</span>
            </em>
          </p>
          <p className='MsoNormal' style={{ marginTop: '6.0pt' }}>
            <em>
              <span style={{ fontSize: '13px' }}>
                Ghi chú: Lập 02 bản, một bản cấp cho công dân để nộp tại nơi đăng ký thường trú, một bản lưu tại nơi cấp
                giấy.
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
export default TransferPaper
