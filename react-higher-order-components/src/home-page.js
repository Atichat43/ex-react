import React, { Component } from 'react'

import Loading from './loading'
import PostItem from './post-item'

class HomePage extends Component {
  render() {
    const { contacts } = this.props

    return (
      <div>
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

export default Loading()(HomePage)
