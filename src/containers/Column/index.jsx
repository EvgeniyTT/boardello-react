import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, addTask, removeTask } from '../../actions'
import TaskPanel from '../../components/TaskPanel/index.jsx'
import './styles.css'

class ColumnComponent extends React.Component {

  componentWillMount() {
    this.props.fetchTasks(this.props.boardId, this.props.column.id)
    this.props.column.isFetchingTasks = true
  }

  render() {
    const content = this.props.column.isFetchingTasks
      ? <span>PENDING</span>
      : this.props.column.tasks.map(task => <TaskPanel key={task.id} title={task.title} removeTask={() => { this.props.removeTask(task.id) }} />)

    return (
      <div className="column">
        <span>{ this.props.column.title }</span>
        <button onClick={ () => { this.props.addTask(this.props.boardId, this.props.column.id) } }>Add Task</button>
        <div className="tasks">
          { content }
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => (
  {
    fetchTasks: (boardId, columnId) => {
      dispatch(fetchTasks(boardId, columnId))
    },
    addTask: (boardId, columnId) => {
      dispatch(addTask(boardId, columnId))
    },
    removeTask: taskId => {
      dispatch(removeTask(taskId))
    },
  }
)

ColumnComponent.propTypes = {
  fetchTasks: React.PropTypes.func,
  addTask: React.PropTypes.func,
  removeTask: React.PropTypes.func,
  column: React.PropTypes.object,
  boardId: React.PropTypes.number,
  pending: React.PropTypes.bool,
}

const Column = connect(null, mapDispatchToProps)(ColumnComponent)

export default Column