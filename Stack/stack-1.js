const Stack = require('./stack');

const print = (msg) => console.log(msg);

const stack = new Stack();
console.log(stack);
console.log(stack.items);  // undefined. - because our underlying array items is a private property.


print("---- push()");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();


print("---- peek()");
print(stack.peek());
stack.print();


print("---- size()");
print(stack.size());


print("---- pop()");
print(stack.pop());
stack.print();
print(stack.pop());
stack.print();
print(stack.size());


print("---- isEmpty()");
print(stack.isEmpty());