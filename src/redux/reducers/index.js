import { combineReducers } from 'redux'
import { notesReducer } from './notesReducer'
import { userReducer } from './userReducer'

const reducers = combineReducers({
  notes: notesReducer,
  user: userReducer
})

export default reducers