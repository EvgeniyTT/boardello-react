
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
      console.log('PAYLOAD', action.payload)
      console.log('state.id', state.id)
      console.log('action.payload.data.columnId', action.payload.data.columnId)
      if (state.id == action.payload.data.columnId) {
        return { ...state, tasks: state.tasks.filter(task => {
          console.log('TASKID: ', task.id)
          console.log('TASKID: ', action.payload.config.url.split('/').pop())
          task.id != action.payload.config.url.split('/').pop()
        })
      }
      }
      return state
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
    case 'FETCH_TASKS':
      return { ...state, columns: state.columns.map(c => column(c, action)) }
    default:
      return state
  }
}

export default board