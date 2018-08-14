/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this._storage = {};
  this._size = 0;

  // add an item to the top of the stack
  this.push = function(item){
    this._storage[this._size] = item;
    this._size++;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    if (this._size-- > 0) {
      var result = this._storage[this._size];
      delete this._storage[this._size];
      return result;
    }
  };

  // return the number of items in the stack
  this.size = function(){
    return this._size;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  this._storage = inbox._storage;
  this._start = 0;
  this._end = 0;

  // called to add an item to the `queue`
  this.enqueue = function(item){
    // TODO: implement `enqueue`
    inbox.push(item);
    this._end++;
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    if (this._start < this._end) {
      var result = this._storage[this._start];
      delete this._storage[this._start];
      inbox._size--;
      this._start++;
      return result;
    }
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size();
  };
};
