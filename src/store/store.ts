import { Action, applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { DepartmentReducer } from './recuders/department.reducer'
import { StaffReducer } from './recuders/staff.reducer'

const rootReducer = combineReducers({
  department: DepartmentReducer,
  staff: StaffReducer
})

const middleWare = [thunk]

const logger: Middleware = () => (next: unknown) => (action: Action): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Logger', action)
  }
  return typeof next === 'function' ? next(action) : undefined
}

const store = createStore(rootReducer, applyMiddleware(logger, ...middleWare))

export default store
