import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app/App';
import { GlobalStyles } from 'styles/GlobalStyles';

/**
 * Bootstrap
 */
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('app'),
);
