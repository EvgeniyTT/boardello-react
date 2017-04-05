import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
