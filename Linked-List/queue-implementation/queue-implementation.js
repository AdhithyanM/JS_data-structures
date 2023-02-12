/*
- FIFO - First In First Out
- We insert from one end and remove from the other end.
- If we consider linked list,
- we can treat inserting a node at the end of the list as the enqueue operation.
- and removing a node at the start of the list as dequeue operation.
*/
const LinkedList = require('../linkedList-with-tail');

class LinkedListQueue
{
  constructor () {
    this.list = new LinkedList();
  }

  enqueue (element) {
    // inserts at the end of the linked list
    this.list.append(element);
  } 

  dequeue () {
    // pops out from the front of the linked list
    return this.list.removeFromFront();
  }

  peek () {
    return this.list.getHead().value;
  }

  isEmpty () {
    return this.list.isEmpty();
  }

  size () {
    return this.list.size();
  }

  print () {
    return this.list.print();
  }
}

module.exports = LinkedListQueue;