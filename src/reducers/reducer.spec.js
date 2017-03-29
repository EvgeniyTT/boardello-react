import expect from 'expect'
import reducer from './index'

describe('Boards Reducer', () => {
  it('should return the state on unknown action type', () => {
    const action = { type: 'SOME_UNKNOWN_ACTION_TYPE' }
    const state = { boards: [{ id: 3, title: 'board', type: 'private' }] }

    expect(reducer(state, action)).toEqual(state)
  })
  it('should add a board to the boards list', () => {
    const newBoard = { title: 'newBoard', type: 'private' }
    const action = { type: 'ADD_BOARD_FULFILLED', payload: { data: newBoard } }
    const initialState = { boards: [] }
    const expectedState = { boards: [{ title: 'newBoard', type: 'private' }] }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})