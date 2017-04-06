import React, { PropTypes } from 'react'
import './styles.css'

const TaskPanel = ({ title, removeTask }) => (
  <div className="taskPanel">
    <span>{title}</span>
    <button className="small-btn" onClick={removeTask}>x</button>
  </div>
)

TaskPanel.propTypes = {
  title: PropTypes.string,
  removeTask: PropTypes.func,
}

export default TaskPanel