import axios from 'axios'

export const moduleApi = {
  get(url: string, params?: any) {
    return axios.get(url, { params })
  },
  getDetail(url: string, id: any) {
    console.log(`id`, id)
    const path = `${url}/${id}`
    console.log(`path`, path)
    return axios.get(path)
  },
  create(url: string, body: object, config?: any) {
    return axios.post(url, body, config)
  },
  update(url: string, body: any) {
    const path = `${url}/${body._id}`
    return axios.patch(path, body)
  },
  delete(url: string, id: string) {
    const path = `${url}/${id}`
    return axios.delete(path)
  }
}
