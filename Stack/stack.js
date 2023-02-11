// To implement the stack data structure we gonna create Stack class and implement its properties and nethods.
class Stack 
{
  #items;

	constructor () {
		this.#items = []
	}

	push (element) {
		this.#items.push(element);
	}

	pop () {
		return this.#items.pop();   // built-in array method
	}

	peek () {
		const topIndex = this.#items.length - 1;
		return this.#items[topIndex];
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

module.exports = Stack;