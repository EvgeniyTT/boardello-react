import React, { PropTypes } from 'react'
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

const mapDispatchToProps = {
  fetchTasks,
  addTask,
  removeTask,
}

ColumnComponent.propTypes = {
  fetchTasks: PropTypes.func,
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
  column: PropTypes.object,
  boardId: PropTypes.number,
  pending: PropTypes.bool,
}

const Column = connect(null, mapDispatchToProps)(ColumnComponent)

export default Column