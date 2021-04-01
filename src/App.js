import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
