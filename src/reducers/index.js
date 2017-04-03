import { combineReducers } from 'redux'
import boards from './boards'
import board from './board'

const reducers = combineReducers({
  boards,
  board,
})

export default reducers
