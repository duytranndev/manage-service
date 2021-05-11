import { PROFILE_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { ProfileInterface } from '../../share/interface/profile.interface'
import {
  CREATE_PROFILE,
  DELETE_PROFILE,
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_PENDING,
  FETCH_PROFILE_SUCCESS,
  UPDATE_PROFILE
} from '../actions/profile.action'
import { ProfileState } from '../types'

const initialState = {
  data: [],
  pending: false
}

export const ProfileReducer = (state = initialState, action: any): ProfileState => {
  switch (action.type) {
    case FETCH_PROFILE_PENDING:
      return { ...state, pending: true }
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case DELETE_PROFILE:
      const profiles = [...state.data].filter((item: ProfileInterface) => item._id !== action.id)
      return { ...state, data: profiles }

    case CREATE_PROFILE:
      let list = [...state.data] as ProfileInterface[]
      list.push(action.payload)
      return { ...state, data: list }

    case UPDATE_PROFILE:
      const { payload } = action
      const { data } = state
      return {
        ...state,
        data: data.map((profile: ProfileInterface) => {
          if (profile._id === payload._id) {
            return {
              ...profile,
              name: payload.name,
              description: payload.description
            }
          } else {
            return profile
          }
        })
      }
    default:
      return state
  }
}

export function fetchProfiles() {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: FETCH_PROFILE_PENDING
    })
    moduleApi
      .get(PROFILE_URL)
      .then((res) =>
        dispatch({
          type: FETCH_PROFILE_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_PROFILE_ERROR
        })
      })
  }
}
