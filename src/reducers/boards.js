
const boards = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOARDS_FULFILLED':
      return action.payload.data
    case 'ADD_BOARD_FULFILLED':
      return [...state, action.payload.data]
    case 'REMOVE_BOARD_FULFILLED':
      return state.filter(board => board.id != action.payload.request.responseURL.split('/').pop())
    default:
      return state
  }
}

export default boards