import React from 'react'
import { connect } from 'react-redux'
import { fetchBoard, fetchColumns, fetchTasks, addColumn, addTask } from '../../actions'
import Column from '../Column/index.jsx'
import './styles.css'

class BoardComponent extends React.Component {

  componentWillMount() {
    this.props.board.id = this.props.location.pathname.split('/').pop()
    this.props.fetchBoard(this.props.board.id)
    this.props.fetchColumns(this.props.board.id)
  }

  render() {
    return (
      <div className="board">
        <h1>TITLE - {this.props.board.title}</h1>
        <button onClick={ () => { this.props.addColumn(this.props.board.id) }}>Add Column</button>
        { this.props.board.columns
            ? this.props.board.columns.map(column =>
              <Column
                key={column.id}
                boardId={this.props.board.id}
                column={column}
              />)
            : []
        }
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
    fetchColumns: id => {
      dispatch(fetchColumns(id))
    },
    addColumn: column => {
      dispatch(addColumn(column))
    },
  }
)

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Board
