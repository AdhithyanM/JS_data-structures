const LinkedListQueue = require('./queue-implementation');

const print = (msg) => console.log(msg);

const queue = new LinkedListQueue();
print(queue);
print(queue.items);   // undefined

print("---- enqueue()");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();


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
