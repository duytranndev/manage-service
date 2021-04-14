import { createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import { Collapse, Form, Radio, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../../../../share/hooks/useForm'
import { validate } from '../../../../share/validator/validator'
const { Panel } = Collapse
const { Option } = Select

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
)

type TransferPaperProps = {
  onSubmit: Function
}
export default function DemographicDeclaration({ onSubmit }: TransferPaperProps) {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const { formData, handleInputChange, setErrors, errors, isReady, setFormData, setIsSubmitting } = useForm<any>({})
  const [inputFields, setInputFields] = useState<any>([
    {
      name: '',
      birth: '',
      gender: '',
      domicile: '',
      nation: '',
      nationality: '',
      cardId: '',
      relative: ''
    }
  ])

  const onChangeGender = (e: any) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  function onChange({ value, dateString }: any) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  function onOk(value: any) {
    console.log('onOk: ', value)
  }

  const handleChangeFieldInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const values = [...inputFields]
    values[index][e.target.name] = e.target.value
    setInputFields(values)
  }

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { name: '', birth: '', gender: '', domicile: '', nation: '', nationality: '', cardId: '', relative: '' }
    ])
  }
  const handleRemoveFields = (index: number) => {
    if (inputFields.length === 1) {
      return null
    }
    const values = [...inputFields]
    values.splice(index, 1)
    // values.splice(values.findIndex((item) => item.id === id, 1))
    setInputFields(values)
  }

  const handleChange = (value: any) => {
    console.log(`selected ${value}`)
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    setErrors(validate(formData))
    setIsSubmitting(true)
    if (isReady) {
      const data = { ...formData }
      console.log('data :>> ', data)
      setFormData({})
      setInputFields([])
      onSubmit('awdawd')
    }
    return null
  }
  return (
    <Form layout='horizontal' wrapperCol={{ span: 16 }} hideRequiredMark>
      <Collapse>
        <Panel header='Bản khai nhân khẩu (Dùng cho người từ đủ 14 tuổi trở lên)' key='1'>
          <div className={classes.root}>
            <Grid container spacing={5}>
              <Grid item xs={9}>
                <TextField
                  id='standard-full-width'
                  label='Họ và tên'
                  style={{ margin: 8 }}
                  placeholder='Họ và tên'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={3}>
                <Radio.Group className={classes.paper} onChange={onChangeGender} value={value}>
                  <Radio value='Nam'>Nam</Radio>
                  <Radio value='Nữ'>Nữ</Radio>
                  <Radio value='Khác'>Khác</Radio>
                </Radio.Group>
              </Grid>

              <Grid item xs={2}>
                <TextField
                  id='standard-full-width'
                  label='Ngày, tháng, năm sinh'
                  type='date'
                  style={{ margin: 8 }}
                  placeholder='Ngày, tháng, năm sinh'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id='standard-full-width'
                  label='Nơi sinh'
                  style={{ margin: 8 }}
                  placeholder='Nơi sinh'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id='standard-full-width'
                  label='Nguyên quán'
                  style={{ margin: 8 }}
                  placeholder='Nguyên quán'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id='standard-full-width'
                  label='Dân tộc'
                  style={{ margin: 8 }}
                  placeholder='Dân tộc'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id='standard-full-width'
                  label='Tôn giáo'
                  style={{ margin: 8 }}
                  placeholder='Tôn giáo'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id='standard-full-width'
                  label='Quốc tịch'
                  style={{ margin: 8 }}
                  placeholder='Quốc tịch'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='CMND số'
                  style={{ margin: 8 }}
                  type='number'
                  placeholder='CMND số'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Hộ chiếu số'
                  style={{ margin: 8 }}
                  type='number'
                  placeholder='Hộ chiếu số'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id='standard-full-width'
                  label='Nơi thường trú'
                  style={{ margin: 8 }}
                  placeholder='Nơi thường trú'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='standard-full-width'
                  label='Địa chỉ chỗ ở hiện nay'
                  style={{ margin: 8 }}
                  placeholder='Địa chỉ chỗ ở hiện nay'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Trình độ học vấn'
                  style={{ margin: 8 }}
                  placeholder='Trình độ học vấn'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Trình độ chuyên môn'
                  style={{ margin: 8 }}
                  placeholder='Trình độ chuyên môn'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Biết tiếng dân tộc'
                  style={{ margin: 8 }}
                  placeholder='Biết tiếng dân tộc'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Trình độ ngoại ngữ'
                  style={{ margin: 8 }}
                  placeholder='Trình độ ngoại ngữ'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id='standard-full-width'
                  label='Nghề nghiệp, nơi làm việc'
                  style={{ margin: 8 }}
                  placeholder='Nghề nghiệp, nơi làm việc'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  placeholder='Tiền án (Tội danh, hình phạt, theo bản án số, ngày, tháng, năm của Tòa án)'
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea placeholder='Tóm tắt về gia đình (Bố, mẹ; vợ/chồng; con; anh, chị, em ruột)' rows={4} />
              </Grid>
            </Grid>
          </div>
        </Panel>

        <Panel header='Tóm tắt về bản thân (Từ đủ 14 tuổi trở lên đến nay ở đâu, làm gì):' key='2'>
          <div>
            <Grid container spacing={0} style={{ display: 'flex' }}>
              <Grid item xs={2}>
                <TextField
                  id='standard-secondary'
                  label='Từ tháng, năm đến tháng, năm'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='standard-secondary'
                  label='Chỗ ở (Ghi rõ số nhà, đường; thôn, xóm, làng, ấp, bản,...; xã/phường/thị trấn; quận/huyện; tỉnh/thành phố. Nếu ở nước ngoài thì ghi rõ tên nước)'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id='standard-secondary'
                  label='Nghề nghiệp, nơi làm việc'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField id='standard-secondary' label='Nơi sinh' size='small' color='secondary' />
              </Grid>
            </Grid>
          </div>
        </Panel>
      </Collapse>
      <button type='submit'>Lưu</button>
    </Form>
  )
}
