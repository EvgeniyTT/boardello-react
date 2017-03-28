import React from 'react';
import { connect } from 'react-redux';
import BoardList from '../../components/BoardList';
import { addBoard, fetchBoards } from '../../actions';
import './styles.css';

const BoardComponent = ({ boards, addBoard, fetchBoards }) => {
  let input
  let select
  return (
    <div>
      <div>
        <input type="text" ref={(node) => { input = node }} />
        <select ref={(node) => { select = node }}>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <button onClick={() => { addBoard(input.value, select.value) }}>Add A Board</button>
        <button onClick={() => { fetchBoards() }}>Fetch Boards</button>
      </div>
      <BoardList type="public" boards={boards.filter(board => board.type === 'public')} />
      <BoardList type="private" boards={boards.filter(board => board.type === 'private')} />
    </div>
  )
}

const mapStateToProps = state => (
  {
    boards: state.boards,
  }
)

const mapDispatchToProps = dispatch => (
  {
    addBoard: (boardName, boardType) => {
      dispatch(addBoard(boardName, boardType))
    },
    fetchBoards: () => { dispatch(fetchBoards()) },
  }
)

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Boards
