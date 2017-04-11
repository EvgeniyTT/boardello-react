
const column = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED':
      if (state.id == action.payload.config.url.split('columnId=').pop()) {
        return { ...state, tasks: action.payload.data, isFetchingTasks: false }
      }
      return state
    case 'ADD_TASK_FULFILLED':
      if (state.id == action.payload.data.columnId) {
        return { ...state, tasks: [...state.tasks, action.payload.data] }
      }
      return state
    case 'REMOVE_TASK_FULFILLED':
      return { ...state, tasks: state.tasks.filter(task => task.id != action.payload.config.url.split('/').pop()) }
    case 'MOVE_TASK_FULFILLED':
      // if move to the same column
      if (state.tasks.filter(task => task.id == action.payload.config.url.split('/').pop()).length > 0 && state.id == action.payload.data.columnId) {
        return state
      }
      // add task to the new column
      if (state.id == action.payload.data.columnId) {
        return { ...state, tasks: [...state.tasks, action.payload.data] }
      }
      // remove task from column if it was there
      return { ...state, tasks: state.tasks.filter(task => task.id != action.payload.config.url.split('/').pop()) }
    default:
      return state
  }
}

const board = (state = { columns: [] }, action) => {
  switch (action.type) {
    case 'FETCH_BOARD_FULFILLED':
      return action.payload.data
    case 'FETCH_COLUMNS_FULFILLED':
      return { ...state, columns: [...action.payload.data] }
    case 'FETCH_TASKS_FULFILLED':
      return { ...state, columns: state.columns.map(c => column(c, action)) }
    case 'ADD_COLUMN_FULFILLED':
      return { ...state, columns: [...state.columns, action.payload.data] }
    case 'ADD_TASK_FULFILLED':
      return { ...state, columns: state.columns.map(c => column(c, action)) }
    case 'REMOVE_TASK_FULFILLED':
      return { ...state, columns: state.columns.map(c => column(c, action)) }
    case 'MOVE_TASK_FULFILLED':
      return { ...state, columns: state.columns.map(c => column(c, action)) }
    case 'FETCH_TASKS':
      return { ...state, columns: state.columns.map(c => column(c, action)) }
    default:
      return state
  }
}

export default board