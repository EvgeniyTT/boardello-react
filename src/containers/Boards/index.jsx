import React from 'react'
import { connect } from 'react-redux'
import BoardList from '../../components/BoardList'
import AddBoard from '../../components/AddBoard/index'
import { addBoard, removeBoard } from '../../actions'
import './styles.css'

const BoardComponent = ({ boards, addBoard, removeBoard }) => (
    <div className="boards">
      <AddBoard addBoard={ addBoard } />
      <BoardList type="public" boards={boards.filter(board => board.type === 'public')} removeBoard={removeBoard} />
      <BoardList type="private" boards={boards.filter(board => board.type === 'private')} removeBoard={removeBoard} />
    </div>
  )

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
    removeBoard: boardId => {
      dispatch(removeBoard(boardId))
    },
  }
)

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Boards
