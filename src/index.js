import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

import { createStore, combineReducers } from 'redux';
import boardsReducer from '../src/reducers';
import { Provider } from 'react-redux';

const store = createStore(boardsReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

