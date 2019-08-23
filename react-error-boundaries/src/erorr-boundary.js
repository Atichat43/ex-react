import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <h2> Some Error Spotted here! </h2>
    }
    return this.props.children
  }
}

export default ErrorBoundary