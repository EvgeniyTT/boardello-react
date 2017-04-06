import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { fetchBoard, fetchColumns, addColumn } from '../../actions'
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
        { this.props.board.columns
            ? this.props.board.columns.map(column =>
              <Column
                key={+column.id}
                boardId={+this.props.board.id}
                column={column}
              />)
            : []
        }
        <button onClick={ () => { this.props.addColumn(this.props.board.id) }}>Add Column</button>
      </div>
    )
  }

}

const mapStateToProps = state => (
  {
    board: state.board,
  }
)

const mapDispatchToProps = {
  fetchBoard,
  fetchColumns,
  addColumn,
}

BoardComponent.propTypes = {
  fetchBoard: PropTypes.func,
  fetchColumns: PropTypes.func,
  addColumn: PropTypes.func,
  board: PropTypes.object,
  location: PropTypes.object,
}

const BoardDnD = DragDropContext(HTML5Backend)(BoardComponent)
const Board = connect(mapStateToProps, mapDispatchToProps)(BoardDnD)

export default Board
