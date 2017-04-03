import React from 'react'
import TaskPanel from '../TaskPanel/index.jsx'
import './styles.css'

const BoardColumn = ({ column, addTask, fetchTasks }) => {
  // fetchTasks()
  return (
    <div className="column">
      <span>{ column.title }</span>
      <button onClick={ addTask }>Add Task</button>
      <div className="tasks">
        { column.tasks
          ? column.tasks.map(task => <TaskPanel key={task.id} title={task.title} />)
          : []
        }
      </div>
    </div>
  )
}

export default BoardColumn