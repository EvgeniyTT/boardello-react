import React from 'react'
import './styles.css'

const TaskPanel = ({ title }) => {
  return (
    <div className="taskPanel">
      <span>{title}</span>
    </div>
  )
}

export default TaskPanel