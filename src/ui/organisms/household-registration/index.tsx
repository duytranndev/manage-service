import { Button, Steps, Tabs } from 'antd'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ChangementPaper from '../household/changement-paper'
import DemographicDeclaration from '../household/demographic-declaration'
import TransferPaper from '../household/transfer-paper'
const { TabPane } = Tabs
const { Step } = Steps
export default function HouseholdRegistration() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  const notify = () => toast.success('Successfully saved!')
  const [formValues, setFormValues] = useState({
    formA: {},
    formB: {},
    formC: {}
  })
  const handleFormAChange = (values: any) => {
    console.log('values :>> ', values)
    setFormValues({
      ...formValues,
      formA: values
    })
  }
  const handleFormBChange = (values: any) => {
    console.log('values :>> ', values)
    setFormValues({
      ...formValues,
      formA: values
    })
  }
  const handleFormCChange = (values: any) => {
    console.log('values :>> ', values)
    setFormValues({
      ...formValues,
      formA: values
    })
  }
  const steps = [
    {
      title: 'Giấy chuyển hộ khẩu',
      content: <TransferPaper onSubmit={handleFormAChange} />
    },
    {
      title: 'Phiếu báo thay đổi hộ khẩu, nhân khẩu',
      content: <ChangementPaper onSubmit={handleFormBChange} />
    },
    {
      title: 'Bản khai nhân khẩu',
      content: <DemographicDeclaration onSubmit={handleFormCChange} />
    }
  ]

  //   const str = 'tran ngoc duy'
  // const arr = str.split(' ')
  // const x = arr.map(item => item.charAt(0))
  // console.log(x.join('').toUpperCase())
  // console.log(arr)
  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>{steps[current].content}</div>
      <div className='steps-action'>
        {current < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type='primary' onClick={notify}>
            Done
          </Button>
        )}
        <Toaster />
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  )
}
