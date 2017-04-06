import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BoardPanel = props => (
  <div className='board-panel'>
    <Link to={`/boards/${props.id}`}>
      <div>
        <span>BOARD - {props.title}</span>
        <button
          className="small-btn"
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
  removeBoard: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
}

export default BoardPanel
