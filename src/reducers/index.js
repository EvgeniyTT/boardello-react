import { createStore, combineReducers } from 'redux'

const initState = {
  boards: [],
  board: {},
  columns: [],
  task: {},
}

const boardsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_BOARDS_FULFILLED':
      return Object.assign({}, state, { boards: action.payload.data })
    case 'ADD_BOARD_FULFILLED':
      return Object.assign({}, state, { boards: [...state.boards, action.payload.data] })
    case 'REMOVE_BOARD_FULFILLED':
      return Object.assign({}, state, { boards: state.boards.filter(board => board.id != action.payload.request.responseURL.split('/').pop()) })
    case 'FETCH_COLUMNS_FULFILLED':
      return Object.assign({}, state, { board: Object.assign({}, state.board, { columns: [...action.payload.data] }) })
    case 'ADD_COLUMN_FULFILLED':
      console.log(action.payload.data)
      return Object.assign({}, state, { columns: [...state.columns, action.payload.data] })
    default:
      return state
  }
}

export default boardsReducer
