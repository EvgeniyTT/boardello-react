import React from 'react'
import { connect } from 'react-redux'
import { fetchBoard } from '../../actions'
import BoardColumn from '../../components/BoardColumn/index.jsx'
import './styles.css'

class BoardComponent extends React.Component {

  componentWillMount() {
    const boardId = this.props.location.pathname.split('/').pop()

    this.props.fetchBoard(boardId)
  }

  render() {
    return (
      <div>
        <h1>TITLE - {this.props.board.title}</h1>
        <button>Add Column</button>
        {this.props.board.columns.map(column => <BoardColumn column={column} />)}
      </div>
    )
  }

}

const mapStateToProps = state => (
  {
    board: state.board,
  }
)

const mapDispatchToProps = dispatch => (
  {
    fetchBoard: id => {
      dispatch(fetchBoard(id))
    },
  }
)

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Board
