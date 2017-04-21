import React from 'react'

const LoaderHOC = InnerComponent => (
  class Loader extends React.Component {

    componentWillMount() {
      this.props.fetchTasks(this.props.boardId, this.props.column.id)
    }

    render() {
      return typeof this.props.column.tasks === 'undefined'
        ? <span>PENDING</span>
        : <InnerComponent {...this.props} />
    }
  }
)

export default LoaderHOC