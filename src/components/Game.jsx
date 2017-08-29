import React from 'react';
import Grid from './Grid.jsx';
import { createEmptyBoard } from '../Util/GameBoardUtil.js';

export default class Game extends React.Component {

  constructor() {
    super();
    var board = createEmptyBoard();
    this.state = {
      board : board,
      currentPlayer : '0',
      winners : ['0', '0', '0'],
      gameRound : 0,
    };
  }

  handleClick = (columnNumber) => {
    const board = this.state.board.slice();
    const nextPlayer = this.state.currentPlayer === '1' ? '2' : '1';
    for (var index = board[columnNumber].length; index >= 0 ; index--) {
      if (board[columnNumber][index] === '0') {
        board[columnNumber][index] = nextPlayer;
        this.setState({board: board, currentPlayer: nextPlayer});
        var winner = this.checkWinner(board);
        if (winner !== '0') {
          this.playerWon(winner);
        }
        return;
      }
    }
  }

  checkWinner = (board) => {
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j] !== '0') {
          var horizontalWinner = this.checkHorizontalMatches(board, i, j);
          var verticalWinner = this.checkVerticalMatches(board, i, j);
          var diagonalRightWinner = this.checkDiagonalRightMatches(board, i, j);
          var diagonalLeftWinner = this.checkDiagonalLeftMatches(board, i, j);
          if (horizontalWinner === '1' ||
              verticalWinner === '1' ||
              diagonalRightWinner === '1' ||
              diagonalLeftWinner === '1') {
            return '1';
          } else if (horizontalWinner === '2' ||
              verticalWinner === '2' ||
              diagonalRightWinner === '2' ||
              diagonalLeftWinner === '2') {
            return '2';
          }
        }
      }
    }
    return '0';
  }

  checkVerticalMatches = (board, i, j) => {
    for (var indexJ = j; indexJ < j + 4; indexJ++) {
      if (indexJ === board[i].length || board[i][j] !== board[i][indexJ]) {
        return '0';
      }
    }
    return board[i][j];
  }

  checkHorizontalMatches = (board, i, j) => {
    for (var indexI = i; indexI < i + 4; indexI++) {
      if (indexI === board.length || board[i][j] !== board[indexI][j]) {
        return '0';
      }
    }
    return board[i][j];
  }

  checkDiagonalRightMatches = (board, i, j) => {
    for (var indexI = i, indexJ = j; indexI < i + 4; indexI++, indexJ++) {
      if (indexI === board.length || indexJ === board[i].length || board[i][j] !== board[indexI][indexJ]) {
        return '0';
      }
    }
    return board[i][j];
  }

  checkDiagonalLeftMatches = (board, i, j) => {
    for (var indexI = i, indexJ = j; indexI < i + 4; indexI++, indexJ--) {
      if (indexI === board.length || indexJ === -1 || board[i][j] !== board[indexI][indexJ]) {
        return '0';
      }
    }
    return board[i][j];
  }

  playerWon = (playerSymbol) => {
    var board = createEmptyBoard();
    var currentPlayer = '0';
    var gameRound = this.state.gameRound + 1;
    var winners;
    if (gameRound === 3) {
      winners = ['0', '0', '0'];
    } else {
      winners = this.state.winners.slice();
      winners[this.state.gameRound] = playerSymbol;
    }
    this.setState({
      board : board,
      currentPlayer : currentPlayer,
      winners : winners,
      gameRound : gameRound});
  }

  wait = (waitTime) => {
    var startTime = new Date().getTime();
    while ((new Date().getTime()) - startTime < waitTime);
  }

  roundResults = (roundNumber) => {
    return (this.state.winners[roundNumber] !== '0') &&
      (<h4> Round # {roundNumber + 1} Winner
        {(this.state.winners[roundNumber] === '1' ? ' Red' : ' Blue')}
      </h4>);
  }
  renderGameInfo = () => {
    return (<div>
      <h3> Round {this.state.gameRound + 1} </h3>
      {this.roundResults(0)}
      {this.roundResults(1)}
      {this.roundResults(2)}
    </div>);
  }

  render() {
    return (<div>
      <Grid girdOnClick={(columnNumber) => this.handleClick(columnNumber)} board={this.state.board}/>
      {this.renderGameInfo()}
    </div>);
  }
}
