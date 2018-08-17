/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function(n) {
  var count = 0;
  var board = new makeBoard(n);

  var robotPath = function(i, j) {
    if (i === n - 1 && j === n - 1) { count++; }
    else {
      board.togglePiece(i, j);
      if (!board.hasBeenVisited(Math.max(0, i - 1), j)) {
        robotPath(i - 1, j);
      } if (!board.hasBeenVisited(Math.min(n - 1, i + 1), j)) {
        robotPath(i + 1, j);
      } if (!board.hasBeenVisited(i, Math.max(0, j - 1))) {
        robotPath(i, j - 1);
      } if (!board.hasBeenVisited(i, Math.min(n - 1, j + 1))) {
        robotPath(i, j + 1);
      }
      board.togglePiece(i, j);
    }
  }
  
  robotPath(0, 0);
  return count;
}