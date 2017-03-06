import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var shared = require('helloworld-shared');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {"response":"No data yet..."};
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    let bookAPI = new shared.api.Books();
    var self = this;
    bookAPI.getChapter(function(data){
      self.setState({response:data});
    });
  }
  render() {    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />            
        </div>
        <p className="App-intro">          
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/><br/><br/>
          <button onClick={this.clickHandler} > Query Django Backend! </button>
          <br/><br/><br/>
          {this.state.response}
        </p>
      </div>
    );
  }
}

// class App {}
export default App;
