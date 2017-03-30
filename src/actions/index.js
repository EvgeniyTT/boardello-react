
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

export const fetchBoard = id => {
  console.log('ID:', id)
  return {
    type: 'FETCH_BOARD',
    payload: axios.get(`http://localhost:3001/boards/${id}`),
  }
}

