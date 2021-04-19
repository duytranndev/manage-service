import { NEWS_URL } from '../../share/common/api/api.constants'
import { moduleApi } from '../../share/handle/fetchData'
import { NewsInterface } from '../../share/interface/image.interface'
import {
  CREATE_NEWS,
  DELETE_NEWS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCCESS
} from '../actions/news.action'
import { NewsState } from '../types'

const initialState = {
  data: [],
  pending: false
}
export const NewsReducer = (state = initialState, action: any): NewsState => {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        pending: true
      }

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case CREATE_NEWS:
      console.log(`action`, action)
      let list = [...state.data] as NewsInterface[]
      list.push(action.payload)
      return { ...state, data: list }
    case DELETE_NEWS:
      const staffs = [...state.data].filter((item: NewsInterface) => item._id !== action.id)
      return { ...state, data: staffs }
    default:
      return state
  }
}

export const fetchNewss = () => {
  return (dispatch: (arg0: { type: string; payload?: any; error?: any }) => void) => {
    dispatch({
      type: FETCH_NEWS_PENDING
    })
    moduleApi
      .get(NEWS_URL)
      .then((res) =>
        dispatch({
          type: FETCH_NEWS_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_NEWS_ERROR,
          error: error
        })
      })
  }
}
