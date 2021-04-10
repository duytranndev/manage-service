import { ChangeEvent, useEffect, useState } from 'react'
import { validate } from '../validator/validator'

export const useForm = <FormFields extends { [key: string]: any }>(initalValues: FormFields, callback: any) => {
  const [formData, setFormData] = useState<FormFields>(initalValues)
  const [errors, setErrors] = useState(initalValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(`submited`)
      callback()
    }
  }, [errors])
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (event: any) => {
    if (event) event.preventDefault()
    setErrors(validate(formData))
    setIsSubmitting(true)
  }
  const handleInputValidation = (key: any) => {
    setErrors(validate(formData))
    setIsSubmitting(true)
  }
  return { formData, handleInputChange, handleSubmit, handleInputValidation, isSubmitting, errors, setErrors }
}
