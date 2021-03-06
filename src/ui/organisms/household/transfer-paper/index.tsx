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
        <Panel header='Khai b??o th??ng tin ng?????i chuy???n h??? kh???u' key='1'>
          <div className={classes.root}>
            <Grid container spacing={4}>
              <Grid item xs={9}>
                <TextField
                  id='standard-full-width'
                  label='H??? v?? t??n'
                  style={{ margin: 8 }}
                  placeholder='H??? v?? t??n'
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
                  <Radio value='N???'>N???</Radio>
                  <Radio value='Kh??c'>Kh??c</Radio>
                </Radio.Group>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id='standard-full-width'
                  label='Ng??y, th??ng, n??m sinh'
                  style={{ margin: 8 }}
                  placeholder='Ng??y, th??ng, n??m sinh'
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
                  label='N??i sinh'
                  style={{ margin: 8 }}
                  placeholder='N??i sinh'
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
                  label='Nguy??n qu??n'
                  style={{ margin: 8 }}
                  placeholder='Nguy??n qu??n'
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
                  label='D??n t???c'
                  style={{ margin: 8 }}
                  placeholder='D??n t???c'
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
                  label='T??n gi??o'
                  style={{ margin: 8 }}
                  placeholder='T??n gi??o'
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
                  label='Qu???c t???ch'
                  style={{ margin: 8 }}
                  placeholder='Qu???c t???ch'
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
                  label='N??i th?????ng tr??'
                  style={{ margin: 8 }}
                  placeholder='N??i th?????ng tr??'
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
                  label='H??? v?? t??n ch??? h??? n??i ??i'
                  style={{ margin: 8 }}
                  placeholder='H??? v?? t??n ch??? h??? n??i ??i'
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
                  label='Quan h??? v???i ch??? h???'
                  style={{ margin: 8 }}
                  placeholder='Quan h??? v???i ch??? h???'
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
                  label='L?? do chuy???n h??? kh???u'
                  style={{ margin: 8 }}
                  placeholder='L?? do chuy???n h??? kh???u'
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
                  label='N??i chuy???n ?????n'
                  style={{ margin: 8 }}
                  placeholder='N??i chuy???n ?????n'
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
        <Panel header='Nh???ng ng?????i trong h??? c??ng chuy???n h??? kh???u' key='2'>
          <div>
            <Grid container spacing={0} style={{ display: 'flex' }}>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='H??? v?? t??n'
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
                  label='Ng??y th??ng n??m sinh'
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
                  label='Gi???i t??nh'
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
                  label='Nguy??n qu??n'
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
                  label='D??n t???c'
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
                  label='Qu???c t???ch'
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
                  label='CMND s??? (H??? chi???u s???)'
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
                  label='Quan h???'
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
                  label='D??n t???c'
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
      <button type='submit'>L??u</button>
    </Form>
  )
}
