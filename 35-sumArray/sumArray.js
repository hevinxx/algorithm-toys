/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  var sum = smallestSum = biggestGap = 0;
  var biggestNegative = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > biggestNegative) { biggestNegative = array[i]; }
    sum += array[i];
    if (array[i] < 0 && array[i + 1] >= 0) {
      if (sum < smallestSum) {
        smallestSum = sum;
      }
    } else if (i === array.length - 1 || array[i] > 0 && array[i + 1] <= 0) {
      if (sum - smallestSum > biggestGap) {
        biggestGap = sum - smallestSum;
      }
    }
  }
  return biggestGap === 0 ? biggestNegative : biggestGap
};