import React from 'react';
import Grid from './Grid.jsx';

export default class Game extends React.Component {

  constructor() {
    super();
    var board = this.createNewBoard();
    this.state = {
      board : board,
      nextPlayer : '0',
      gameScores : ['0', '0', '0'],
      gameRound : 0,
    };
  }

  handleClick = (columnNumber) => {
    const board = this.state.board.slice();
    const nextPlayer = this.state.nextPlayer === '1' ? '2' : '1';
    for (var index = board[columnNumber].length; index >= 0 ; index--) {
      if (board[columnNumber][index] === '0') {
        board[columnNumber][index] = nextPlayer;
        this.setState({board: board, nextPlayer: nextPlayer});
        this.checkWinner(board);
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
          if (horizontalWinner === '1' || verticalWinner === '1' || diagonalRightWinner === '1' || diagonalLeftWinner === '1') {
            this.playerWon('1');
            // console.log('Platyer 1 won');
          } else if (horizontalWinner === '2' || verticalWinner === '2' || diagonalRightWinner === '2' || diagonalLeftWinner === '2') {
            this.playerWon('2');
            // console.log('Platyer 2 won');
          }
        }
      }
    }
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

  createNewBoard = () => {
    var board = new Array(7);
    for (var i = 0; i < board.length; i ++){
      board[i] = new Array(8).fill('0');
    }
    return board;
  }

  playerWon = (playerSymbol) => {
    var board = this.createNewBoard();
    if (this.state.gameRound === 2) {
      this.setState({
        board : board,
        nextPlayer : '0',
        gameScores : ['0', '0', '0'],
        gameRound : 0,
      });
    } else {
      var newGameScore = this.state.gameScores.slice();
      newGameScore[this.state.gameRound] = playerSymbol;
      this.setState({
        board : board,
        nextPlayer : '0',
        gameScores : newGameScore,
        gameRound : this.state.gameRound + 1,
      });
      console.log(this.state.board);
    }
  }

  render() {
    return (<div>
      <Grid girdOnClick={(columnNumber) => this.handleClick(columnNumber)} board={this.state.board}/>
      <div>
        <h3> Round {this.state.gameRound + 1} </h3>
        <h4> {this.state.gameScores} </h4>
       </div>
    </div>);
  }
}
