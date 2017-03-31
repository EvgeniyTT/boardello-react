import React from 'react'
import { connect } from 'react-redux'
import { fetchColumns, addColumn } from '../../actions'
import BoardColumn from '../../components/BoardColumn/index.jsx'
import './styles.css'

class BoardComponent extends React.Component {

  componentWillMount() {
    this.props.board.id = this.props.location.pathname.split('/').pop()

    this.props.fetchColumns(this.props.board.id)
  }

  render() {
    return (
      <div>
        <h1>TITLE - {this.props.board.title}</h1>
        <button onClick={ () => { this.props.addColumn({ title: 'newColumn', boardId: this.props.board.id }) }}>Add Column</button>
        { this.props.board.columns ? this.props.board.columns.map(column => <BoardColumn key={column.id} column={column} />) : [] }
      </div>
    )
  }

}

const mapStateToProps = state => (
  {
    board: state.board,
  }
)

const mapDispatchToProps = dispatch => (
  {
    fetchColumns: id => {
      dispatch(fetchColumns(id))
    },
    addColumn: id => {
      dispatch(addColumn(id))
    },
  }
)

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)

export default Board
