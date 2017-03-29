import { createStore, combineReducers } from 'redux'

const initState = {
  boards: [],
}

const boardsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_BOARDS_FULFILLED':
      return { boards: action.payload.data }
    case 'ADD_BOARD':
      return state
    case 'ADD_BOARD_FULFILLED':
      const newstate = Object.assign({}, state, { boards: [...state.boards, action.payload.data] })
      return newstate
    case 'ADD_BOARD_REJECTED':
      return state
    case 'REMOVE_BOARD':
      return
    default:
      return state
  }
}

export default boardsReducer
