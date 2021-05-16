import { Action, applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
// import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { authentication } from './recuders/authentication.reducer'
import { DepartmentReducer } from './recuders/department.reducer'
import { FieldReducer } from './recuders/field.reducer'
import { NewsReducer } from './recuders/news.reducer'
import { ProfileReducer } from './recuders/profile.reducer'
import { ServiceReducer } from './recuders/service.reducer'
import { StaffReducer } from './recuders/staff.reducer'
import { UnitReducer } from './recuders/unit.reducer'

// const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
  department: DepartmentReducer,
  staff: StaffReducer,
  field: FieldReducer,
  news: NewsReducer,
  unit: UnitReducer,
  service: ServiceReducer,
  profile: ProfileReducer,
  authentication: authentication
})

const logger: Middleware = () => (next: unknown) => (action: Action): void => {
  if (process.env.NODE_ENV !== 'production') {
  }
  return typeof next === 'function' ? next(action) : undefined
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
