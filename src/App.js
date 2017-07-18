import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="App-header--right">
            </div>
            <div className="App-header--left">
                <img alt="Smith and Crown header" className="App-header--image" src="img/bg-header-smithandcrown.jpg" />
                <h1>Currency Converter</h1>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
