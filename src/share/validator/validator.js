import { Actor } from '../common/app-constants'

// // định nghĩa
// export const Validator = (option) => {
//   var selectorRules = {}
//   //Hàm thực hiện validate
//   function validate(inputElement, rule) {
//     var errorMessage
//     // Lấy ra các rule của selector
//     var rules = selectorRules[rule.selector]
//     var errorElement = inputElement.parentElement.querySelector(option.errorSelector)
//     // lặp qua từng rule và kiểm tra
//     // nếu có lỗi, thì dừng việc kiểm tra

//     for (var i = 0; i < rules.length; i++) {
//       errorMessage = rules[i](inputElement.value)
//       if (errorMessage) break
//     }

//     if (errorMessage) {
//       errorElement.innerText = errorMessage
//       inputElement.parentElement.classList.add('invalid')
//     } else {
//       errorElement.innerText = ''
//       inputElement.parentElement.classList.remove('invalid')
//     }
//     //convert thành boolean
//     return !errorMessage
//   }

//   //Lấy element của form cần validate
//   const formElement = document.querySelector(option.form)
//   if (formElement) {
//     formElement.onsubmit = (e) => {
//       e.preventDefault()
//       var isFormValid = true

//       // Lặp qua từng rules và validate
//       option.rules.forEach(function (rule) {
//         var inputElement = formElement.querySelector(rule.selector)
//         var isValid = validate(inputElement, rule)
//         if (!isValid) {
//           isFormValid = false
//         }
//       })
//       // if (isFormValid) {
//       //   if (typeof option.onSubmit === 'function') {
//       //     var enableInput = formElement.querySelectorAll('[name]:not([disabled])')
//       //     var formValues = Array.from(enableInput).reduce((value, input: any) => {
//       //       return (value[input.name] = input.value) && value
//       //     }, {})
//       //     console.log(`formValues`, formValues)
//       //     console.log(`enableInput`, enableInput)
//       //     option.onSubmit({
//       //       name: 'duy'
//       //     })
//       //   }
//       // } else {
//       //   console.log('khong co loi')
//       // }
//     }

//     // xử lý lặp qua mỗi rule và xử lý
//     option.rules.forEach((rule) => {
//       //Lưu lại các rule của object
//       if (Array.isArray(selectorRules[rule.selector])) {
//         selectorRules[rule.selector].push(rule.test)
//       } else {
//         selectorRules[rule.selector] = [rule.test]
//       }
//       var inputElement = document.querySelector(rule.selector)
//       //   console.log(`inputElement`, inputElement);
//       if (inputElement) {
//         var errorElement = inputElement.parentElement.querySelector(option.errorSelector)
//         //xử lý trường hợp blur khỏi input
//         // var errorElement = getErrorElement(inputElement);
//         inputElement.onblur = () => {
//           //get value : inputElement.value
//           //get test() : rule.test
//           //   console.log(`blur + `, rule);
//           validate(inputElement, rule)
//         }
//         //xử lý trường hợp mỗi khi người dùng nhập vào input
//         inputElement.oninput = () => {
//           errorElement.innerText = ''
//           inputElement.parentElement.classList.remove('invalid')
//         }
//       }
//     })
//     console.log(`selectorRules`, selectorRules)
//   }
// }

// //Định nghĩa các rule
// //Nguyên tắc của rule
// // 1. Khi có lỗi => trả ra message lỗi
// // 2. Khi hợp lệ => không trả ra gì cả (undefined)
// //
// Validator.isRequired = (selector: string, message?: string) => {
//   return {
//     selector,
//     test: (value) => {
//       //value.trim() => loại bỏ dấu cách
//       return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
//     }
//   }
// }
// Validator.isEmail = (selector: string, message?: string) => {
//   return {
//     selector,
//     test: (value) => {
//       var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       return regex.test(value) ? undefined : message || 'Vui lòng nhập Email đúng định dạng'
//     }
//   }
// }

// Validator.minLength = (selector: string, min, message?: string) => {
//   return {
//     selector,
//     test: (value) => {
//       return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
//     }
//   }
// }

// Validator.isConfirmed = (selector, getConfirmValue, message?: string) => {
//   return {
//     selector,
//     test: (value) => {
//       return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
//     }
//   }
// }

export const validate = (values: any, key?: any) => {
  const x = document.getElementsByClassName('help is-danger')
  let errors: any = {}
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (key === Actor.staff) {
    if (!values['email']) {
      errors['email'] = 'Vui lòng nhập Email!'
    } else if (!regex.test(values['email'])) {
      errors['email'] = 'Email bạn nhập không đúng định dạng!'
    }
    if (!values['password']) {
      errors['password'] = 'Vui lòng nhập mật khẩu!'
    } else if (values['password'].length < 8) {
      errors['password'] = 'Mật khẩu phải chứa ít nhất 8 ký tự!'
    }

    if (!values['name']) {
      errors['name'] = 'Vui lòng nhập họ và tên!'
    } else if (values['name'].length < 8) {
      errors['name'] = 'name khẩu phải chứa ít nhất 8 ký tự!'
    }

    if (!values['phone']) {
      errors['phone'] = 'Vui lòng nhập số điện thoại!'
    } else if (values['phone'].length < 10 || values['phone'].length > 11) {
      errors['phone'] = 'Số điện thoại có độ dài từ 10 đến 11 ký tự!'
    }
    if (!values['departmentId']) {
      errors['department'] = 'Vui lòng chọn phòng ban!'
    }
    if (!values['username']) {
      errors['username'] = 'Vui lòng nhập tên đăng nhập!'
    } else if (values['username'].length < 8) {
      errors['username'] = 'Tên đăng nhập phải chứa ít nhất 8 ký tự!'
    }
  }
  if (key === Actor.news) {
    if (!values['title']) {
      errors['title'] = 'Tiêu đề bài viết không được để trống!'
    }
  }
  if (key === Actor.department) {
    if (!values['name']) {
      errors['name'] = 'Vui lòng nhập Tên phòng ban!'
    } else if (values['name'].length < 5) {
      errors['name'] = 'name khẩu phải chứa ít nhất 5 ký tự!'
    }
  }

  return errors
}
