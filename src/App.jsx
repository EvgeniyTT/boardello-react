import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoPanel from '../src/components/TodoPanel'
import Boards from '../src/containers/Boards/index'
import Board from '../src/containers/Board/index'
import './App.css'

const App = () => (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <h1>HI MAN</h1>} />
        <Route strict path="/boards/:id" component={Board} />
        <Route exact path="/boards" component={Boards} />
      </div>
    </Router>
)

export default App
