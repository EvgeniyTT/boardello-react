import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { addTask, removeTask } from '../../actions'
import TaskPanel from '../../components/TaskPanel/index.jsx'
import LoaderHOC from '../../components/LoaderHOC/index'
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
    console.log('1')
    this.up = false
  }
  componentDidMount() {
    console.log('2')
    this.up = true
  }

  render() {
    const { connectDropTarget } = this.props

    this.columnClass = `column ${this.up && 'up'}`
    console.log('3', this.columnClass)
    return connectDropTarget(
      <div className={ this.columnClass }>
        <span>{ this.props.column.title }</span>
        <button onClick={ () => { this.props.addTask(this.props.boardId, this.props.column.id) } }>Add Task</button>
        <div className="tasks">
          { this.props.column.tasks.map(task => <TaskPanel key={task.id} id={task.id} title={task.title} removeTask={this.props.removeTask} />) }
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = {
  addTask,
  removeTask,
}

ColumnComponent.propTypes = {
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
  moveTask: PropTypes.func,
  connectDropTarget: PropTypes.func,
  isOver: PropTypes.bool.isRequired,
  column: PropTypes.object,
  boardId: PropTypes.number,
}

const Column = connect(null, mapDispatchToProps)(ColumnComponent)

export default LoaderHOC(DropTarget('task', columnTarget, collect)(Column))