/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var objStr1 = {};
  var arrStr2 = string2.split('');
  var result = [];

  for (var i = 0; i < string1.length; i++) {
    objStr1[string1[i]] = string1[i];
  }
  for (var key in objStr1) {
    if (arrStr2.includes(key)) {
      result.push(key);
    }
  }
  return result.join('');
};

console.log(commonCharacters('acexivou', 'aegihobu'))
