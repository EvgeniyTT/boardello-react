import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { fetchTasks, addTask, removeTask } from '../../actions'
import TaskPanel from '../../components/TaskPanel/index.jsx'
import './styles.scss'


const columnTarget = {
  drop(props, monitor) {
    props.moveTask(monitor.getItem().taskId, props.column.id)
  },
}

function collect(cnct, monitor) {
  return {
    connectDropTarget: cnct.dropTarget(),
    isOver: monitor.isOver(),
  }
}

class ColumnComponent extends React.Component {

  componentWillMount() {
    this.props.fetchTasks(this.props.boardId, this.props.column.id)
    this.props.column.isFetchingTasks = true
  }

  render() {
    const { connectDropTarget } = this.props
    console.log('GETCHING: ', this.props.column.isFetchingTasks)
    const content = this.props.column.isFetchingTasks
      ? <span>PENDING</span>
      : this.props.column.tasks.map(task => <TaskPanel key={task.id} id={task.id} title={task.title} removeTask={this.props.removeTask} />)

    return connectDropTarget(
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
  moveTask: PropTypes.func,
  connectDropTarget: PropTypes.func,
  isOver: PropTypes.bool.isRequired,
  column: PropTypes.object,
  boardId: PropTypes.number,
  pending: PropTypes.bool,
}

const Column = connect(null, mapDispatchToProps)(ColumnComponent)

export default DropTarget('task', columnTarget, collect)(Column)