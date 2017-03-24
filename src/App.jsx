import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



import './App.css';

import TodoPanel from '../src/components/TodoPanel';
import Boards from '../src/containers/Boards/index';


const App = () => (
    <Router>
      <div>
        <Route exact path="/" render={() => <h1>HI MAN</h1>} />
        <Route path="/todos" render={() => <TodoPanel title="todobaba" />} />
        <Route path="/boards" component={Boards} />
      </div>
    </Router>
);

export default App;
