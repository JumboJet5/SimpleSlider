import React, { Component } from 'react';
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
          <image src="https://placeimg.com/150/150/tech/sepia"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Or not!
        </p>
      </div>
    );
  }
}

export default App;
