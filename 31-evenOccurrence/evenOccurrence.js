/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var odds = {};
  for (var i = 0; i < arr.length; i++) {
    if (odds.hasOwnProperty(arr[i])) { continue; }
    var isEven = false;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) { isEven = !isEven; }
    }
    if (isEven) { return arr[i]; }
    odds[arr[i]] = true;
  }
  return null;
};
