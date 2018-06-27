/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (integer) {
  var result = [];
  var cases = Math.pow(3, integer);
  for (var i = 0; i < cases; i++) {
    var m = i;
    var instance = [];
    for (var j = integer; j > 0; j--) {
      var r = m % Math.pow(3, j-1);
      var pq = m - r;
      instance.push(pq / Math.pow(3, j-1));
      m = r;
    }
    result.push(instance);
  }
  for (var l = 0; l < result.length; l++) {
    result[l] = result[l].map(function (three) {
      if (three === 0) {
        return 'rock';
      } else if (three === 1) {
        return 'scissors';
      } else if (three === 2) {
        return 'paper';
      }
    });
  }
  return result;
}

