
import axios from 'axios'


export const addBoard = (title, type) => ({ type: 'ADD_BOARD', payload: axios.post(
  'http://localhost:3001/boards',
  { title, type },
  { headers: { 'Content-Type': 'application/json' } }
  ) })
export const fetchBoards = () => ({ type: 'FETCH_BOARDS', payload: axios.get('http://localhost:3001/boards') })
