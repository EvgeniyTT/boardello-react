
const column = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED':
      console.log('STATE: ', state.id)
      console.log('ACTION: ', action.payload.data[0].columnId)
      if (action.payload.data.length > 0 && state.id != action.payload.data[0].columnId) {
        return state
      }
      return Object.assign({}, state, { tasks: action.payload.data })
    default:
      return state
  }
}

const board = (state = { columns: [] }, action) => {
  switch (action.type) {
    case 'FETCH_BOARD_FULFILLED':
      return action.payload.data
    case 'FETCH_COLUMNS_FULFILLED':
      return Object.assign({}, state, { columns: [...action.payload.data] })
    case 'FETCH_TASKS_FULFILLED':
      return Object.assign({}, state, { columns: state.columns.map(c => column(c, action)) })
    case 'ADD_COLUMN_FULFILLED':
      return Object.assign({}, state, { columns: [...state.columns, action.payload.data] })
    case 'ADD_TASK_FULFILLED':
      return Object.assign({}, state, { columns: state.columns.map(c => column(c, action)) })
    default:
      return state
  }
}

export default board