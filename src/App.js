import React, { Component } from 'react';
import Gameweek from './Gameweek';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Gameweek />
      </div>
    );
  }
}

export default App;
