const CircularQueue = require('./circular-queue');

const print = (msg) => console.log(msg);

const queue = new CircularQueue(5);
print(queue);
print(queue.items);   // undefined as its properties are private.

print("---- enqueue()");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();


print("---- isFull()");
print(queue.isFull());


print("---- peek()");
print(queue.peek());
queue.print();


print("---- size()");
print(queue.size());


print("---- dequeue()");
print(queue.dequeue());
queue.print();
print(queue.dequeue());
queue.print();
print(queue.size());


print("---- isEmpty()");
print(queue.isEmpty());