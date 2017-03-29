import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BoardPanel = props => (
  <div className='board-panel'>
    <Link to={`/boards/${props.id}`}>
      <div>
        <span>BOARD - {props.title}</span>
      </div>
    </Link>
  </div>
)

export default BoardPanel
