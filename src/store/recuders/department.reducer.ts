import { DEPARTMENT_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { DepartmentInterface } from '../../share/interface/department.interface'
import {
  CREATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  FETCH_DEPARTMENT_ERROR,
  FETCH_DEPARTMENT_PENDING,
  FETCH_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT
} from '../actions/department.action'
import { DepartmentState } from '../types'

const initialState = {
  data: [],
  pending: false
}

export const DepartmentReducer = (state = initialState, action: any): DepartmentState => {
  switch (action.type) {
    case FETCH_DEPARTMENT_PENDING:
      return { ...state, pending: true }
    case FETCH_DEPARTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_DEPARTMENT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case DELETE_DEPARTMENT:
      console.log(`action`, action.id)
      const departments = [...state.data].filter((item: DepartmentInterface) => item._id !== action.id)
      return { ...state, data: departments }

    case CREATE_DEPARTMENT:
      let list = [...state.data] as DepartmentInterface[]
      list.push(action.payload)
      return { ...state, data: list }

    case UPDATE_DEPARTMENT:
      // list = [...state.data] as DepartmentInterface[]
      // console.log(`list`, list)
      // list.push(action.payload)
      // console.log(`action.payload`, action.payload)
      const { payload } = action
      const { data } = state

      return {
        ...state,
        data: data.map((department: DepartmentInterface) => {
          if (department._id === payload._id) {
            return {
              ...department,
              name: payload.name,
              description: payload.description
            }
          } else {
            return department
          }
        })
      }
    // return state.data.map((post: DepartmentInterface) => {
    //   if (post.id === action.id) {
    //     return {
    //       ...post,
    //       title: action.newTitle,
    //       content: action.newContent,
    //       editing: !post.editing
    //     }
    //   } else {
    //     return post
    //   }
    // })
    default:
      return state
  }
}

export function fetchDepartments() {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: FETCH_DEPARTMENT_PENDING
    })
    moduleApi
      .get(DEPARTMENT_URL)
      .then((res) =>
        dispatch({
          type: FETCH_DEPARTMENT_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_DEPARTMENT_ERROR
        })
      })
  }
}
