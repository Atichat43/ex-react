import React from 'react';
import './App.css';

import Dog from './dog';

const animals = ['Husky', 'Komondor', 'Cat' ,'Akita'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Error Boundaries
      </header>
      <div>
        {animals.map(animal => <Dog animal={animal}/>)}
      </div>
    </div>
  );
}

export default App;
