import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, addTask } from '../../actions'
import TaskPanel from '../../components/TaskPanel/index.jsx'
import './styles.css'

class ColumnComponent extends React.Component {

  componentWillMount() {
    this.props.fetchTasks(this.props.boardId, this.props.column.id)
  }

  render() {
    const content = this.props.pending ? <span>PENDING</span> : this.props.column.tasks.map(task => <TaskPanel key={task.id} title={task.title} />)

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
    addTask: task => {
      dispatch(addTask(task))
    },
  }
)

ColumnComponent.propTypes = {
  fetchTasks: React.PropTypes.func,
  addTask: React.PropTypes.func,
  column: React.PropTypes.object,
  boardId: React.PropTypes.number,
  pending: React.PropTypes.bool,
}

const Column = connect(null, mapDispatchToProps)(ColumnComponent)

export default Column