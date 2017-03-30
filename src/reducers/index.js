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
      return Object.assign({}, state, { boards: [...state.boards, action.payload.data] })
    case 'ADD_BOARD_REJECTED':
      return state
    case 'REMOVE_BOARD':
      return state
    case 'REMOVE_BOARD_FULFILLED':
      return Object.assign({}, state, { boards: state.boards.filter(board => board.id != action.payload.request.responseURL.split('/').pop()) })
    default:
      return state
  }
}

export default boardsReducer
