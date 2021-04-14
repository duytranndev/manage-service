import { ChangeEvent, useEffect, useState } from 'react'
import { validate } from '../validator/validator'

export const useForm = <FormFields extends { [key: string]: any }>(initalValues: FormFields, callback?: any) => {
  const [formData, setFormData] = useState<FormFields>(initalValues)
  const [errors, setErrors] = useState(initalValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isReady, setIsReady] = useState<boolean>(false)
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsReady(true)
    }
  }, [errors])
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleInputValidation = (key: any) => {
    setErrors(validate(formData))
    setIsSubmitting(true)
  }
  return {
    formData,
    isReady,
    setIsSubmitting,
    handleInputChange,
    handleInputValidation,
    errors,
    setErrors,
    setFormData
  }
}
