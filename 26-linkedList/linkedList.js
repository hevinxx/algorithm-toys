/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function () {
  this.head = null;
  this.tail = this.head;
};

//write methods here!

LinkedList.prototype.addToTail = function (value) {
  var newNode = this.makeNode(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function () {
  this.head = this.head.next;
  if (this.head === null) { this.tail = null; }
};

LinkedList.prototype.contains = function (value) {
  var lookup = function (node) {
    if (!node.next) { return false; }
    return node.value === value ? true : lookup(node.next)
  }
  return lookup(this.head);
};

LinkedList.prototype.makeNode = function (value) {
  return { value: value, next: null };
};
