import React from 'react'
import './styles.css'

const TaskPanel = ({ title }) => (
  <div className="taskPanel">
    <span>{title}</span>
  </div>
)

TaskPanel.propTypes = {
  title: React.PropTypes.string,
}

export default TaskPanel