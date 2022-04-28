import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './src/components/App';

if (module.hot) {
  module.hot.accept();
}

const vh = window.innerHeight - 60;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(<App />, document.getElementById('root'));
