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
    let google = new shared.api.Google();
    var self = this;
    let url = "http://localhost:8000";
    //let url = "http://localhost:8000/study-schedule/api/v2/overview/?today=2017-03-06";
    google.getJSON(function(data){
      self.setState({response:data});
    }, url);
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
