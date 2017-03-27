import React from 'react';
import BoardPanel from './BoardPanel';

const BoardList = ({ type, boards }) => (
  <div className="boardList">
    <h1>{ type }</h1>
    <ul>
      { boards.map(board => <li key={board.id}><BoardPanel title={board.title} /></li>) }
    </ul>
  </div>
);

export default BoardList;
