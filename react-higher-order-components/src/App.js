import React, { Component } from 'react';
import './App.css';

import HomePage from './home-page'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/?results=5')
      .then(res => res.json())
      .then(res => res.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
      })))
      .then(res => this.setState(() => ({ contacts: res })))
  }

  render() {
    const { contacts } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <p>Higher-order component</p>
          <p>Number of contacts: {contacts && contacts.length}</p>
        </header>
        {contacts && <HomePage contacts={contacts}/>}
      </div>
    )
  }
}

export default App;
