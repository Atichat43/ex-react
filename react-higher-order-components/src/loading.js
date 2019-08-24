import React, { Component } from 'react'

const Loading = loadingPropName => WrappedComponent => {
  return class LoadingHOC extends Component {
    state = {
      timer: null,
    }

    componentDidMount() {
      const timer = { start: Date.now() }
      this.setState(() => ({ timer }))
    }

    componentWillUpdate(nextProps) {
      const { timer } = this.state
      
      if (nextProps[loadingPropName].length > 0 && !timer.end) {
        const newTimer = { ...timer }
        newTimer.end = Date.now()
        this.setState(() => ({ timer: newTimer }))
      }
    }

    render() {
      const { timer } = this.state
      return (
        this.props[loadingPropName].length > 0 ?
        <WrappedComponent {...this.props} timer={timer} />
          : <h1> loading ... </h1>
      )
    }
  }
}

export default Loading
