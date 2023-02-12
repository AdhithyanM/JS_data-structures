// we are going to represent each Node as a class that can be instantiated whenever a new node has to be added to the list.
class Node 
{
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList
{
  #head;
  #tail;
  #size;

  constructor () {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  isEmpty () {
    return this.#size === 0;
  }

  size () {
    return this.#size;
  }

  // to insert an item at front of the linked list - O(1)
  prepend (value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#size++;
  }

  // to insert an item at back of the linked list - O(1)
  append (value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      // find the tail and append
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size++;
  }

  // to insert an item at a particular index in the linked list - O(n)
  insert (value, index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of range');
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.#size - 1) {
      this.append(value);
    } else {
      const node = new Node(value);
      let prevPtr = this.#head;
      for(let i = 0; i < index-1; i++, prevPtr = prevPtr.next);
      node.next = prevPtr.next;
      prevPtr.next = node;
      this.#size++;
    }
  }
  
  removeFromFront () {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    return value;
  }

  removeFromEnd () {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.#tail.value;
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      // move to the node prev to #tail and start the operation
      let prev = this.#head;
      for(prev; prev.next !== this.#tail; prev = prev.next);
      prev.next = null;
      this.#tail = prev;
    }
    this.#size--;
    return value;
  }

  // to remove an item at a particular index in the linked list
  removeFrom (index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of range');
    }
    if (index === 0) {
      return this.removeFromFront();
    } if (index === this.#size - 1) {
      return this.removeFromEnd();
    } else {
      let removedNode;
      let prevPtr = this.#head;
      for(let i = 0; i < index-1; i++, prevPtr = prevPtr.next);
      removedNode = prevPtr.next;
      prevPtr.next = prevPtr.next.next;
      this.#size--;
      return removedNode;
    }
  }

  // to remove an item that has a particular value in the linked list
  remove (value) {
    if (this.#head.value === value) {
      this.#head = this.#head.next;
    } else {
      let prevPtr = this.#head;
      for(
        prevPtr; 
        prevPtr.next && prevPtr.next.value !== value;
        prevPtr = prevPtr.next
      );
      if (prevPtr.next === null) {
        return null;
      }
      if (prevPtr.next === this.#tail) {
        this.#tail = prev;
      }
      prevPtr.next = prevPtr.next.next;
    }
    this.#size--;
  }

  // to get index of an item that has a particular value
  search (value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.#head;
    let i = 0;
    while(curr) {
      if(curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  print () {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.#head;
      let str = '';
      while(curr) {
        str += curr.value + ', ';
        curr = curr.next;
      }
      console.log(str);
    }
  }

  reverse () {
    let prev = null;
    let curr = this.#head;
    let next = this.#head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.#head = prev;
  }

  getHead () {
    return this.#head;
  }

  getTail () {
    return this.#tail;
  }
}

module.exports = LinkedList;