import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import { StoreContext } from 'redux-react-hook';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './stores/configureStore';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
