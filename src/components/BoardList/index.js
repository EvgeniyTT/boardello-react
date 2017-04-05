import React from 'react'
import BoardPanel from '../BoardPanel/index'

const BoardList = ({ type, boards, removeBoard }) => (
  <div className="boardList">
    <h1>{ type }</h1>
    <ul>
      { boards.map(board => <li key={board.id}><BoardPanel title={board.title} id={board.id} removeBoard={removeBoard} /></li>) }
    </ul>
  </div>
)

BoardList.propTypes = {
  removeBoard: React.PropTypes.func,
  boards: React.PropTypes.array,
  type: React.PropTypes.string,
}

export default BoardList
