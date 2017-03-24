import React from 'react';
import { connect } from 'react-redux';
import BoardPanel from '../../components/BoardPanel';
import './styles.css';

class Boards extends React.Component {

  constructor(props, context) {
    super();
    this.newBoard = '';
    this.store = context.store;
    this.state = context.store.getState();
  }

  createBoard() {
    console.log(this.input.value);
    this.store.dispatch({ type: 'ADD_BOARD', boardName: this.input.value });
  }

  render() {
    return (
      <div>
        <div className="boardList">
          <h1>Public</h1>
          <ul>
            { this.state.boards
                .filter(board => board.type === 'public')
                .map(board => <li key={board.id}><BoardPanel title={board.title} /></li>) }
          </ul>
        </div>
        <div className="boardList">
          <h1>Private</h1>
          <ul>
            { this.state.boards
                .filter(board => board.type === 'private')
                .map(board => <li key={board.id}><BoardPanel title={board.title} /></li>) }
          </ul>
        </div>
        <input type="text" ref={(node) => { this.input = node; }} />
        <button onClick={() => { this.createBoard(); }}>Add A Board</button>
      </div>
    );
  }
}

Boards.contextTypes = {
  store: React.PropTypes.object,
};


export default Boards;
