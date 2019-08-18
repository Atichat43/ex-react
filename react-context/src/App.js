import React, { Component } from 'react';
import './App.css';;

const MyContext = React.createContext();

class Button extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
            <React.Fragment>
              <p>Name: {context.user.name}</p>
              <p>Age: {context.user.age}</p>
              <button onClick={context.updateAgeUser}>Click here</button>
            </React.Fragment>
          )}
      </MyContext.Consumer>
    )
  }
}

const MyWrapper = props => (
  <div>
    <Button></Button>
  </div>
)

class MyProvider extends Component {
  state = {
    name: 'Atichat',
    age: 23,
  }

  render() {
    return (
      <MyContext.Provider value={{
        user: this.state,
        updateAgeUser: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

function App() {
  return (
    <div className="App">
      <MyProvider>
        <header className="App-header" />
        <div>
          <p> Some Compoennt 1
          <MyWrapper />
            <p> Some Compoennt 2 
              <MyWrapper />
            </p>
          </p>
        </div>
        <div>
          <p> Footer Component 
          <MyWrapper />
          </p>
        </div>
      </MyProvider>
    </div>
  );
}

export default App;
