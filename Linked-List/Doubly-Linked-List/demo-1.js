const DoublyLinkedList = require('./doublyLinkedList');

const print = (msg) => console.log(msg);

const dll = new DoublyLinkedList();
dll.print();
print(dll.head);    // undefined as the properties of dll are private.


print("---- prepend()");
dll.prepend(10);
dll.prepend(20);
dll.prepend(30);
dll.print();


print("---- append()");
dll.append(60);
dll.append(70);
dll.append(80);
dll.print();


print("---- insert()");
dll.insert(100, 3);
dll.print();
dll.insert(200, 0);
dll.print();
dll.insert(300, 6);
dll.print();


print("---- removeFrom()");
dll.removeFrom(6);
dll.print();


print("---- removeFromFront()");
dll.removeFromFront();
dll.print();


print("---- removeFromEnd()");
dll.removeFromEnd();
dll.print();


print("---- remove()");
print(dll.remove(50));
dll.print();


print("---- search()");
print(dll.search(100));


print("---- print Reverse");
dll.printReverse();
