import React, { useState } from 'react';
import './App.css';

import CustomTextInput from './call-back-ref'
import WrapperButton from './forwarding-ref'

const targetButton = React.createRef()

function App() {
  const [isSubmit, setIsSubmit] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <CustomTextInput targetButton={targetButton} cb={setIsSubmit}></CustomTextInput>
        <WrapperButton ref={targetButton} isSubmit={isSubmit}> - </WrapperButton>
      </header>
    </div>
  );
}

export default App;
