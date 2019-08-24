import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class MusicPlayer extends Component {
  componentDidMount() {
    const portal = document.getElementById('portal')
    portal.scrollIntoView()
  }

  render() {
    return ReactDOM.createPortal(
      (
        <h1>
          {`Always Visible Mock Media Player! ${this.props.parentState}`}
        </h1>
      ),
      document.getElementById('portal')
    )
  }
}

export default MusicPlayer