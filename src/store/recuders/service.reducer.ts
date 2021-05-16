import { SERVICE_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { ServiceInterface } from '../../share/interface/service.interface'
import {
  CREATE_SERVICE,
  DELETE_SERVICE,
  FETCH_SERVICE_ERROR,
  FETCH_SERVICE_PENDING,
  FETCH_SERVICE_SUCCESS,
  UPDATE_SERVICE
} from '../actions/service.action'
import { ServiceState } from '../types'

const initialState = {
  data: [],
  pending: false
}
export const ServiceReducer = (state = initialState, action: any): ServiceState => {
  switch (action.type) {
    case FETCH_SERVICE_PENDING:
      return {
        ...state,
        pending: true
      }

    case FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_SERVICE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case CREATE_SERVICE:
      let list = [...state.data] as ServiceInterface[]
      list.push(action.payload)
      return { ...state, data: list }
    case DELETE_SERVICE:
      const services = [...state.data].filter((item: ServiceInterface) => item._id !== action.id)
      return { ...state, data: services }

    case UPDATE_SERVICE:
      const { payload } = action
      const { data } = state
      return {
        ...state,
        data: data.map((service: ServiceInterface) => {
          if (service._id === payload._id) {
            return {
              ...service,
              name: payload.name,
              unitId: payload.unitId,
              unitName: payload.unitName,
              description: payload.description
            }
          } else {
            return service
          }
        })
      }

    default:
      return state
  }
}

export const fetchServices = () => {
  return (dispatch: (arg0: { type: string; payload?: any; error?: any }) => void) => {
    dispatch({
      type: FETCH_SERVICE_PENDING
    })
    moduleApi
      .get(SERVICE_URL)
      .then((res) =>
        dispatch({
          type: FETCH_SERVICE_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_SERVICE_ERROR,
          error: error
        })
      })
  }
}
