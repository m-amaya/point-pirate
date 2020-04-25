import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { App } from 'app/App';
import { GlobalStyles } from 'styles/GlobalStyles';

io();

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
