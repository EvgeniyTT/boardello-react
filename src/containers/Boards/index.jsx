import React from 'react'
import { connect } from 'react-redux'
import BoardList from '../../components/BoardList'
import AddBoard from '../../components/AddBoard/index'
import { fetchBoards, addBoard, removeBoard } from '../../actions'
import './styles.css'

class BoardComponent extends React.Component {

  componentWillMount() {
    this.props.fetchBoards()
  }

  render() {
    return (
      <div className="boards">
        <AddBoard addBoard={ this.props.addBoard } />
        <BoardList type="public" boards={this.props.boards.filter(board => board.type === 'public')} removeBoard={this.props.removeBoard} />
        <BoardList type="private" boards={this.props.boards.filter(board => board.type === 'private')} removeBoard={this.props.removeBoard} />
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    boards: state.boards,
  }
)

const mapDispatchToProps = dispatch => (
  {
    fetchBoards: () => {
      dispatch(fetchBoards())
    },
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
