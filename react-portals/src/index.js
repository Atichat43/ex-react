import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MusicPlayer from './music-player'

const timer = Date.now()

ReactDOM.render(
  <div>
    <MusicPlayer parentState={timer} />
    <App />
    <div className="content" />
    <div className="content" />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
