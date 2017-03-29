import React from 'react'
import { connect } from 'react-redux'
import BoardList from '../../components/BoardList'
import AddBoard from '../../components/AddBoard/index'
import { addBoard } from '../../actions'
import './styles.css'

const BoardComponent = ({ boards, addBoard }) => (
    <div className="boards">
      <AddBoard addBoard={ addBoard } />
      <BoardList type="public" boards={boards.filter(board => board.type === 'public')} />
      <BoardList type="private" boards={boards.filter(board => board.type === 'private')} />
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
  }
)

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Boards
