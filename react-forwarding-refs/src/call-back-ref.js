import React from 'react'

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null

    this.setTextInputRef = element => {
      console.log('setTextInputRef', element)
      this.textInput = element
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this)
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.targetButton.current.textContent = this.textInput.value
    this.props.cb(true)
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.setTextInputRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CustomTextInput