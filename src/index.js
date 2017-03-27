import React from 'react';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import boardsReducer from '../src/reducers';
import { Provider } from 'react-redux';

const middlewares = applyMiddleware(createLogger(), thunk);

const store = createStore(boardsReducer, middlewares);

fetch('http://localhost:3004/boards')
  .then(response => {
    console.log(response);
    return response.json();
   })
  .then(boards => {
    console.log(boards);
  })
  .catch( e => {
    console.log('ERROR: ', e);
  });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

