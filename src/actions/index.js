
import axios from 'axios'

export const addBoard = (title, type) => ({
  type: 'ADD_BOARD',
  payload: axios.post('http://localhost:3001/boards',
    { title, type, columns: [] },
    { headers: { 'Content-Type': 'application/json' } }
) })

export const removeBoard = id => ({
  type: 'REMOVE_BOARD',
  payload: axios.delete(`http://localhost:3001/boards/${id}`),
})

export const fetchBoards = () => ({
  type: 'FETCH_BOARDS',
  payload: axios.get('http://localhost:3001/boards'),
})

export const fetchBoard = id => ({
  type: 'FETCH_BOARD',
  payload: axios.get(`http://localhost:3001/boards/${id}`),
})

export const fetchColumns = boardId => ({
  type: 'FETCH_COLUMNS',
  payload: axios.get(`http://localhost:3001/columns?boardId=${boardId}`),
})

export const addColumn = column => ({
  type: 'ADD_COLUMN',
  payload: axios.post('http://localhost:3001/columns/',
    column,
    { headers: { 'Content-Type': 'application/json' } }
  ),
})

export const addTask = task => ({
  type: 'ADD_TASK',
  payload: axios.post('http://localhost:3001/tasks/',
    task,
    { headers: { 'Content-Type': 'application/json' } }
  ),
})

// export const fetchTasks = (boardId, columnId) => ({
//   type: 'FETCH_TASKS',
//   payload: axios.get(`http://localhost:3001/tasks/?boardId=${boardId}&columnId=${columnId}`),
// })

export const fetchTasks = boardId => ({
  type: 'FETCH_TASKS',
  payload: axios.get(`http://localhost:3001/tasks/?boardId=${boardId}`),
})

