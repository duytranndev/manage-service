import { createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { Collapse, Form, Radio } from 'antd'
import { ChangeEvent, default as React, useState } from 'react'
const { Panel } = Collapse

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

export default function TransferPaper({ onSubmit }: TransferPaperProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  const classes = useStyles()
  const [value, setValue] = useState('')
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
    // e.preventDefault()
    // setErrors(validate(formData))
    // setIsSubmitting(true)
    // if (isReady) {
    //   const data = { ...formData }
    //   console.log('data :>> ', data)
    //   setFormData({})
    //   setInputFields([])
    //   onSubmit('awdawd')
    // }
    // return null
  }

  return (
    <Form layout='horizontal' wrapperCol={{ span: 20 }} hideRequiredMark onSubmitCapture={handleOnSubmit}>
      <Collapse>
        <Panel header='Khai báo thông tin người chuyển hộ khẩu' key='1'>
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

              <Grid item xs={4}>
                <TextField
                  id='standard-full-width'
                  label='Ngày, tháng, năm sinh'
                  style={{ margin: 8 }}
                  placeholder='Ngày, tháng, năm sinh'
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

              <Grid item xs={4}>
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

              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Họ và tên chủ hộ nơi đi'
                  style={{ margin: 8 }}
                  placeholder='Họ và tên chủ hộ nơi đi'
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
                  label='Lý do chuyển hộ khẩu'
                  style={{ margin: 8 }}
                  placeholder='Lý do chuyển hộ khẩu'
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
                  label='Nơi chuyển đến'
                  style={{ margin: 8 }}
                  placeholder='Nơi chuyển đến'
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
        <Panel header='Những người trong hộ cùng chuyển hộ khẩu' key='2'>
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
                  label='Ngày tháng năm sinh'
                  size='small'
                  color='secondary'
                  type='date'
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
                  label='Nguyên quán'
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
                  type='number'
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
              <Grid item xs={1}>
                <RemoveCircleIcon />
                <AddCircleIcon />
              </Grid>
            </Grid>
          </div>
        </Panel>
      </Collapse>
      <button type='submit'>Lưu</button>
    </Form>
  )
}
