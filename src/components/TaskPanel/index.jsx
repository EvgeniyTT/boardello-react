import React, { PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import './styles.css'


const tasktSource = {
  beginDrag(props) {
    console.log('TASK PROPS: ', props)
    return { taskId: props.id }
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

const ItemTypes = { TASK: 'task' }

class TaskPanel extends React.Component {

  render() {
    const { connectDragSource, isDragging } = this.props

    return connectDragSource(
      <div className="taskPanel">
        <span>{this.props.title}</span>
        <button className="small-btn" onClick={() => this.props.removeTask(this.props.id)}>x</button>
      </div>
    )
  }

}

TaskPanel.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  removeTask: PropTypes.func,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}



export default DragSource(ItemTypes.TASK, tasktSource, collect)(TaskPanel)