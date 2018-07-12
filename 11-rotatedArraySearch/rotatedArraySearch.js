/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  const recursion = function (start, end) {
    const mid = Math.floor((end + start) / 2);
    if (target === rotated[start]) {
      return start;
    } else if (target === rotated [mid]) {
      return mid;
    } else if (target === rotated [end]) {
      return end;
    } else if (rotated[start] > rotated[mid]) {
      if (target > rotated[start] || target < rotated[mid]) {
        return recursion(start, mid);
      } else {
        return recursion(mid, end);
      }
    } else {
      if (target > rotated[mid] || target < rotated[end]) {
        return recursion(mid, end);
      } else {
        return recursion(start, end);
      }
    }
  }  
  return recursion(0, rotated.length - 1);
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2));