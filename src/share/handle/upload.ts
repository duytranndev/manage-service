import axios from 'axios'
// const preset = 'ml_default'
// const url = 'https://api.cloudinary.com/v1_1/duytrann/image/upload'
export const uploadSingle = async (file: any, url: string, preset: string) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', preset)

  const result = await axios.post(url, formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  })
  console.log('result :>> ', result.data.url)
  return result.data.url
}

export function uploadMulti(files: never[], url: string, tag: string, preset: string) {
  return files.map(async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('tags', tag)
    formData.append('upload_preset', preset)
    formData.append('timestamp', new Date().getTime().toLocaleString())

    const result = await axios.post(url, formData, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    console.log('result :>> ', result.data.url)
    return result.data.url
  })
}
