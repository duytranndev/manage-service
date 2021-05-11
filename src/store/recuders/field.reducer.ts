import { FIELD_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { FieldInterface } from '../../share/interface/field.interface'
import {
  CREATE_FIELD,
  DELETE_FIELD,
  FETCH_FIELD_ERROR,
  FETCH_FIELD_PENDING,
  FETCH_FIELD_SUCCESS,
  UPDATE_FIELD
} from '../actions/field.action'
import { FieldState } from '../types'

const initialState = {
  data: [],
  pending: false
}
export const FieldReducer = (state = initialState, action: any): FieldState => {
  switch (action.type) {
    case FETCH_FIELD_PENDING:
      return {
        ...state,
        pending: true
      }

    case FETCH_FIELD_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_FIELD_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case CREATE_FIELD:
      let list = [...state.data] as FieldInterface[]
      list.push(action.payload)
      return { ...state, data: list }
    case DELETE_FIELD:
      const staffs = [...state.data].filter((item: FieldInterface) => item._id !== action.id)
      return { ...state, data: staffs }

    case UPDATE_FIELD:
      const { payload } = action
      const { data } = state
      return {
        ...state,
        data: data.map((field: FieldInterface) => {
          if (field._id === payload._id) {
            return {
              ...field,
              name: payload.name,
              description: payload.description
            }
          } else {
            return field
          }
        })
      }

    default:
      return state
  }
}

export const fetchFields = () => {
  return (dispatch: (arg0: { type: string; payload?: any; error?: any }) => void) => {
    dispatch({
      type: FETCH_FIELD_PENDING
    })
    moduleApi
      .get(FIELD_URL)
      .then((res) =>
        dispatch({
          type: FETCH_FIELD_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_FIELD_ERROR,
          error: error
        })
      })
  }
}
