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
  var cases = 3 ** integer;
  for (var i = 0; i < cases; i++) {
    var trinaries = i.toString(3).split('');
    while (trinaries.length < integer) {
      trinaries.unshift('0');
    }
    var element = trinaries.map(function (three) {
      if (three === '0') {
        return 'rock';
      } else if (three === '1') {
        return 'scissors';
      } else if (three === '2') {
        return 'paper';
      }
    });
    result.push(element);
  }
  return result;
}
