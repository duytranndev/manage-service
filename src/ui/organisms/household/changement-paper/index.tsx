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
        <Panel header='Th??ng tin v??? ng?????i vi???t phi???u b??o' key='1'>
          <div className={classes.root}>
            <Grid container spacing={3}>
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
              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='CMND s???'
                  style={{ margin: 8 }}
                  placeholder='CMND s???'
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
                  label='H??? chi???u s???'
                  style={{ margin: 8 }}
                  placeholder='H??? chi???u s???'
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
              <Grid item xs={9}>
                <TextField
                  id='standard-full-width'
                  label='?????a ch??? ch??? ??? hi???n nay'
                  style={{ margin: 8 }}
                  placeholder='?????a ch??? ch??? ??? hi???n nay'
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
                  label='S??? ??i???n tho???i li??n h???'
                  style={{ margin: 8 }}
                  type='number'
                  placeholder='S??? ??i???n tho???i li??n h???'
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
        <Panel header='Th??ng tin v??? ng?????i c?? thay ?????i h??? kh???u, nh??n kh???u' key='2'>
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

              <Grid item xs={2}>
                <TextField
                  id='standard-full-width'
                  label='Ng??y, th??ng, n??m sinh'
                  style={{ margin: 8 }}
                  placeholder='Ng??y, th??ng, n??m sinh'
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
              <Grid item xs={5}>
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
              <Grid item xs={6}>
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

              <Grid item xs={6}>
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

              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='CMND s???'
                  style={{ margin: 8 }}
                  type='number'
                  placeholder='CMND s???'
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
                  label='H??? chi???u s???'
                  style={{ margin: 8 }}
                  type='number'
                  placeholder='H??? chi???u s???'
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
                  label='Ngh??? nghi???p, n??i l??m vi???c'
                  style={{ margin: 8 }}
                  placeholder='Ngh??? nghi???p, n??i l??m vi???c'
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

              <Grid item xs={9}>
                <TextField
                  id='standard-full-width'
                  label='?????a ch??? ch??? ??? hi???n nay'
                  style={{ margin: 8 }}
                  placeholder='?????a ch??? ch??? ??? hi???n nay'
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
                  label='S??? ??i???n tho???i li??n h???'
                  type='number'
                  style={{ margin: 8 }}
                  placeholder='S??? ??i???n tho???i li??n h???'
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
                  label='H??? v?? t??n ch??? h???'
                  style={{ margin: 8 }}
                  placeholder='H??? v?? t??n ch??? h???'
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
                  label='N???i dung thay ?????i h??? kh???u, nh??n kh???u'
                  style={{ margin: 8 }}
                  placeholder='N???i dung thay ?????i h??? kh???u, nh??n kh???u'
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
        <Panel header='Nh???ng ng?????i trong h??? c??ng chuy???n h??? kh???u' key='3'>
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
                  label='Ng??y, th??ng, n??m sinh'
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
                  label='N??i sinh'
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
                  label='Ngh??? nghi???p'
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
            </Grid>
          </div>
        </Panel>
      </Collapse>
      <button type='submit'>L??u</button>
    </Form>
  )
}
