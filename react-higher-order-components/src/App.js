import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/?results=50')
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
        {/* our component here */}
      </div>
    )
  }
}

export default App;
