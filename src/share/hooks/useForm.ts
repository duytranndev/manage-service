import { ChangeEvent, useEffect, useState } from 'react'
import { validate } from '../validator/validator'

export const useForm = <FormFields extends { [key: string]: any }>(initalValues: FormFields, callback?: any) => {
  const [formData, setFormData] = useState<FormFields>(initalValues)
  const [errors, setErrors] = useState(initalValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleOnInput = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [e.target.name]: '' })
  }
  const handleSubmit = (e: any, key?: string) => {
    e.preventDefault()
    console.log(`key`, key)
    setErrors(validate(formData, key))
    setIsSubmitting(true)
  }
  return {
    formData,
    setIsSubmitting,
    handleInputChange,
    handleSubmit,
    errors,
    setErrors,
    handleOnInput,
    setFormData
  }
}
