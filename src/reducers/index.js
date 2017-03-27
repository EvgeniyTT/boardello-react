import { createStore, combineReducers } from 'redux';

const initState = { 
  boards: [ 
    {id:0, title:'a', type: 'public'},
    {id:1, title:'b', type: 'private'},
    {id:2, title:'c', type: 'public'}
    ]
  }

let nextID = 10;

const boardsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      const newState = Object.assign({}, state, { boards: [...state.boards, { id: nextID++, title: action.board.boardName, type: action.board.boardType }] })
      return newState;
    case 'REMOVE_BOARD':
      return;
    default:
      return state;
  }
};

export default boardsReducer;
