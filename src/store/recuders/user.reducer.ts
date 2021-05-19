import { UnitInterface } from '../../share/interface/unit.interface'
import { DELETE_UNIT, UPDATE_UNIT } from '../actions/unit.action'
import { USER_LOGIN } from '../actions/user.action'
import { UserState } from '../types'

const initialState = {
  data: [],
  pending: false
}
export const UnitReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case USER_LOGIN:
      let list = [...state.data] as UnitInterface[]
      list.push(action.payload)
      return { ...state, data: list }
    case DELETE_UNIT:
      const units = [...state.data].filter((unit: UnitInterface) => unit._id !== action.id)
      return { ...state, data: units }

    case UPDATE_UNIT:
      const { payload } = action
      const { data } = state
      return {
        ...state,
        data: data.map((unit: UnitInterface) => {
          if (unit._id === payload._id) {
            return {
              ...unit,
              name: payload.name,
              fieldId: payload.fieldId,
              fieldName: payload.fieldName,
              description: payload.description
            }
          } else {
            return unit
          }
        })
      }

    default:
      return state
  }
}
