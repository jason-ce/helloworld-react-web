import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const shared = require('helloworld-shared');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>first var: {shared.helloText}</h2>
          <h4>second var: {shared.goodbye.goodbye()}</h4>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// class App {}
export default App;
