/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var arr = [...array];
  arr.sort(function(a, b) {
    return a - b;
  })
  var threeMaxs = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]; 
  var twoMinsAndMax = arr[0] * arr[1] * arr[arr.length - 1];
  return Math.max(threeMaxs, twoMinsAndMax);
};
