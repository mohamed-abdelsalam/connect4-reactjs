import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    {$.post('http://localhost:3001/start_new_game/start', {xml: "a77a" })}
    return (
      <div className="App">
          <h1> test</h1>
      </div>
    );
  }
}

export default App;
