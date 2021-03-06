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
        <Panel header='B???n khai nh??n kh???u (D??ng cho ng?????i t??? ????? 14 tu???i tr??? l??n)' key='1'>
          <div className={classes.root}>
            <Grid container spacing={5}>
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
                  type='date'
                  style={{ margin: 8 }}
                  placeholder='Ng??y, th??ng, n??m sinh'
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
              <Grid item xs={12}>
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
              <Grid item xs={6}>
                <TextField
                  id='standard-full-width'
                  label='Tr??nh ????? h???c v???n'
                  style={{ margin: 8 }}
                  placeholder='Tr??nh ????? h???c v???n'
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
                  label='Tr??nh ????? chuy??n m??n'
                  style={{ margin: 8 }}
                  placeholder='Tr??nh ????? chuy??n m??n'
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
                  label='Bi???t ti???ng d??n t???c'
                  style={{ margin: 8 }}
                  placeholder='Bi???t ti???ng d??n t???c'
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
                  label='Tr??nh ????? ngo???i ng???'
                  style={{ margin: 8 }}
                  placeholder='Tr??nh ????? ngo???i ng???'
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
                <TextArea
                  placeholder='Ti???n ??n (T???i danh, h??nh ph???t, theo b???n ??n s???, ng??y, th??ng, n??m c???a T??a ??n)'
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea placeholder='T??m t???t v??? gia ????nh (B???, m???; v???/ch???ng; con; anh, ch???, em ru???t)' rows={4} />
              </Grid>
            </Grid>
          </div>
        </Panel>

        <Panel header='T??m t???t v??? b???n th??n (T??? ????? 14 tu???i tr??? l??n ?????n nay ??? ????u, l??m g??):' key='2'>
          <div>
            <Grid container spacing={0} style={{ display: 'flex' }}>
              <Grid item xs={2}>
                <TextField
                  id='standard-secondary'
                  label='T??? th??ng, n??m ?????n th??ng, n??m'
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
                  label='Ch??? ??? (Ghi r?? s??? nh??, ???????ng; th??n, x??m, l??ng, ???p, b???n,...; x??/ph?????ng/th??? tr???n; qu???n/huy???n; t???nh/th??nh ph???. N???u ??? n?????c ngo??i th?? ghi r?? t??n n?????c)'
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
                  label='Ngh??? nghi???p, n??i l??m vi???c'
                  size='small'
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField id='standard-secondary' label='N??i sinh' size='small' color='secondary' />
              </Grid>
            </Grid>
          </div>
        </Panel>
      </Collapse>
      <button type='submit'>L??u</button>
    </Form>
  )
}
