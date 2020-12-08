import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const roorReducer = combineReducers({
  state: reducer,
})

export const store = configureStore({
  reducer: roorReducer,
})
