import React from 'react';
import Column from './Column.jsx';
import './Grid.css';

export default class Grid extends React.Component {
  
  render() {
    return (<div className='grid'>
      <Column colNum={0} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[0]}/>
      <Column colNum={1} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[1]}/>
      <Column colNum={2} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[2]}/>
      <Column colNum={3} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[3]}/>
      <Column colNum={4} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[4]}/>
      <Column colNum={5} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[5]}/>
      <Column colNum={6} colOnClick={(i) => this.props.girdOnClick(i)} colMap={this.props.board[6]}/>
    </div>);
  }
}

// import $ from 'jquery';
  //   // {$.post("http://localhost:3001/start_new_game/start", {name: "Mohamed", type: "car"});}
