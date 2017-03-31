import React from 'react'
import './styles.css'

const BoardColumn = ({ column }) => (
    <div className="column">
      <span>{ column.title }</span>
    </div>
  )

export default BoardColumn