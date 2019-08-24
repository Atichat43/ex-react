import React, { Component } from 'react'

import Loading from './loading'
import PostItem from './post-item'

class HomePage extends Component {
  render() {
    const { contacts, timer } = this.props

    return (
      <div>
        {timer && timer.end && (
          <h4>Loading time:
            <span>{((timer.end - timer.start) / 1000).toFixed(2)}</span>
          </h4>
        )}
        {contacts.map(contact => (
          <div key={contact.phone}>
            <PostItem contact={contact} />
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Loading('contacts')(HomePage)
