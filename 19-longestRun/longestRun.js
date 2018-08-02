/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  var champion = 0; 
  var challenger = 0;
  var record = 1;
  for (var i = 1; i < string.length; i++) {    
    if (string[i] !== string[challenger]) {
      if (i - challenger > record) {
        champion = challenger;
        record = i - champion;
      } 
      challenger = i;
    } if (i === string.length - 1 && i + 1 - challenger > record) {
      champion = challenger;
      record = i + 1 - champion;
    }
  }
  return [champion, champion + record - 1];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
