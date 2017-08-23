import React from 'react';
import Column from './Column.jsx';
import './Grid.css';

export default class Grid extends React.Component {

  constructor() {
    super();
    var grid = new Array(7);
    for (var i = 0; i < grid.length; i ++){
      grid[i] = new Array(8).fill('0');
    }
    this.state = {
      board : grid,
      nextPlayer : '1',
    };
  }

  handleClick = (columnNumber) => {
    const board = this.state.board.slice();
    const nextPlayer = this.state.nextPlayer === '1' ? '2' : '1';
    for (var index = board[columnNumber].length; index >= 0 ; index--) {
      if (board[columnNumber][index] === '0') {
        board[columnNumber][index] = this.state.nextPlayer;
        this.setState({board: board, nextPlayer: nextPlayer});
        return;
      }
    }
  }

  render() {
    return (<div className='grid'>
      <Column colNum={0} onclick={(i) => this.handleClick(i)} colMap={this.state.board[0]}/>
      <Column colNum={1} onclick={(i) => this.handleClick(i)} colMap={this.state.board[1]}/>
      <Column colNum={2} onclick={(i) => this.handleClick(i)} colMap={this.state.board[2]}/>
      <Column colNum={3} onclick={(i) => this.handleClick(i)} colMap={this.state.board[3]}/>
      <Column colNum={4} onclick={(i) => this.handleClick(i)} colMap={this.state.board[4]}/>
      <Column colNum={5} onclick={(i) => this.handleClick(i)} colMap={this.state.board[5]}/>
      <Column colNum={6} onclick={(i) => this.handleClick(i)} colMap={this.state.board[6]}/>
    </div>);
  }
}

// import $ from 'jquery';
  //   // {$.post("http://localhost:3001/start_new_game/start", {name: "Mohamed", type: "car"});}
