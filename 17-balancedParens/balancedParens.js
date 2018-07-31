/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  var stack = [];
  for (var i = 0; i < input.length; i++) {
    if (['(', '{', '['].includes(input[i])) {
      stack.push(input[i]);
    } else if (input[i] === ')') {
      if (stack.pop() !== '(') { return false; }
    } else if (input[i] === '}') {
      if (stack.pop() !== '{') { return false; }
    } else if (input[i] === ']') {
      if (stack.pop() !== '[') { return false; }
    }
  }
  return stack.length === 0 ? true : false
};
