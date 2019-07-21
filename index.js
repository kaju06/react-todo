import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import 'semantic-ui-css/semantic.min.css'
import './style.css';
import AddTodo from './addTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <AddTodo />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
