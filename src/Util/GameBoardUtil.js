
export function createEmptyBoard() {
  var board = new Array(7);
  for (var i = 0; i < board.length; i ++) {
    board[i] = new Array(8).fill('0');
  }
  return board;
}
