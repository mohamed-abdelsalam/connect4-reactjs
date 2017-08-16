import React from 'react';
import './Cell.css';
import $ from 'jquery';

class Cell extends React.Component {
  render() {
    {$.post("http://localhost:3001/start_new_game/start", {name: "Mohamed", type: "car"});}
    return (<h1> hello </h1>);
  }
}
export default Cell;
