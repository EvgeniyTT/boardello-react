import React from 'react'
import { connect } from 'react-redux'
import { fetchBoard, fetchColumns, fetchTasks, addColumn, addTask } from '../../actions'
import BoardColumn from '../../components/BoardColumn/index.jsx'
import './styles.css'

class BoardComponent extends React.Component {

  componentWillMount() {
    console.log('WILL MOUNT')
    this.props.board.id = this.props.location.pathname.split('/').pop()

    this.props.fetchBoard(this.props.board.id)
    this.props.fetchColumns(this.props.board.id)
    this.props.fetchTasks(this.props.board.id)
  }

  render() {
    return (
      <div>
        <h1>TITLE - {this.props.board.title}</h1>
        <button onClick={ () => { this.props.addColumn({ title: 'newColumn', boardId: this.props.board.id }) }}>Add Column</button>
        { this.props.board.columns
            ? this.props.board.columns.map(column =>
              <BoardColumn
                key={column.id}
                column={column}
                fetchTasks={() => { this.props.fetchTasks(this.props.board.id, column.id) }}
                addTask={() => { this.props.addTask({ title: 'newTask', boardId: this.props.board.id, columnId: column.id }) } }
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
    fetchTasks: (boardId, columnId) => {
      dispatch(fetchTasks(boardId, columnId))
    },
    addColumn: column => {
      dispatch(addColumn(column))
    },
    addTask: task => {
      dispatch(addTask(task))
    },
  }
)

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Board
