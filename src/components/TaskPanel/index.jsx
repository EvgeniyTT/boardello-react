import React from 'react'
import './styles.css'

const TaskPanel = ({ title }) => {
  return (
    <div>
      <span>TASK - {title}</span>
    </div>
  )
}

export default TaskPanel