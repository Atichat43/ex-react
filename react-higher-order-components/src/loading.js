import React, { Component } from 'react'

const Loading = props => WrappedComponent => {
  return class LoadingHOC extends Component {
    render() {
      return <WrappedComponent {...this.props} /> 
    }
  }
}

export default Loading
