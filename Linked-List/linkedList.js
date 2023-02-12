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
  #size;

  constructor () {
    this.#head = null;
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
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#size++;
  }

  // to insert an item at back of the linked list - O(n)
  append (value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.#head = node;
    } else {
      // find the tail and append
      let tail = this.#head;
      for (tail; tail.next; tail = tail.next);
      tail.next = node;
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
    } else {
      const node = new Node(value);
      let prevPtr = this.#head;
      for (let i = 0; i < index-1; i++, prevPtr = prevPtr.next);
      node.next = prevPtr.next;
      prevPtr.next = node;
      this.#size++;
    }
  }

  // to remove an item at a particular index in the linked list
  removeFrom (index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of range');
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.#head;
      this.#head = this.#head.next;
    } else {
      let prevPtr = this.#head;
      for (let i = 0; i < index-1; i++, prevPtr = prevPtr.next);
      removedNode = prevPtr.next;
      prevPtr.next = prevPtr.next.next;
    }
    this.#size--;
    return removedNode;
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
    while (curr) {
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
      while (curr) {
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