import React, { PropTypes } from 'react'
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

const mapDispatchToProps = {
  fetchBoards,
  addBoard,
  removeBoard,
}


BoardComponent.propTypes = {
  fetchBoards: PropTypes.func,
  addBoard: PropTypes.func,
  removeBoard: PropTypes.func,
  boards: PropTypes.array,
}

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Boards
