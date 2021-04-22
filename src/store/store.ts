import { Action, applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { DepartmentReducer } from './recuders/department.reducer'
import { FieldReducer } from './recuders/field.reducer'
import { NewsReducer } from './recuders/news.reducer'
import { StaffReducer } from './recuders/staff.reducer'
import { UnitReducer } from './recuders/unit.reducer'

const rootReducer = combineReducers({
  department: DepartmentReducer,
  staff: StaffReducer,
  field: FieldReducer,
  news: NewsReducer,
  unit: UnitReducer
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
