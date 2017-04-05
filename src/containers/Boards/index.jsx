import React from 'react'
import { connect } from 'react-redux'
import BoardList from '../../components/BoardList/index'
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
    addBoard: (title, type) => {
      dispatch(addBoard(title, type))
    },
    removeBoard: boardId => {
      dispatch(removeBoard(boardId))
    },
  }
)

BoardComponent.propTypes = {
  fetchBoards: React.PropTypes.func,
  addBoard: React.PropTypes.func,
  removeBoard: React.PropTypes.func,
  boards: React.PropTypes.array,
}

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Boards
