import React from 'react';
import Column from './Column.jsx';
import './Grid.css';

export default class Grid extends React.Component {

  render() {
    return (<div className='column'>
      <Column colNum={0}/>
      <Column colNum={1}/>
      <Column colNum={2}/>
      <Column colNum={3}/>
      <Column colNum={4}/>
      <Column colNum={5}/>
      <Column colNum={6}/>
    </div>);
  }
}


// import $ from 'jquery';
  //   // {$.post("http://localhost:3001/start_new_game/start", {name: "Mohamed", type: "car"});}
