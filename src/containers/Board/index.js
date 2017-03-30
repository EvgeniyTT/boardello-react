import React from 'react'
import BoardColumn from '../../components/BoardColumn'

const Board = ({ title, columns }) => (
    <div>
      <h1>{title}</h1>
      {columns.map(column => <BoardColumn column={column} />)}
    </div>
  )

export default Board
