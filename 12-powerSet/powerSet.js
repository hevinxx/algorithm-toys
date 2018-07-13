/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
  var arr = str.split('').sort((a,b) => a < b ? -1 : 1);
  var result = [];
  for (var i = 0; i < 2 ** arr.length; i++) {
    var binaries = (+ '' + i).toString(2).split('');
    while (binaries.length < arr.length) {
      binaries.unshift('0');
    }
    var element = binaries.map((binary, index) => {
      return binary === '0' ? '' : arr[index]
    }).join('');
    result.push(element);
  }
  return result;
}

console.log(powerSet('jump'));
