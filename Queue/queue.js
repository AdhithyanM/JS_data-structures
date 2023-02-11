// To implement the queue data structure we gonna create Queue class and implement its properties and nethods.
class Queue
{
  #items;

  constructor () {
    this.#items = [];
  }

  enqueue (element) {
    this.#items.push(element);
  }

  dequeue () {
    return this.#items.shift();   // built-in array method to delete 0th pos item and shift the array #items respectively.
    // one problem here is dequeue operation should be O(1) but here its O(n)
    // so refer queue-optimized for optimal approach.
  }

  peek () {
    if(!this.isEmpty()) {
      return this.#items[0];
    }
    return null;
  }

  isEmpty () {
    return this.#items.length === 0;
  }

  size () {
    return this.#items.length;
  }

  print () {
    console.log(this.#items.toString());
  }
}

module.exports = Queue;