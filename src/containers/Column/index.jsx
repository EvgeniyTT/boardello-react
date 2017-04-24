import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
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

  render() {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div>
        <CSSTransitionGroup
          transitionName="up"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            <div className='column'>
              <span>{ this.props.column.title }</span>
              <button onClick={ () => { this.props.addTask(this.props.boardId, this.props.column.id) } }>Add Task</button>
              <div className="tasks">
                { this.props.column.tasks.map(task => <TaskPanel key={task.id} id={task.id} title={task.title} removeTask={this.props.removeTask} />) }
              </div>
            </div>
        </CSSTransitionGroup>
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