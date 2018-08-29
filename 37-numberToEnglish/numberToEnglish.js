/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  var [int, frac] = ('' + this).split('.');
  var perThreeDigits = function (num) {
    var str = '';
    if (num > 99) { str += numbersToWords[Math.floor(num / 100)] + ' hundred '; }
    num %= 100;
    if (num === 0) { return str.slice(0, -1); }
    if (num <= 20) { 
      str += numbersToWords[num];
      return str;
    }
    str += numbersToWords[num - (num % 10)];
    if (num % 10 > 0) { str += '-' + numbersToWords[num % 10]; }
    return str
  }
  var makeString = function (num) {
    if (num === '0') { return 'zero'; }
    var arr = [];
    var place = 1;
    while (num >= 1) {
      var threeDigits = num % 1000;
      num -= threeDigits;
      num /= 1000;
      place *= 1000;
      if (threeDigits === 0) { continue; }
      place === 1000 || arr.unshift(numbersToPlace[place / 1000]);
      arr.unshift(perThreeDigits(threeDigits))
    }
    return arr.join(' ');
  }
  if (frac === undefined) { return makeString(int); }
  var bunMo = makeString(10 ** frac.length);
  if (bunMo.slice(0, 4) === 'one ') { bunMo = bunMo.slice(4); }
  bunMo = bunMo.split(' ').join('-');
  var fracString = makeString(frac) === 'one'
  ? makeString(frac) + ' ' + bunMo + 'th'
  : makeString(frac) + ' ' + bunMo + 'ths'
  return int === '0'
  ? fracString
  : makeString(int) + ' and ' + fracString
};
