/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  var array = number.toString(10).split('.');
  if (array.length === 1) { return '' + array[0] + '/1'}
  var numerator = array[1] * 1;
  var denomiator = 10 ** array[1].length;
  while (!(numerator % 2 || denomiator % 2)) {
    numerator /= 2;
    denomiator /= 2;
  }
  while (!(numerator % 5 || denomiator % 5)) {
    numerator /= 5;
    denomiator /= 5;
  }
  return '' + (array[0] * denomiator + numerator) + '/' + denomiator;
};
