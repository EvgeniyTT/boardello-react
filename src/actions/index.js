
import axios from 'axios'

export const fetchBoards = () => ({
  type: 'FETCH_BOARDS',
  payload: axios.get('http://localhost:3001/boards'),
})

export const fetchBoard = id => ({
  type: 'FETCH_BOARD',
  payload: axios.get(`http://localhost:3001/boards/${id}`),
})

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

export const fetchColumns = boardId => ({
  type: 'FETCH_COLUMNS',
  payload: axios.get(`http://localhost:3001/columns?boardId=${boardId}`),
})

export const addColumn = boardId => ({
  type: 'ADD_COLUMN',
  payload: axios.post('http://localhost:3001/columns/',
    { boardId, title: 'newColumn' },
    { headers: { 'Content-Type': 'application/json' } }
  ),
})

export const fetchTasks = (boardId, columnId) => ({
  type: 'FETCH_TASKS',
  boardId,
  columnId,
  payload: {
    baba: 'baba',
    promise: axios.get(`http://localhost:3001/tasks/?boardId=${boardId}&columnId=${columnId}`)
  },
})

export const addTask = (boardId, columnId) => ({
  type: 'ADD_TASK',
  payload: axios.post('http://localhost:3001/tasks/',
    { boardId, columnId, title: 'newTask' },
    { headers: { 'Content-Type': 'application/json' } }
  ),
})

export const removeTask = taskId => ({
  type: 'REMOVE_TASK',
  payload: axios.delete(`http://localhost:3001/tasks/${taskId}`),
})

export const moveTask = taskId => ({
  type: 'REMOVE_TASK',
  payload: axios.delete(`http://localhost:3001/tasks/${taskId}`),
})