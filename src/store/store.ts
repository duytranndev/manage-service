import { Action, applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({})

const middleWare = [thunk]

const logger: Middleware = () => (next: unknown) => (action: Action): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Logger', action)
  }
  return typeof next === 'function' ? next(action) : undefined
}

const store = createStore(rootReducer, applyMiddleware(logger, ...middleWare))

export default store
