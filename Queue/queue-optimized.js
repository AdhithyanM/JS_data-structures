class Queue
{
  #items;
  // 2 pointers for tracking where our #rear and #front are pointing.
  #rear;
  #front;

  constructor() {
    this.#items = {};   // instead of array we use object here to support queue time complexities.
    this.#rear = 0;
    this.#front = 0;
  }

  enqueue (element) {
    this.#items[this.#rear] = element;
    this.#rear++;
  }
  
  dequeue () {
    const item = this.#items[this.#front];
    delete this.#items[this.#front];
    this.#front++;
    return item;
  }

  isEmpty () {
    return this.#rear - this.#front === 0;
  }
  
  peek () {
    return this.#items[this.#front];
  }

  size () {
    return this.#rear - this.#front;
  }

  print () {
    console.log(Object.values(this.#items).toString());
  }
}

module.exports = Queue