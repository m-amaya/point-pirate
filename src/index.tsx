import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app/App';
import { Store, StoreCtx } from 'store';
import { style, StyleCtx } from 'styles';
import { GlobalStyles } from 'styles/GlobalStyles';

/**
 * Setup
 */
const store = new Store();

/**
 * Context Providers
 */
const Providers: React.FC = ({ children }) => (
  <StoreCtx.Provider value={store}>
    <StyleCtx.Provider value={style}>{children}</StyleCtx.Provider>
  </StoreCtx.Provider>
);

/**
 * Bootstrap
 */
ReactDOM.render(
  <>
    <GlobalStyles />
    <Providers>
      <App />
    </Providers>
  </>,
  document.getElementById('chatter-app'),
);
