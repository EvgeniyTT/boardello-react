import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import App from './App.jsx'
import boardsReducer from '../src/reducers'
import { fetchBoards } from './actions'
import './index.css'


const middlewares = applyMiddleware(createLogger(), thunk, promise())

const store = createStore(boardsReducer, middlewares)

render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
)
