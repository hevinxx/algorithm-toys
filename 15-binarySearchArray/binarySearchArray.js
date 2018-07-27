/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(array, target) {
  var lookUp = function(start, end) {
    var mid = Math.floor((start + end) / 2);
    if (target < array[mid]) {
      return lookUp(start, mid);
    } else if (target > array[mid]) {
      return lookUp(mid, end);
    } else {
      return [mid];
    }
  }
  return lookUp(0, array.length - 1);
};
