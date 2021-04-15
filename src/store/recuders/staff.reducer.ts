import { STAFF_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { StaffInterface } from '../../share/interface/staff.interface'
import {
  CREATE_STAFF,
  DELETE_STAFF,
  FETCH_STAFF_ERROR,
  FETCH_STAFF_PENDING,
  FETCH_STAFF_SUCCESS
} from '../actions/staff.action'
import { StaffState } from '../types'

const initialState = {
  data: [],
  pending: false
}
export const StaffReducer = (state = initialState, action: any): StaffState => {
  switch (action.type) {
    case FETCH_STAFF_PENDING:
      return {
        ...state,
        pending: true
      }

    case FETCH_STAFF_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_STAFF_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case CREATE_STAFF:
      console.log(`action`, action)
      let list = [...state.data] as StaffInterface[]
      list.push(action.payload)
      return { ...state, data: list }
    case DELETE_STAFF:
      const staffs = [...state.data].filter((item: StaffInterface) => item._id !== action.id)
      return { ...state, data: staffs }
    default:
      return state
  }
}

export const fetchStaffs = () => {
  return (dispatch: (arg0: { type: string; payload?: any; error?: any }) => void) => {
    dispatch({
      type: FETCH_STAFF_PENDING
    })
    moduleApi
      .get(STAFF_URL)
      .then((res) =>
        dispatch({
          type: FETCH_STAFF_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_STAFF_ERROR,
          error: error
        })
      })
  }
}
