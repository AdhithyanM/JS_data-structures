/*
- LIFO - Last In First Out
- i.e, insert from one end and remove from same end
- If we consider linked list,
- we can treat inserting a node at the start of the list as push operation
- and removing the node at the start as pop operation.
*/
const LinkedList = require('../linkedlist-with-tail');

class LinkedListStack 
{
  #list;

  constructor () {
    this.#list = new LinkedList();
  }

  push (value) {
    this.#list.prepend(value);
  }

  pop () {
    return this.#list.removeFromFront();
  }

  peek () {
    return this.#list.getHead().value;
  }

  isEmpty () {
    return this.#list.isEmpty();
  }

  size () {
    return this.#list.size();
  }

  print () {
    return this.#list.print();
  }
}

module.exports = LinkedListStack;