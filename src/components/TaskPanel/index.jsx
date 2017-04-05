import React from 'react'
import './styles.css'

const TaskPanel = ({ title, removeTask }) => (
  <div className="taskPanel">
    <span>{title}</span>
    <button onClick={removeTask}>x</button>
  </div>
)

TaskPanel.propTypes = {
  title: React.PropTypes.string,
  removeTask: React.PropTypes.func,
}

export default TaskPanel