import React from 'react';
import './App.css';

import Dog from './dog';
import ErrorBoundary from './erorr-boundary';

const animals = ['Husky', 'Komondor', 'Cat', 'Akita'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Error Boundaries
      </header>
      <div>
        {animals.map(animal => (<ErrorBoundary><Dog animal={animal} /></ErrorBoundary>))}
      </div>
    </div>
  );
}

export default App;
