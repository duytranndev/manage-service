import { createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import { Collapse, Form, Radio, Select } from 'antd'
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
type PeopleProps = {
  name: string
  birth: string
  gender: string
  domicile: string
  nation: string
  nationality: string
  cardId: string
  relative: string
}

export default function ChangementPaper({ onSubmit }: TransferPaperProps) {
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
    console.log('radioz checked', e.target.value)
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
        <Panel header='Thông tin về người viết phiếu báo' key='1'>
          <div className={classes.root}>
            <Grid container spacing={3}>
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
              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='CMND số'
                  style={{ margin: 8 }}
                  placeholder='CMND số'
                  fullWidth
                  type='number'
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
                  placeholder='Hộ chiếu số'
                  type='number'
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
              <Grid item xs={9}>
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
              <Grid item xs={3}>
                <TextField
                  id='standard-full-width'
                  label='Số điện thoại liên hệ'
                  style={{ margin: 8 }}
                  type='number'
                  placeholder='Số điện thoại liên hệ'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Panel>
        <Panel header='Thông tin về người có thay đổi hộ khẩu, nhân khẩu' key='2'>
          <div className={classes.root}>
            <Grid container spacing={4}>
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
                  style={{ margin: 8 }}
                  placeholder='Ngày, tháng, năm sinh'
                  type='date'
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
              <Grid item xs={6}>
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

              <Grid item xs={6}>
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

              <Grid item xs={9}>
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

              <Grid item xs={3}>
                <TextField
                  id='standard-full-width'
                  label='Số điện thoại liên hệ'
                  type='number'
                  style={{ margin: 8 }}
                  placeholder='Số điện thoại liên hệ'
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
                  label='Họ và tên chủ hộ'
                  style={{ margin: 8 }}
                  placeholder='Họ và tên chủ hộ'
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
                  label='Quan hệ với chủ hộ'
                  style={{ margin: 8 }}
                  placeholder='Quan hệ với chủ hộ'
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
                  label='Nội dung thay đổi hộ khẩu, nhân khẩu'
                  style={{ margin: 8 }}
                  placeholder='Nội dung thay đổi hộ khẩu, nhân khẩu'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Panel>
        <Panel header='Những người trong hộ cùng chuyển hộ khẩu' key='3'>
          <div>
            <Grid container spacing={0} style={{ display: 'flex' }}>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Họ và tên'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id='standard-secondary'
                  label='Ngày, tháng, năm sinh'
                  size='small'
                  type='date'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Giới tính'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Nơi sinh'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Nghề nghiệp'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Dân tộc'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Quốc tịch'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id='standard-secondary'
                  label='CMND số (Hộ chiếu số)'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Quan hệ'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Dân tộc'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Panel>
      </Collapse>
      <button type='submit'>Lưu</button>
    </Form>
  )
}
