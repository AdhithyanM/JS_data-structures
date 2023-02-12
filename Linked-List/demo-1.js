const LinkedList = require('./linkedList');

const print = (msg) => console.log(msg);

const ll = new LinkedList();
ll.print();
print(ll.head);    // undefined as the properties of LL are private.


print("---- prepend()");
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.print();


print("---- append()");
ll.append(60);
ll.append(70);
ll.append(80);
ll.print();


print("---- insert()");
ll.insert(100, 3);
ll.print();
ll.insert(200, 0);
ll.print();
ll.insert(300, 6);
ll.print();


print("---- removeFrom()");
ll.removeFrom(6);
ll.print();


print("---- remove()");
print(ll.remove(50));
ll.print();


print("---- search()");
print(ll.search(30));


print("---- reverse()");
ll.reverse();
ll.print();
ll.reverse();
ll.print();