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
    return (
      <div className="column">
        <span>{ this.props.column.title }</span>
        <button onClick={ () => { this.props.addTask(this.props.boardId, this.props.column.id) } }>Add Task</button>
        <div className="tasks">
          { this.props.column.tasks
            ? this.props.column.tasks.map(task => <TaskPanel key={task.id} title={task.title} />)
            : []
          }
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

const Column = connect(null, mapDispatchToProps)(ColumnComponent)

export default Column