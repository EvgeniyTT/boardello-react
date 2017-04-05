import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BoardPanel = props => (
  <div className='board-panel'>
    <Link to={`/boards/${props.id}`}>
      <div>
        <span>BOARD - {props.title}</span>
        <button
          onClick={event => {
            event.preventDefault()
            props.removeBoard(props.id)
          }}>x
        </button>
      </div>
    </Link>
  </div>
)

BoardPanel.propTypes = {
  removeBoard: React.PropTypes.func,
  id: React.PropTypes.number,
  title: React.PropTypes.string,
}

export default BoardPanel
